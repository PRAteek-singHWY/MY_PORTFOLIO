import { useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useReducedMotion } from "../utils/media";
import { github } from "../assets";
import { eras, handCodedNote, throughLine } from "../constants/journey";
import { ThresholdCanvas } from "./canvas";
import { AUTO_LINKED, WRONG } from "./canvas/Threshold";

const OPENCRE_COMMITS = "https://github.com/OWASP/OpenCRE/commits?author=PRAteek-singHWY";

// Deep violet cards, in the spirit of the original purple timeline.
const cardStyle = {
  background: "rgb(var(--c-card))",
  color: "rgb(var(--c-ink))",
  border: "1px solid rgb(var(--c-accent) / 0.35)",
  boxShadow: "0 18px 50px -20px rgba(0,0,0,0.6)",
  borderRadius: 16,
};

const tidyDate = (d) => String(d).replace(" - ", " to ").replace("Present", "present");

const PrLinks = ({ links }) =>
  links?.map((l) => (
    <a
      key={l.href}
      className="ml-2 text-accent underline underline-offset-2 hover:text-white"
      href={l.href}
      target="_blank"
      rel="noreferrer"
    >
      {l.label}
    </a>
  ));

const Points = ({ points }) => (
  <ul className="list-disc mt-4 ml-5 space-y-2">
    {points.map((p, i) => (
      <li key={i} className="text-white-100 text-[14.5px] leading-relaxed pl-1 break-words [overflow-wrap:anywhere]">
        {typeof p === "string" ? p : p.text}
        <PrLinks links={p.links} />
      </li>
    ))}
  </ul>
);

const Metrics = ({ metrics }) => (
  <dl className="grid grid-cols-2 gap-3 content-start">
    {metrics.map((m) => (
      <div key={m.label} className="rounded-xl p-3 bg-black-200/70 border border-white/10 min-w-0 break-words">
        <dt className="text-white text-[20px] font-black leading-none">{m.value}</dt>
        <dd className="mt-1.5 text-[12.5px] leading-snug text-white-100">
          {m.label}
          {m.detail && <span className="block text-secondary mt-0.5">{m.detail}</span>}
        </dd>
      </div>
    ))}
  </dl>
);

const Evidence = ({ evidence }) =>
  evidence ? (
    <p className="mt-4 flex flex-wrap items-center gap-2 text-[13.5px]">
      <span className="text-secondary">On GitHub:</span>
      {evidence.map((e) => (
        <a
          key={e.href}
          href={e.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center min-h-[36px] px-3 rounded-lg bg-black-200/70 border border-white/10 hover:border-accent text-white"
        >
          {e.label}
        </a>
      ))}
    </p>
  ) : null;

const ModuleCFigure = () => (
  <figure className="mt-6 rounded-2xl p-4 sm:p-5 bg-black-200/80 border border-white/10 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-5 items-center">
    <div className="relative w-full h-[280px]">
      <ThresholdCanvas className="absolute inset-0" />
    </div>
    <figcaption className="text-[13px] text-white-100">
      <p className="text-[15px] font-semibold text-white">The decision threshold</p>
      <p className="mt-1 text-secondary">
        Height is confidence. Above the 0.80 plane the engine links on its own; below it, a person decides.
      </p>
      <ul className="mt-3 space-y-1.5">
        <li className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--chart-series)]" /> {AUTO_LINKED - WRONG} correct auto-links
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full border-[2.5px] border-white" /> {WRONG} wrong auto-links, as rings
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--chart-muted)]" /> routed to human review
        </li>
      </ul>
      <p className="mt-3 text-secondary text-[12px]">
        Counts above the plane are measured. Positions, and everything below the plane, are illustrative.{" "}
        <a className="text-accent underline" href={OPENCRE_COMMITS} target="_blank" rel="noreferrer">
          See the commits
        </a>
        .
      </p>
    </figcaption>
  </figure>
);

const WorkBody = ({ entry }) => (
  <>
    <h3 className="text-white text-[22px] font-bold">{entry.title}</h3>
    {entry.company_name && <p className="text-secondary text-[15px] font-semibold">{entry.company_name}</p>}
    {entry.metrics ? (
      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] gap-6 min-w-0">
        <div className="min-w-0"><Points points={entry.points} /></div>
        <div className="md:pt-4 min-w-0">
          <Metrics metrics={entry.metrics} />
        </div>
      </div>
    ) : (
      <Points points={entry.points} />
    )}
    {entry.tags && <p className="mt-3 text-[13px] text-secondary">{entry.tags.map((t) => `#${t}`).join("  ")}</p>}
    {entry.status && (
      <p className="mt-4 rounded-xl px-3 py-2 text-[13.5px] bg-black-200/70 border border-dashed border-white/20">
        <span className="text-secondary">Status: </span>
        {entry.status}
      </p>
    )}
    <Evidence evidence={entry.evidence} />
    {entry.featured === "moduleC" && <ModuleCFigure />}
  </>
);

