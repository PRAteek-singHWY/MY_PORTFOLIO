import { projects, experiences } from "./index";

// The Journey section: four eras, oldest first. Nothing here is new work;
// the projects and roles are the ones in ./index.js, placed in the year they
// were built. Every figure comes from CLAUDE.md Part 3.

const project = (name) => {
  const found = projects.find((p) => p.name === name);
  if (!found) throw new Error(`journey: no project named ${name}`);
  return { kind: "project", ...found };
};

const role = (title) => {
  const found = experiences.find((e) => e.title === title);
  if (!found) throw new Error(`journey: no experience titled ${title}`);
  return { kind: "role", ...found };
};

const chronological = [
  {
    id: "era-1",
    early: true,
    numeral: "I",
    years: "2022 to 2023",
    title: "Learning by building, alone",
    question: "Does it run?",
    summary:
      "The MERN years. Tutorials, official docs, Stack Overflow, and a lot of reading error messages. When the API a tutorial depended on went paid-only halfway through MuZiK, the fix was reading unfamiliar documentation cold and remapping the data into the components I already had.",
    entries: [project("ShöpPiT"), project("iMAiGeM"), project("MuZiK")],
  },
  {
    id: "era-2",
    early: true,
    numeral: "II",
    years: "2024",
    title: "Systems, and the first real architecture",
    question: "Does it hold under load?",
    summary:
      "The work stops being about whether I can build something and starts being about whether it holds. The chat app worked locally on in-memory Maps and broke the moment it ran on more than one instance. I rebuilt it stateless around Redis Pub/Sub instead of patching it. Also the year I enrolled at BITS Pilani and Scaler School of Technology (Aug 2024), and the year of my first open source PRs.",
    entries: [
      project("Scaled Real-time Chat App"),
      project("Sec2ndBrain AI"),
      project("DevQuerA (in development)"),
      project("WandR (Mobile App)"),
      project("3D Portfolio"),
      {
        kind: "note",
        title: "First open source",
        date: "2024",
        evidence: [
          { label: "React-Admin-Dashboard #6", href: "https://github.com/Sweata1403/React-Admin-Dashboard-App_hacktoberfest2024/pull/6" },
          { label: "#8", href: "https://github.com/Sweata1403/React-Admin-Dashboard-App_hacktoberfest2024/pull/8" },
          { label: "AsyncAPI website #3737", href: "https://github.com/asyncapi/website/pull/3737" },
          { label: "#3738", href: "https://github.com/asyncapi/website/pull/3738" },
        ],
        points: [
          "Hacktoberfest and GSSoC.",
          "Merged documentation and code PRs to AsyncAPI.",
        ],
      },
    ],
  },
  {
    id: "era-3",
    numeral: "III",
    years: "2025",
    title: "Open source, in public, on other people's codebases",
    question: "Does it meet a maintainer's bar?",
    summary:
      "Working inside large codebases I did not write, to standards I did not set, and being trusted with review.",
    entries: [
      {
        kind: "note",
        title: "First contributions to OWASP OpenCRE",
        date: "Nov 2025",
        evidence: [
          { label: "The 42 PRs merged before GSoC", href: "https://github.com/OWASP/OpenCRE/pulls?q=is%3Apr+author%3APRAteek-singHWY+is%3Amerged+merged%3A%3C2026-05-01" },
        ],
        points: [
          "First PRs to OpenCRE, which turned into a call with the maintainers, which turned into GSoC.",
          "42 PRs merged before GSoC began.",
        ],
      },
      {
        ...role("President, Open Source Committee"),
        points: [
          ...role("President, Open Source Committee").points,
          "Built and maintain the club's public site, scaleropensourcelabs.com, which lists the students selected into GSoC, LFX Mentorship, C4GT and Summer of Bitcoin. Top contributor, 72 commits.",
        ],
        evidence: [
          { label: "scaleropensourcelabs.com", href: "https://github.com/ScalerOpenSourceLabsOrg/scaleropensourcelabs.com" },
          { label: "Contributors", href: "https://github.com/ScalerOpenSourceLabsOrg/scaleropensourcelabs.com/graphs/contributors" },
        ],
      },
    ],
  },
  {
    id: "era-4",
    numeral: "IV",
    years: "2026",
    title: "Research",
    question: "Is it measurably correct, and what is the error rate?",
    summary:
      "The shift from building things that work to measuring whether they work, and saying so when they do not.",
    entries: [
      {
        ...role("Contributor, Module C (The Librarian)"),
        date: "GSoC 2026, May to Aug, continuing after",
        featured: "moduleC",
        anchor: "module-c",
        evidence: [
          { label: "Commits", href: "https://github.com/OWASP/OpenCRE/commits?author=PRAteek-singHWY" },
          { label: "Merged PRs", href: "https://github.com/OWASP/OpenCRE/pulls?q=is%3Apr+author%3APRAteek-singHWY+is%3Amerged" },
          { label: "Contributors", href: "https://github.com/OWASP/OpenCRE/graphs/contributors" },
          { label: "Write-up", href: "https://medium.com/@prateek23022004/the-librarian-smart-content-mapping-my-gsoc-2026-with-owasp-opencre-module-c-8db874d46bab" },
        ],
        metrics: [
          { value: "319", label: "hand-labelled golden set chunks" },
          { value: "5 of 5", label: "review recall", detail: "every chunk that needed a human reached one" },
          { value: "75%", label: "top-1 accuracy", detail: "against a 90% target" },
          { value: "247", label: "hermetic tests, under 4 seconds", detail: "regression gate on every PR" },
          { value: "427 of 428", label: "CREs had empty descriptions", detail: "the upstream root cause" },
          { value: "8", label: "main merges during the 8 GSoC weeks", detail: "42 merged PRs before GSoC" },
          { value: "56%", label: "auto-link recall", detail: "172 of 319 cleared the 0.80 bar; the rest went to review" },
        ],
      },
      { ...role("SDE Intern"), anchor: "evaratus", date: "May 2026 to present" },
      {
        kind: "note",
        title: "mcp-recon",
        anchor: "mcp-recon",
        date: "v0.1.0, tagged 16 Sept 2026",
        points: [
          "Open source CLI. Finds the AI coding agents on a machine and the MCP servers they talk to, scores config and tool-surface risk, and maps findings to OWASP ASI and OpenCRE.",
          "Covers Claude Code, Cursor, Windsurf, Cline, Copilot, Codex, Gemini CLI, Continue, Zed and Claude Desktop. Outputs terminal, JSON, Markdown and SARIF. --connect is stdio-only and skips servers with auth headers.",
          "Its first real scan scored 53/100 and surfaced a live Bearer token in a local agent config and an undeclared code-execution surface.",
        ],
        tags: ["python 3.11", "mcp sdk", "pytest + hypothesis", "mypy strict"],
        metrics: [
          { value: "14", label: "rules", detail: "R001-R010 static, R101-R104 connect-mode" },
          { value: "11", label: "config locators across 10 agents" },
          { value: "1.00", label: "precision and recall", detail: "on 21 fixture machines" },
          { value: "88.7%", label: "test coverage" },
        ],
      },
      {
        kind: "note",
        title: "Upstream open source",
        anchor: "upstream",
        date: "May to Sept 2026",
        company_name: "Kuadrant mcp-gateway, Apicurio Registry, OpenTelemetry, OpenKruise, Koordinator",
        points: [
          {
            text: "Kuadrant mcp-gateway: stopped the broker forwarding Cookie and Proxy-Authorization headers to user-specific upstreams, kept per-user tools when the x-mcp-authorized filter runs, and made --log-level=4 give warn instead of debug.",
            links: [{ label: "#1172", href: "https://github.com/Kuadrant/mcp-gateway/pull/1172" }, { label: "#1220", href: "https://github.com/Kuadrant/mcp-gateway/pull/1220" }, { label: "#1141", href: "https://github.com/Kuadrant/mcp-gateway/pull/1141" }],
          },
          {
            text: "Apicurio Registry: fixed a NullPointerException in ContentTypeUtil.parseJsonOrYaml when content arrives with no content type, and moved {{variable}} parsing onto one canonical pattern.",
            links: [{ label: "#8841", href: "https://github.com/Apicurio/apicurio-registry/pull/8841" }, { label: "#8977", href: "https://github.com/Apicurio/apicurio-registry/pull/8977" }],
          },
          {
            text: "OpenTelemetry Go compile-time instrumentation: the HTTP server wrapper silently disabled HTTP/2 server push for every instrumented handler. It now satisfies http.Pusher.",
            links: [{ label: "#795", href: "https://github.com/open-telemetry/opentelemetry-go-compile-instrumentation/pull/795" }],
          },
          {
            text: "OpenKruise agents: tightened certificate and key permissions from 0777 and 0666 to 0755 and 0600.",
            links: [{ label: "#330", href: "https://github.com/openkruise/agents/pull/330" }],
          },
          {
            text: "Open for review: Koordinator scheduler tracing and argument type names, an OpenKruise proxy route-table fix, and an Apicurio UI guard against stale responses.",
            links: [{ label: "#3123", href: "https://github.com/koordinator-sh/koordinator/pull/3123" }, { label: "#3083", href: "https://github.com/koordinator-sh/koordinator/pull/3083" }, { label: "#660", href: "https://github.com/openkruise/agents/pull/660" }, { label: "#10074", href: "https://github.com/Apicurio/apicurio-registry/pull/10074" }],
          },
        ],
        metrics: [
          { value: "7", label: "merged PRs across 4 projects", detail: "each merged by that project's maintainer" },
          { value: "3", label: "merged in Kuadrant mcp-gateway" },
          { value: "2", label: "merged in Apicurio Registry" },
          { value: "1", label: "merged in OpenTelemetry" },
          { value: "1", label: "merged in OpenKruise agents" },
          { value: "4", label: "open for review" },
        ],
        evidence: [
          { label: "All my pull requests", href: "https://github.com/pulls?q=is%3Apr+author%3APRAteek-singHWY+-repo%3AOWASP%2FOpenCRE" },
        ],
      },
      {
        kind: "note",
        title: "passport-guard",
        date: "2026, in progress",
        points: [
          "A security broker for AI agent memory writes. Three detectors: injection-scan, scope-match and consent-flip.",
          "Deliverables are the detectors plus a labelled benchmark and an eval harness.",
        ],
        status: "Nothing is measured yet. Numbers go here when the benchmark exists.",
      },
      {
        kind: "note",
        title: "Juni",
        date: "2026",
        points: [
          "Campus social app with a safety-first architecture: identity verification, consent-driven matching, ban-evasion tombstones and SOS dispatch.",
          "The full safety layer was written before any matching logic.",
        ],
      },
      {
        kind: "note",
        title: "Algoverse AI Research Program",
        date: "Summer 2026",
        points: ["Admitted with a 30% merit scholarship."],
      },
    ],
  },
];

// Shown newest first: recent work on top, then the early projects.
export const eras = [...chronological].reverse();

// Confirmed by Prateek on 29 Sept 2026 for the early projects (Eras I and II).
export const handCodedNote =
  "Everything below is where it started. I wrote these projects by hand when I was 17 to 19, from documentation, Stack Overflow and error messages, with no AI assistant writing the code.";

export const throughLine =
  "Every era taught the same lesson at a higher level: find out whether the thing actually works before you claim it does.";

export const writing = [
  {
    title: "The Librarian: Smart Content Mapping. My GSoC 2026 with OWASP OpenCRE, Module C",
    venue: "Medium",
    url: "https://medium.com/@prateek23022004/the-librarian-smart-content-mapping-my-gsoc-2026-with-owasp-opencre-module-c-8db874d46bab",
    summary:
      "How the link decision engine works, why it routes low-confidence links to a human, and the negative result: 13 reranker interventions that all regressed against a cosine baseline, traced to 427 of 428 CREs having empty descriptions.",
  },
];
