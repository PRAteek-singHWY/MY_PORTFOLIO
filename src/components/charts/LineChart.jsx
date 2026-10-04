import React, { useEffect, useMemo, useRef, useState } from "react";
import { themeColor } from "../../utils/theme";

// Hand-rolled SVG line/area chart. One series, one y-axis.
// Palette and rules: CLAUDE.md Part 6. Do not use the UI accent for series.
// Getters, so each render picks up the active theme's validated chart colours.
export const CHART = {
  get series() { return themeColor("--chart-series", "#9085e9"); },
  get surface() { return themeColor("--chart-surface", "#12161C"); },
  get ink() { return themeColor("--chart-ink", "#E9EBEE"); },
  get inkMuted() { return themeColor("--chart-muted", "#858D99"); },
  get grid() { return themeColor("--chart-grid", "#242B34"); },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const monthLabel = (key) => {
  const [y, m] = key.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};

const useWidth = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!ref.current) return undefined;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [ref, width];
};

const niceMax = (v) => {
  if (v <= 5) return 5;
  const step = 10 ** Math.floor(Math.log10(v));
  return Math.ceil(v / step) * step;
};

/**
 * data:        [{ month: "YYYY-MM", commits }]
 * milestones:  [{ date: "YYYY" | "YYYY-MM", label }]
 * shade:       { from: "YYYY-MM", to: "YYYY-MM", label } optional window
 */
