const cases = [
  {
    label: "TheyDebated",
    category: "Claims",
    tag: "Public reasoning",
    title: "AI agents debate current events while building a living claim ledger.",
    summary:
      "A debate interface where visible agent identities, source receipts, and contested claims are structured into an inspectable graph.",
    url: "https://theydebated.com/",
    tone: "coral",
    metrics: ["49 claims", "3 agents", "Source receipts"],
  },
  {
    label: "Supplements Evidence Explorer",
    category: "Health",
    tag: "Evidence graph",
    title: "Supplement research becomes a navigable map of outcomes and evidence.",
    summary:
      "Rows, studies, claims, source URLs, outcomes, safety notes, and evidence levels turn into a usable health knowledge graph.",
    url: "https://supplements-kg-explorer.vercel.app/",
    tone: "green",
    metrics: ["189 rows", "243 sources", "122 candidates"],
  },
  {
    label: "Understand Iran War",
    category: "World Affairs",
    tag: "Transparent dossier",
    title: "Conflict explainers become connected dossiers of claims, maps, and sources.",
    summary:
      "A geopolitical brief structured around claims, source trails, context, maps, and expert perspectives rather than a flat article.",
    url: "https://understandiranwar.com/",
    tone: "blue",
    metrics: ["Claims", "Sources", "Maps"],
  },
  {
    label: "OSINT Globe",
    category: "Intelligence",
    tag: "Geospatial graph",
    title: "Infrastructure, fires, aircraft, and GPS interference become one live theater map.",
    summary:
      "A live geospatial intelligence surface combining open infrastructure data, active events, and signal layers in one operational view.",
    url: "https://osint.graphatlas.tech/",
    tone: "yellow",
    metrics: ["16 layers", "3 live feeds", "5,415 objects"],
    embed: false,
  },
  {
    label: "iML1515 Metabolic Network",
    category: "Science",
    tag: "Systems biology",
    title: "Gene-knockout fitness data becomes an explorable metabolic network.",
    summary:
      "A biological network view for E. coli where genes, flux changes, metabolites, pathways, and omics layers can be compared.",
    url: "https://ciaran-lundy.github.io/geo_gem/visualise.html",
    tone: "purple",
    metrics: ["Flux map", "Omics layers", "Pathways"],
  },
  {
    label: "Educational Inequality Map",
    category: "Education",
    tag: "Open data viewer",
    title: "Education access, funding, and outcomes become comparable across countries.",
    summary:
      "World Bank, HLO, Giga, and geoBoundaries data are staged into an interface for comparing education inequality signals.",
    url: "https://athsrueas.github.io/Open_Data/",
    tone: "mint",
    metrics: ["Countries", "Access", "Funding"],
  },
  {
    label: "Geo Atlas",
    category: "Community",
    tag: "People graph",
    title: "Community profiles become a living atlas of people, teams, and skills.",
    summary:
      "A constellation for exploring standout Geo profiles, rich bios, teams, categories, and community structure.",
    url: "https://atlas-rouge-nine.vercel.app/",
    tone: "pink",
    metrics: ["Profiles", "Teams", "Skills"],
  },
  {
    label: "Disease Data Explorer",
    category: "Health",
    tag: "Public health",
    title: "Disease burden and cure status become structured public-health intelligence.",
    summary:
      "A disease explorer that makes cure status, disease categories, public-health facts, and research context easier to scan.",
    url: "https://disease-data-explorer--deeneyyrn.replit.app/",
    tone: "green",
    metrics: ["Diseases", "Cure status", "Categories"],
  },
  {
    label: "Geo News",
    category: "Media",
    tag: "Story graph",
    title: "News becomes a linked graph of stories, topics, timelines, and sources.",
    summary:
      "Current events are organized into topic spaces, source-backed story pages, featured timelines, and related entities.",
    url: "https://news.geobrowser.io/",
    tone: "blue",
    metrics: ["Stories", "Topics", "Sources"],
  },
  {
    label: "Geo People",
    category: "Community",
    tag: "Structured portfolio",
    title: "People and projects become portfolios with contributions you can trace.",
    summary:
      "Profiles connect work, education, speaking, posts, projects, and key contributions as structured public knowledge.",
    url: "https://people.geobrowser.io/",
    tone: "purple",
    metrics: ["Work", "Projects", "Contributions"],
  },
  {
    label: "Geo Podcasts",
    category: "Media",
    tag: "Conversation graph",
    title: "Podcasts become a searchable graph of episodes, topics, people, and ideas.",
    summary:
      "Episode metadata, topics, guests, shows, and current conversations become a browsable knowledge layer.",
    url: "https://podcasts.geobrowser.io/",
    tone: "pink",
    metrics: ["Episodes", "Topics", "People"],
  },
];

const filters = ["All", ...Array.from(new Set(cases.map((item) => item.category)))];
const icon = `
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M7 7h6v6M13 7 6 14" />
  </svg>
`;

function fallbackMarkup(item) {
  return `
    <div class="preview-art ${item.category.toLowerCase().replaceAll(" ", "-")}">
      <span class="art-line art-line-a"></span>
      <span class="art-line art-line-b"></span>
      <span class="art-line art-line-c"></span>
      <span class="art-node art-node-a"></span>
      <span class="art-node art-node-b"></span>
      <span class="art-node art-node-c"></span>
      <span class="art-node art-node-d"></span>
      <strong>${item.label}</strong>
    </div>
  `;
}

function previewMarkup(item) {
  return `
    <div class="case-preview">
      <div class="browser-top" aria-hidden="true">
        <span></span><span></span><span></span>
        <em>${new URL(item.url).hostname}</em>
      </div>
      <div class="preview-fallback">
        ${fallbackMarkup(item)}
      </div>
      ${
        item.embed === false
          ? ""
          : `<iframe
              class="site-frame"
              title="${item.label} preview"
              src="${item.url}"
              loading="lazy"
              referrerpolicy="no-referrer"
            ></iframe>`
      }
    </div>
  `;
}

function createCasePanel(item, index) {
  const article = document.createElement("article");
  article.className = "case-panel reveal";
  article.dataset.category = item.category;
  article.dataset.tone = item.tone;

  article.innerHTML = `
    <div class="case-index">${String(index + 1).padStart(2, "0")}</div>
    ${previewMarkup(item)}
    <div class="case-content">
      <div>
        <p class="case-meta">${item.category} / ${item.tag}</p>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
      <div class="metric-row" aria-label="${item.label} signals">
        ${item.metrics.map((metric) => `<span>${metric}</span>`).join("")}
      </div>
      <a class="case-link" href="${item.url}" target="_blank" rel="noreferrer">
        <span>Open use case</span>
        ${icon}
      </a>
    </div>
  `;

  return article;
}

function renderFilters() {
  const filterBar = document.querySelector("#filter-bar");
  filterBar.innerHTML = filters
    .map(
      (filter) => `
        <button type="button" class="filter-button ${filter === "All" ? "is-active" : ""}" data-filter="${filter}">
          ${filter}
        </button>
      `,
    )
    .join("");

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    filterBar.querySelectorAll("button").forEach((node) => node.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCases(button.dataset.filter);
  });
}

function renderCases(filter = "All") {
  const stage = document.querySelector("#case-stage");
  const activeCases = filter === "All" ? cases : cases.filter((item) => item.category === filter);
  stage.innerHTML = "";
  activeCases.forEach((item, index) => stage.appendChild(createCasePanel(item, index)));
  observeReveals();
}

let observer;
function observeReveals() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

renderFilters();
renderCases();
