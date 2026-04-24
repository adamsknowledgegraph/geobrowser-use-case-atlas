const cases = [
  {
    label: "Geo Podcasts",
    category: "Media",
    tag: "Conversation graph",
    title: "Podcasts become a searchable graph of episodes, topics, people, and ideas.",
    summary:
      "Episode metadata, topics, guests, shows, and current conversations become a browsable knowledge layer.",
    url: "https://podcasts.geobrowser.io/",
    tone: "pink",
    chips: ["Episode search", "Guests", "Topics", "Shows"],
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
    chips: ["Story pages", "Timelines", "Sources", "Topics"],
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
    chips: ["Profiles", "Projects", "Contributions", "Public portfolio"],
  },
  {
    label: "Understand Iran War",
    category: "World Affairs",
    tag: "Transparent dossier",
    title: "Conflict explainers become connected dossiers of claims, maps, and sources.",
    summary:
      "A geopolitical brief structured around claims, source trails, context, maps, and expert perspectives rather than a flat article.",
    url: "https://understandiranwar.com/",
    dataUrl: "https://www.geobrowser.io/space/f65885c9012be9a9201ddeb6e8c92b61",
    tone: "blue",
    chips: ["Claims", "Maps", "Sources", "Context"],
  },
  {
    label: "TheyDebated",
    category: "Claims",
    tag: "Public reasoning",
    title: "AI agents debate current events while building a living claim ledger.",
    summary:
      "A debate interface where visible agent identities, source receipts, and contested claims are structured into an inspectable graph.",
    url: "https://theydebated.com/",
    tone: "coral",
    chips: ["AI debate", "Claims", "Rebuttals", "Sources"],
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
    chips: ["Live map", "Fires", "Flights", "GPS interference"],
    previewImage: "./assets/previews/osint-globe-preview.png",
  },
  {
    label: "Supplements Evidence Explorer",
    category: "Health",
    tag: "Evidence graph",
    title: "Supplement research becomes a navigable map of outcomes and evidence.",
    summary:
      "Rows, studies, claims, source URLs, outcomes, safety notes, and evidence levels turn into a usable health knowledge graph.",
    url: "https://supplements-kg-explorer.vercel.app/",
    dataUrl:
      "https://www.geobrowser.io/space/b5a31f8182b042437ede0f84ee02f104?tabId=b9e3c99a3db144c4976555bf8f0a167a",
    tone: "green",
    chips: ["Studies", "Outcomes", "Evidence levels", "Safety notes"],
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
    chips: ["Diseases", "Cure status", "Categories", "Research context"],
  },
  {
    label: "Disease Graph Explorer",
    category: "Health",
    tag: "Disease graph",
    title: "Disease biology, treatments, pathways, and evidence become a connected disease graph.",
    summary:
      "A biomedical workbench for moving from a disease to genes, drugs, mechanisms, pathways, and source links without losing provenance.",
    url: "https://adamsknowledgegraph.github.io/hetionet/",
    dataUrl: "https://www.geobrowser.io/space/141d3ace705feabc04d50c78bbf7226e",
    tone: "green",
    chips: ["Diseases", "Genes", "Drugs", "Pathways"],
  },
  {
    label: "Top 200 AI Papers",
    category: "Science",
    tag: "Research graph",
    title: "Influential AI papers become a connected map of authors, labs, ideas, and lineage.",
    summary:
      "A research explorer that organizes landmark AI papers into a graph of publications, institutions, citations, and conceptual families.",
    url: "https://ai.graphatlas.tech/top200ai",
    dataUrl: "https://www.geobrowser.io/space/41e851610e13a19441c4d980f2f2ce6b",
    tone: "yellow",
    chips: ["Papers", "Authors", "Labs", "Research lineage"],
    previewImage: "./assets/previews/top200ai-preview.png",
  },
  {
    label: "Geo Community Profiles",
    category: "Community",
    tag: "People graph",
    title: "Community profiles become a living graph of people, teams, and skills.",
    summary:
      "A constellation for exploring standout Geo profiles, rich bios, teams, categories, and community structure.",
    url: "https://atlas-rouge-nine.vercel.app/",
    tone: "pink",
    chips: ["Profiles", "Teams", "Skills", "Community map"],
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
    chips: ["Genes", "Metabolites", "Pathways", "Flux changes"],
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
    chips: ["Countries", "Funding", "Access", "Outcomes"],
  },
];