const LineChart = ({
  title,
  subtitle,
  data,
  milestones = [],
  shade,
  valueLabel = "commits",
  height = 260,
  footnote,
}) => {
  const [wrapRef, width] = useWidth();
  const [hover, setHover] = useState(null);
  const [showTable, setShowTable] = useState(false);

  const compact = width > 0 && width < 560;
  const pad = { top: compact ? 16 : 56, right: 16, bottom: 28, left: 36 };
  const w = Math.max(width, 1);
  const innerW = Math.max(w - pad.left - pad.right, 1);
  const innerH = height - pad.top - pad.bottom;

  const index = useMemo(() => new Map(data.map((d, i) => [d.month, i])), [data]);
  const maxY = niceMax(Math.max(1, ...data.map((d) => d.commits)));
  const x = (i) => pad.left + (data.length > 1 ? (i / (data.length - 1)) * innerW : innerW / 2);
  const y = (v) => pad.top + innerH - (v / maxY) * innerH;

  // Month milestones sit on their month. Year-only milestones span that year.
  const placed = milestones
    .map((m, n) => {
      if (/^\d{4}$/.test(m.date)) {
        const from = index.get(`${m.date}-01`);
        const to = index.get(`${m.date}-12`) ?? data.length - 1;
        if (from === undefined) return null;
        return { ...m, n: n + 1, x0: x(from), x1: x(to), cx: (x(from) + x(to)) / 2 };
      }
      const i = index.get(m.date);
      if (i === undefined) return null;
      return { ...m, n: n + 1, x0: x(i), x1: x(i), cx: x(i) };
    })
    .filter(Boolean);

  const line = data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(d.commits).toFixed(1)}`).join("");
  const area = `${line}L${x(data.length - 1).toFixed(1)},${y(0)}L${x(0).toFixed(1)},${y(0)}Z`;

  const years = data
    .map((d, i) => ({ d, i }))
    .filter(({ d }) => d.month.endsWith("-01"))
    .map(({ d, i }) => ({ label: d.month.slice(0, 4), x: x(i) }));
  const yTicks = [0, maxY / 2, maxY];

  const shadeBox =
    shade && index.has(shade.from) && index.has(shade.to)
      ? { x0: x(index.get(shade.from)), x1: x(index.get(shade.to)) }
      : null;

  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const i = Math.round(((px - pad.left) / innerW) * (data.length - 1));
    setHover(Math.min(data.length - 1, Math.max(0, i)));
  };

  const hovered = hover !== null ? data[hover] : null;

  return (
    <figure className="rounded-2xl p-4 sm:p-5" style={{ background: CHART.surface, border: `1px solid ${CHART.grid}` }}>
      <figcaption className="mb-2">
        <p className="text-[16px] font-semibold" style={{ color: CHART.ink }}>
          {title}
        </p>
        {subtitle && (
          <p className="text-[14px] italic mt-0.5" style={{ color: CHART.inkMuted }}>
            {subtitle}
          </p>
        )}
      </figcaption>

      <div ref={wrapRef} className="relative w-full" style={{ height }}>
        {width > 0 && (
          <svg
            width={w}
            height={height}
            role="img"
            aria-label={`${title}. Table view available below.`}
            onPointerMove={onMove}
            onPointerLeave={() => setHover(null)}
            style={{ touchAction: "pan-y" }}
          >
            {shadeBox && (
              <g>
                <rect
                  x={shadeBox.x0}
                  y={pad.top}
                  width={Math.max(shadeBox.x1 - shadeBox.x0, 2)}
                  height={innerH}
                  fill={CHART.ink}
                  opacity={0.06}
                />
                <text x={shadeBox.x0 + 4} y={pad.top + (compact ? 28 : 12)} fontSize={11} fill={CHART.inkMuted}>
                  {shade.label}
                </text>
              </g>
            )}

            {yTicks.map((t) => (
              <g key={t}>
                <line x1={pad.left} x2={w - pad.right} y1={y(t)} y2={y(t)} stroke={CHART.grid} strokeWidth={1} />
                <text x={pad.left - 6} y={y(t) + 4} fontSize={11} textAnchor="end" fill={CHART.inkMuted}>
                  {Math.round(t)}
                </text>
              </g>
            ))}

            {years.map((t) => (
              <text key={t.label} x={t.x} y={height - 8} fontSize={11} textAnchor="middle" fill={CHART.inkMuted}>
                {t.label}
              </text>
            ))}

            {placed.map((m) =>
              m.x1 > m.x0 ? (
                <rect key={m.n} x={m.x0} y={pad.top} width={m.x1 - m.x0} height={innerH} fill={CHART.ink} opacity={0.035} />
              ) : (
                <line key={m.n} x1={m.x0} x2={m.x0} y1={pad.top} y2={pad.top + innerH} stroke={CHART.inkMuted} strokeWidth={1} strokeDasharray="2 3" />
              )
            )}

            <path d={area} fill={CHART.series} opacity={0.14} />
            <path d={line} fill="none" stroke={CHART.series} strokeWidth={2} strokeLinejoin="round" />

            {/* milestone labels: text on wide screens, numbered markers when compact */}
            {placed.map((m, k) =>
              compact ? (
                <g key={`l${m.n}`}>
                  <circle cx={m.cx} cy={pad.top + 4} r={7} fill={CHART.surface} stroke={CHART.inkMuted} />
                  <text x={m.cx} y={pad.top + 8} fontSize={9.5} textAnchor="middle" fill={CHART.ink}>
                    {m.n}
                  </text>
                </g>
              ) : (
                <text
                  key={`l${m.n}`}
                  x={Math.min(Math.max(m.cx, pad.left + 4), w - pad.right - 4)}
                  y={14 + (k % 3) * 14}
                  fontSize={11}
                  textAnchor={m.cx > w * 0.7 ? "end" : m.cx < w * 0.2 ? "start" : "middle"}
                  fill={CHART.ink}
                >
                  {m.label}
                </text>
              )
            )}

            {hovered && (
              <g pointerEvents="none">
                <line x1={x(hover)} x2={x(hover)} y1={pad.top} y2={pad.top + innerH} stroke={CHART.ink} strokeWidth={1} opacity={0.5} />
                <circle cx={x(hover)} cy={y(hovered.commits)} r={4.5} fill={CHART.series} stroke={CHART.surface} strokeWidth={2} />
              </g>
            )}
          </svg>
        )}

        {hovered && (
          <div
            className="absolute pointer-events-none rounded-md px-2.5 py-1.5 text-[12px] whitespace-nowrap"
            style={{
              left: Math.min(Math.max(x(hover) - 60, 0), Math.max(w - 130, 0)),
              top: Math.max(y(hovered.commits) - 48, 0),
              background: CHART.surface,
              border: `1px solid ${CHART.grid}`,
              color: CHART.ink,
            }}
          >
            <span style={{ color: CHART.inkMuted }}>{monthLabel(hovered.month)}</span>{" "}
            <b>{hovered.commits}</b> {valueLabel}
          </div>
        )}
      </div>

      {compact && placed.length > 0 && (
        <ol className="mt-3 space-y-1 text-[12.5px]" style={{ color: CHART.ink }}>
          {placed.map((m) => (
            <li key={m.n} className="flex gap-2">
              <span style={{ color: CHART.inkMuted }}>{m.n}.</span>
              <span>
                <span style={{ color: CHART.inkMuted }}>{/^\d{4}$/.test(m.date) ? m.date : monthLabel(m.date)}</span>{" "}
                {m.label}
              </span>
            </li>
          ))}
        </ol>
      )}

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11.5px]" style={{ color: CHART.inkMuted }}>
        <span>{footnote}</span>
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          className="underline underline-offset-2 min-h-[44px] px-1"
          aria-expanded={showTable}
          style={{ color: CHART.ink }}
        >
          {showTable ? "Hide table" : "Show as table"}
        </button>
      </div>

      {showTable && (
        <div className="mt-2 max-h-64 overflow-auto">
          <table className="w-full text-left text-[12.5px]" style={{ color: CHART.ink }}>
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr style={{ color: CHART.inkMuted }}>
                <th className="py-1 font-normal">Month</th>
                <th className="py-1 font-normal text-right">{valueLabel}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.month} style={{ borderTop: `1px solid ${CHART.grid}` }}>
                  <td className="py-1">{monthLabel(d.month)}</td>
                  <td className="py-1 text-right tabular-nums">{d.commits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </figure>
  );
};

export default LineChart;
