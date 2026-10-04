import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import contributions from "../data/contributions.json";
import LineChart, { monthLabel } from "./charts/LineChart";
import { GsocEmblem } from "./canvas";

const WRITEUP =
  "https://medium.com/@prateek23022004/the-librarian-smart-content-mapping-my-gsoc-2026-with-owasp-opencre-module-c-8db874d46bab";
const COMMITS = "https://github.com/OWASP/OpenCRE/commits?author=PRAteek-singHWY";

// GSoC leads. Every figure is from CLAUDE.md Part 3.
const gsoc = [
  ["96.5%", "auto-link precision at a 0.80 threshold, 6 wrong of 172"],
  ["98%", "retrieval recall on a 319-chunk hand-labelled golden set"],
  ["5 of 5", "review recall: every chunk that needed a human reached one"],
  ["13 of 13", "reranker interventions regressed; the cause, 427 of 428 empty CRE descriptions, was published as a finding"],
];

const highlights = [
  {
    value: "1.00",
    text: "precision and recall for mcp-recon v0.1.0 on 21 fixture machines, 14 rules across 10 AI coding agents.",
    source: { label: "mcp-recon", href: "#mcp-recon" },
  },
  {
    value: "7",
    text: "merged PRs upstream in 2026, in Kuadrant mcp-gateway, Apicurio Registry, OpenTelemetry and OpenKruise.",
    source: { label: "The PRs", href: "#upstream" },
  },
  {
    value: "SDE Intern",
    text: "at Evaratus (Scaler AI Labs), building RL environments, evaluations and MCP servers for frontier AI labs.",
    source: { label: "Role", href: "#evaratus" },
  },
];

const lastYear = contributions.totalsByMonth.slice(-12);
const current = lastYear[lastYear.length - 1].month;
const updated = new Date(contributions.generatedAt).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const Highlights = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Recent</p>
      <h2 className={styles.sectionHeadText}>Highlights.</h2>
    </motion.div>

    <motion.article
      variants={fadeIn("up", "spring", 0.1, 0.75)}
      className="mt-10 green-pink-gradient p-[1px] rounded-[24px] shadow-card"
    >
      <div className="bg-tertiary rounded-[24px] p-6 sm:p-10 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-center">
        <div className="min-w-0">
          <p className="text-gsoc font-semibold text-[15px] tracking-wide">Google Summer of Code 2026 · OWASP Foundation</p>
          <h3 className="mt-2 font-display text-white text-[28px] sm:text-[40px] font-black leading-tight">
            Module C, the link decision engine inside OWASP OpenCRE
          </h3>
          <p className="mt-4 text-secondary text-[16px] leading-[27px] max-w-3xl">
            OpenCRE joins security standards into one graph. Module C reads each new
            piece of content, links it where it belongs, and sends anything it is
            unsure about to a person instead of guessing. Retrieval over pgvector, a
            cross-encoder reranker, and a decision layer gated on expected
            calibration error. Every decision lands in the queue Module D reads,
            with its score, candidates and audit trail. Mentored by Spyros
            Gasteratos and Rob van der Veer.
          </p>
        </div>
        <div className="relative w-full h-[240px] sm:h-[300px] order-first lg:order-none">
          <GsocEmblem className="absolute inset-0" />
        </div>

        <dl className="lg:col-span-2 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
          {gsoc.map(([value, label]) => (
            <div key={value} className="rounded-2xl bg-black-100 p-5 border border-white/5">
              <dt className="font-display text-white text-[34px] sm:text-[40px] font-black leading-none">{value}</dt>
              <dd className="mt-3 text-secondary text-[14.5px] leading-snug">{label}</dd>
            </div>
          ))}
        </dl>

        <p className="lg:col-span-2 flex flex-wrap gap-3">
          {[
            ["The full entry", "#module-c"],
            ["Read the write-up", WRITEUP],
            ["See the commits", COMMITS],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex items-center min-h-[44px] px-5 rounded-xl bg-accent hover:bg-accent-dim text-on-accent font-semibold text-[15px] transition-colors"
            >
              {label}
            </a>
          ))}
        </p>
      </div>
    </motion.article>

    <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
      {highlights.map((h, i) => (
        <motion.li key={h.value} variants={fadeIn("up", "spring", 0.2 + i * 0.1, 0.6)}>
          <a
            href={h.source.href}
            className="block h-full rounded-2xl p-6 bg-black-100 border border-white/5 hover:border-accent transition-colors"
          >
            <span className="block font-display text-white text-[30px] font-black leading-none">{h.value}</span>
            <span className="block mt-3 text-secondary text-[15px] leading-relaxed">{h.text}</span>
            <span className="block mt-3 text-accent text-[14px] font-semibold">{h.source.label}</span>
          </a>
        </motion.li>
      ))}
    </ul>

    <div className="mt-8">
      <LineChart
        title="Public commits per month, last 12 months"
        subtitle={`${monthLabel(lastYear[0].month)} to ${monthLabel(current)}. Public repositories only; private work is not counted. GSoC 2026 shaded.`}
        data={lastYear}
        milestones={contributions.milestones.filter((m) => m.date.length === 7 && m.date >= lastYear[0].month)}
        shade={{ from: "2026-05", to: "2026-08", label: "GSoC 2026" }}
        height={230}
        footnote={`From the GitHub API. Updated ${updated}; ${monthLabel(current)} is partial.`}
      />
    </div>
  </>
);

export default SectionWrapper(Highlights, "highlights");