const filters = [
  "All",
  "Claims",
  "Health",
  "World Affairs",
  "Intelligence",
  "Science",
  "Education",
  "Community",
  "Media",
].filter((filter) => filter === "All" || cases.some((item) => item.category === filter));
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
      <div class="preview-shell">
        <div class="browser-top" aria-hidden="true">
          <span></span><span></span><span></span>
          <em>${new URL(item.url).hostname}</em>
        </div>
        <div class="preview-fallback">
          ${fallbackMarkup(item)}
        </div>
        ${
          item.previewImage
            ? `<img
                class="site-preview-image"
                src="${item.previewImage}"
                alt="${item.label} preview"
                loading="lazy"
                onerror="this.remove()"
              />`
            : item.embed === false
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
      <div class="case-chip-row" aria-label="${item.label} highlights">
        ${item.chips.map((chip) => `<span>${chip}</span>`).join("")}
      </div>
      <div class="case-links">
        <a class="case-link" href="${item.url}" target="_blank" rel="noreferrer">
          <span>Open use case</span>
          ${icon}
        </a>
        ${
          item.dataUrl
            ? `<a class="case-link case-link-secondary" href="${item.dataUrl}" target="_blank" rel="noreferrer">
                <span>View Geo data</span>
                ${icon}
              </a>`
            : ""
        }
      </div>
    </div>
  `;

  return article;
}

function renderFilters() {
  const filterBar = document.querySelector("#filter-bar");
  filterBar.style.setProperty("--filter-count", String(filters.length));
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

    setActiveFilter(button.dataset.filter);
  });
}

function renderCases(filter = "All") {
  const stage = document.querySelector("#case-stage");
  const activeCases = filter === "All" ? cases : cases.filter((item) => item.category === filter);
  stage.innerHTML = "";
  activeCases.forEach((item, index) => stage.appendChild(createCasePanel(item, index)));
  observeReveals();
}

function setActiveFilter(filter = "All") {
  document.querySelectorAll("#filter-bar .filter-button").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.filter === filter);
  });

  document.querySelectorAll(".space-card[data-filter]").forEach((node) => {
    const isSelected = node.dataset.filter === filter;
    node.classList.toggle("is-selected", isSelected);
    node.setAttribute("aria-pressed", String(isSelected));
  });

  renderCases(filter);
}

function scrollToUseCases() {
  const useCasesSection = document.querySelector("#use-cases");
  if (!useCasesSection) return;

  const headerOffset = window.innerWidth <= 1050 ? 88 : 104;
  const top = Math.max(useCasesSection.getBoundingClientRect().top + window.scrollY - headerOffset, 0);
  window.scrollTo({ top, behavior: "smooth" });
}

function initSpaceCards() {
  document.querySelectorAll(".space-card[data-filter]").forEach((card) => {
    card.setAttribute("aria-pressed", "false");
    card.addEventListener("click", () => {
      setActiveFilter(card.dataset.filter || "All");
      scrollToUseCases();
    });
  });
}

function initMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-nav");

  if (!header || !toggle || !menu) return;

  const setMenuState = (isOpen) => {
    header.classList.toggle("is-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menu.hidden = !isOpen;
    document.body.classList.toggle("mobile-nav-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(false);
  });

  document.addEventListener("click", (event) => {
    if (menu.hidden) return;
    if (!header.contains(event.target)) setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) setMenuState(false);
  });
}

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function interpolateJourneyState(keyframes, points, progress) {
  if (progress <= points[0]) return keyframes[0];
  if (progress >= points[points.length - 1]) return keyframes[keyframes.length - 1];

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];

    if (progress <= end) {
      const mix = clamp((progress - start) / (end - start));
      const from = keyframes[index];
      const to = keyframes[index + 1];
      return {
        x: lerp(from.x, to.x, mix),
        y: lerp(from.y, to.y, mix),
        opacity: lerp(from.opacity ?? 1, to.opacity ?? 1, mix),
        scale: lerp(from.scale ?? 1, to.scale ?? 1, mix),
        rotate: lerp(from.rotate ?? 0, to.rotate ?? 0, mix),
      };
    }
  }

  return keyframes[keyframes.length - 1];
}

function initGraphJourney() {
  const section = document.querySelector(".graph-journey");
  const scene = document.querySelector("#journey-scene");
  if (!section || !scene) return;

  const stepNodes = [...section.querySelectorAll(".journey-step")];
  const nodeElements = new Map(
    [...scene.querySelectorAll(".journey-node")].map((node) => [node.dataset.node, node]),
  );
  const edgeElements = [...scene.querySelectorAll(".journey-edge")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const framePoints = [0, 0.28, 0.62, 1];
  const nodeStates = {
    topic: [
      { x: 0.16, y: 0.2, opacity: 0.72, scale: 0.92, rotate: -6 },
      { x: 0.22, y: 0.22, opacity: 1, scale: 1, rotate: -1 },
      { x: 0.2, y: 0.2, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.18, y: 0.16, opacity: 1, scale: 1, rotate: -2 },
    ],
    company: [
      { x: 0.5, y: 0.42, opacity: 0.78, scale: 0.94, rotate: -2 },
      { x: 0.5, y: 0.42, opacity: 1, scale: 1.04, rotate: 0 },
      { x: 0.49, y: 0.43, opacity: 1, scale: 1.04, rotate: 0 },
      { x: 0.39, y: 0.42, opacity: 1, scale: 1.04, rotate: 0 },
    ],
    person: [
      { x: 0.16, y: 0.72, opacity: 0.72, scale: 0.92, rotate: 5 },
      { x: 0.24, y: 0.68, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.22, y: 0.66, opacity: 1, scale: 1, rotate: -1 },
      { x: 0.18, y: 0.6, opacity: 1, scale: 1, rotate: 0 },
    ],
    source: [
      { x: 0.84, y: 0.18, opacity: 0.68, scale: 0.9, rotate: -5 },
      { x: 0.77, y: 0.21, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.75, y: 0.2, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.26, y: 0.18, opacity: 1, scale: 1, rotate: 0 },
    ],
    claim: [
      { x: 0.84, y: 0.5, opacity: 0.68, scale: 0.9, rotate: 4 },
      { x: 0.76, y: 0.48, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.73, y: 0.45, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.24, y: 0.44, opacity: 1, scale: 1, rotate: 0 },
    ],
    place: [
      { x: 0.85, y: 0.82, opacity: 0.66, scale: 0.9, rotate: -4 },
      { x: 0.8, y: 0.77, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.8, y: 0.74, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.45, y: 0.77, opacity: 1, scale: 1, rotate: 0 },
    ],
    editor: [
      { x: 0.15, y: 0.5, opacity: 0, scale: 0.84, rotate: -8 },
      { x: 0.16, y: 0.5, opacity: 0, scale: 0.88, rotate: -6 },
      { x: 0.17, y: 0.48, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.16, y: 0.5, opacity: 1, scale: 1, rotate: 0 },
    ],
    verification: [
      { x: 0.46, y: 0.14, opacity: 0, scale: 0.84, rotate: -4 },
      { x: 0.46, y: 0.14, opacity: 0, scale: 0.88, rotate: -2 },
      { x: 0.44, y: 0.14, opacity: 1, scale: 1, rotate: 0 },
      { x: 0.43, y: 0.14, opacity: 1, scale: 1, rotate: 0 },
    ],
    "app-profile": [
      { x: 0.87, y: 0.18, opacity: 0, scale: 0.82, rotate: 3 },
      { x: 0.87, y: 0.18, opacity: 0, scale: 0.82, rotate: 2 },
      { x: 0.84, y: 0.18, opacity: 0, scale: 0.84, rotate: 2 },
      { x: 0.82, y: 0.2, opacity: 1, scale: 1, rotate: 0 },
    ],
    "app-timeline": [
      { x: 0.87, y: 0.42, opacity: 0, scale: 0.82, rotate: 2 },
      { x: 0.87, y: 0.42, opacity: 0, scale: 0.82, rotate: 2 },
      { x: 0.84, y: 0.42, opacity: 0, scale: 0.84, rotate: 1 },
      { x: 0.82, y: 0.44, opacity: 1, scale: 1, rotate: 0 },
    ],
    "app-search": [
      { x: 0.87, y: 0.66, opacity: 0, scale: 0.82, rotate: 1 },
      { x: 0.87, y: 0.66, opacity: 0, scale: 0.82, rotate: 1 },
      { x: 0.84, y: 0.66, opacity: 0, scale: 0.84, rotate: 1 },
      { x: 0.82, y: 0.68, opacity: 1, scale: 1, rotate: 0 },
    ],
  };

  let ticking = false;
  let staticMode = false;

  const setStepState = (progress) => {
    if (staticMode) {
      stepNodes.forEach((step) => step.classList.add("is-active"));
      return;
    }

    const activeIndex = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2;
    stepNodes.forEach((step, index) => step.classList.toggle("is-active", index === activeIndex));
  };

  const edgeProgress = (progress, start, end) => clamp((progress - start) / Math.max(end - start, 0.001));

  const update = () => {
    const shouldUseStatic = window.innerWidth <= 1050 || reducedMotion.matches;
    staticMode = shouldUseStatic;

    if (staticMode) {
      section.dataset.static = "true";
    } else {
      delete section.dataset.static;
    }

    const progress = staticMode
      ? 1
      : clamp(
          (window.scrollY - section.offsetTop + window.innerHeight * 0.16) /
            Math.max(section.offsetHeight - window.innerHeight, 1),
        );

    const sceneWidth = scene.clientWidth;
    const sceneHeight = scene.clientHeight;
    const centers = {};

    Object.entries(nodeStates).forEach(([id, keyframes]) => {
      const element = nodeElements.get(id);
      if (!element) return;

      const state = interpolateJourneyState(keyframes, framePoints, progress);
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const x = state.x * sceneWidth;
      const y = state.y * sceneHeight;

      element.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px) scale(${state.scale ?? 1}) rotate(${state.rotate ?? 0}deg)`;
      element.style.opacity = String(state.opacity ?? 1);

      centers[id] = {
        x,
        y,
        width: width * (state.scale ?? 1),
        height: height * (state.scale ?? 1),
        opacity: state.opacity ?? 1,
      };
    });

    edgeElements.forEach((edge) => {
      const from = centers[edge.dataset.from];
      const to = centers[edge.dataset.to];
      if (!from || !to) return;

      const reveal = edgeProgress(progress, Number(edge.dataset.appear), Number(edge.dataset.full));
      const visibility = reveal * Math.min(from.opacity, to.opacity);

      if (visibility <= 0.01) {
        edge.style.opacity = "0";
        edge.style.width = "0px";
        edge.style.transform = "translate(0px, 0px) rotate(0rad) scaleX(0)";
        return;
      }

      const angle = Math.atan2(to.y - from.y, to.x - from.x);
      const fromInset = Math.min(from.width, from.height) * 0.34;
      const toInset = Math.min(to.width, to.height) * 0.34;
      const startX = from.x + Math.cos(angle) * fromInset;
      const startY = from.y + Math.sin(angle) * fromInset;
      const endX = to.x - Math.cos(angle) * toInset;
      const endY = to.y - Math.sin(angle) * toInset;
      const distance = Math.hypot(endX - startX, endY - startY);

      edge.style.opacity = String(visibility);
      edge.style.width = `${distance}px`;
      edge.style.transform = `translate(${startX}px, ${startY}px) rotate(${angle}rad) scaleX(${reveal})`;
    });

    setStepState(progress);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", requestUpdate);
  } else if (typeof reducedMotion.addListener === "function") {
    reducedMotion.addListener(requestUpdate);
  }

  requestUpdate();
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

initMobileNav();
initGraphJourney();
renderFilters();
initSpaceCards();
setActiveFilter();
