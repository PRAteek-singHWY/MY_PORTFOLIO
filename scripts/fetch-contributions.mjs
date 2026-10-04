// Writes src/data/contributions.json. Run by .github/workflows/contributions.yml.
// Needs GH_TOKEN: a fine-grained PAT with public repo read only.
// Only public-repository commits are counted, so the numbers match what anyone can verify.
import { writeFile } from "node:fs/promises";

const LOGIN = "PRAteek-singHWY";
const OPENCRE = "OWASP/OpenCRE";
const START = "2022-01";
const OUT = new URL("../src/data/contributions.json", import.meta.url);

const token = process.env.GH_TOKEN;
if (!token) {
  console.error("GH_TOKEN is not set, leaving contributions.json unchanged.");
  process.exit(0);
}
const headers = {
  Authorization: `Bearer ${token}`,
  "User-Agent": "portfolio-contributions",
  Accept: "application/vnd.github+json",
};

const months = () => {
  const out = [];
  const now = new Date();
  const end = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
  let [y, m] = START.split("-").map(Number);
  for (;;) {
    const key = `${y}-${String(m).padStart(2, "0")}`;
    out.push(key);
    if (key === end) return out;
    m += 1;
    if (m > 12) { m = 1; y += 1; }
  }
};

const monthRange = (key) => {
  const [y, m] = key.split("-").map(Number);
  const from = new Date(Date.UTC(y, m - 1, 1));
  const to = new Date(Date.UTC(y, m, 1) - 1000);
  return [from.toISOString(), to.toISOString()];
};

async function graphql(query, variables) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });
  const body = await res.json();
  if (!res.ok || body.errors) throw new Error(JSON.stringify(body.errors || body));
  return body.data;
}

const MONTH_QUERY = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        commitContributionsByRepository(maxRepositories: 100) {
          repository { isPrivate }
          contributions { totalCount }
        }
      }
    }
  }`;

async function totalsByMonth() {
  const rows = [];
  for (const month of months()) {
    const [from, to] = monthRange(month);
    const data = await graphql(MONTH_QUERY, { login: LOGIN, from, to });
    const commits = data.user.contributionsCollection.commitContributionsByRepository
      .filter((r) => !r.repository.isPrivate)
      .reduce((sum, r) => sum + r.contributions.totalCount, 0);
    rows.push({ month, commits });
  }
  return rows;
}

async function opencreByMonth() {
  const counts = new Map();
  for (let page = 1; ; page += 1) {
    const url = `https://api.github.com/repos/${OPENCRE}/commits?author=${LOGIN}&per_page=100&page=${page}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    const batch = await res.json();
    for (const c of batch) {
      const month = c.commit.author.date.slice(0, 7);
      counts.set(month, (counts.get(month) || 0) + 1);
    }
    if (batch.length < 100) break;
  }
  const keys = [...counts.keys()].sort();
  if (!keys.length) return [];
  // Fill empty months with zero so quiet stretches stay visible.
  return months()
    .filter((m) => m >= keys[0])
    .map((month) => ({ month, commits: counts.get(month) || 0 }));
}

const milestones = [
  { date: "2022", label: "MuZiK, the RapidAPI pivot" },
  { date: "2024", label: "Chat app rebuilt on Redis Pub/Sub" },
  { date: "2025-11", label: "First OpenCRE PR" },
  { date: "2026-05", label: "GSoC begins" },
  { date: "2026-08", label: "GSoC ends · #2 contributor" },
];

const result = {
  generatedAt: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"),
  source: "GitHub API. Public repositories only; commits GitHub attributes to the account.",
  totalsByMonth: await totalsByMonth(),
  opencre: await opencreByMonth(),
  opencreSource: `Commits authored on the default branch of ${OPENCRE}.`,
  milestones,
};

await writeFile(OUT, JSON.stringify(result, null, 2) + "\n");
console.log(`wrote ${result.totalsByMonth.length} months, ${result.opencre.length} OpenCRE months`);