const ProjectBody = ({ entry }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <img
        src={entry.image}
        alt={`${entry.name} screenshot`}
        loading="lazy"
        className="w-full md:w-[240px] h-[170px] md:h-[160px] object-cover rounded-xl flex-shrink-0"
      />
      <div className="min-w-0">
        <h3 className="text-white text-[22px] font-bold">{entry.name}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-white-100">{entry.description}</p>
        <p className={`mt-3 text-[14px] leading-relaxed text-secondary ${open ? "" : "line-clamp-3"}`}>
          <span className="text-white font-semibold">What was hard: </span>
          {entry.ProblemsFaced}
        </p>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="mt-1 min-h-[40px] text-[13px] text-accent hover:text-white">
          {open ? "Show less" : "Read the full story"}
        </button>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span key={tag.name} className={`text-[13px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {entry.access_link && (
            <a href={entry.access_link} target="_blank" rel="noreferrer" className="inline-flex items-center min-h-[44px] px-4 rounded-xl bg-black-200/70 border border-white/10 hover:border-accent text-[14px]">
              Live site
            </a>
          )}
          <a href={entry.source_code_link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-xl bg-accent hover:bg-accent-dim text-on-accent text-[14px] font-semibold">
            <img src={github} alt="" className="w-4 h-4" /> Source on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Entry = ({ entry, animate }) => (
  <VerticalTimelineElement
    id={entry.anchor}
    visible={!animate || undefined}
    contentStyle={cardStyle}
    contentArrowStyle={{ borderRight: "7px solid rgb(var(--c-card))" }}
    date={entry.kind === "project" ? entry.year : tidyDate(entry.date)}
    dateClassName="journey-date"
    iconStyle={{ background: "rgb(var(--c-tertiary))", boxShadow: "0 0 0 3px rgb(var(--c-accent))" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {entry.icon ? (
          <img src={entry.icon} alt="" className="w-[60%] h-[60%] object-contain" />
        ) : (
          <span className="block w-3 h-3 rounded-full bg-accent" />
        )}
      </div>
    }
  >
    {entry.kind === "project" ? <ProjectBody entry={entry} /> : <WorkBody entry={entry} />}
  </VerticalTimelineElement>
);

const Journey = () => {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>2026 back to 2022</p>
        <h2 className={styles.sectionHeadText}>Journey.</h2>
      </motion.div>
      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[28px]">
        Newest first. The research comes first, then the open source that led to
        it, then the projects I learned on. Every project keeps the year it was built.
      </p>


      {eras.map((era, i) => (
        <div key={era.id}>
          {era.early && !eras[i - 1]?.early && (
            <div className="mt-24 max-w-3xl rounded-2xl green-pink-gradient p-[1px]">
              <p className="rounded-2xl bg-tertiary px-6 py-5 text-white text-[18px] sm:text-[20px] leading-snug font-medium">
                <span className="block text-accent text-[13px] uppercase tracking-wider mb-2">The early projects</span>
                {handCodedNote}
              </p>
            </div>
          )}

          <div id={era.id} className="mt-20 scroll-mt-28">
            <p className="text-[14px] uppercase tracking-wider text-accent">
              Era {era.numeral} · {era.years}
            </p>
            <h3 className="mt-1 font-display text-white text-[28px] sm:text-[36px] font-black leading-tight">{era.title}</h3>
            <p className="mt-1 text-secondary">{era.question}</p>
            <p className="mt-4 text-white-100 text-[16px] leading-[27px] max-w-3xl">{era.summary}</p>

            <div className="mt-10">
              <VerticalTimeline layout="1-column-left" lineColor="rgb(var(--c-accent))" animate={!reducedMotion}>
                {era.entries.map((entry) => (
                  <Entry key={entry.name || entry.title} entry={entry} animate={!reducedMotion} />
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      ))}

      <blockquote className="mt-20 max-w-3xl border-l-4 border-accent pl-5 text-white text-[20px] sm:text-[26px] leading-snug font-semibold">
        {throughLine}
      </blockquote>
    </>
  );
};

export default SectionWrapper(Journey, "journey");
