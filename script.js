const cases = [
  {
    label: "Geo Podcasts",
    isGeoNative: true,
    category: "Media",
    tag: "Conversation graph",
    title: "Podcasts become a searchable graph of episodes, topics, people, and ideas.",
    summary:
      "Episode metadata, topics, guests, shows, and current conversations become a browsable knowledge layer.",
    url: "https://podcasts.geobrowser.io/",
    tone: "pink",
    chips: ["Episode search", "Guests", "Topics", "Shows"],
    nativeHeadline: "Search podcasts as a graph.",
    bannerHeadline: "Search episodes, guests, topics, and ideas.",
    nativePreviewImage: "./assets/previews/geo-podcasts-native.png",
  },
  {
    label: "Geo News",
    isGeoNative: true,
    category: "Media",
    tag: "Story graph",
    title: "News becomes a linked graph of stories, topics, timelines, and sources.",
    summary:
      "Current events are organized into topic spaces, source-backed story pages, featured timelines, and related entities.",
    url: "https://news.geobrowser.io/",
    tone: "blue",
    chips: ["Story pages", "Timelines", "Sources", "Topics"],
    nativeHeadline: "Follow stories, topics, and sources.",
    bannerHeadline: "Browse stories, timelines, topics, and sources in one place.",
    nativePreviewImage: "./assets/previews/geo-news-native.png",
  },
  {
    label: "Geo People",
    isGeoNative: true,
    category: "Community",
    tag: "People page",
    title: "People pages become richer profiles with projects, past experience, and contributions in context.",
    summary:
      "Each profile connects work history, education, speaking, posts, projects, and key contributions so you can quickly understand who someone is and what they've worked on.",
    url: "https://people.geobrowser.io/",
    tone: "purple",
    chips: ["Projects", "Past experience", "Contributions", "Context"],
    nativeHeadline: "People with work and contributions in context.",
    bannerHeadline: "See a person with projects, past experience, and contributions in context.",
    nativePreviewImage: "./assets/previews/geo-people-native.png",
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
    previewImage: "./assets/previews/top200ai-preview.png?v=20260424",
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

const geoApps = cases.filter((item) => item.isGeoNative);

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

function fallbackMarkup(item, options = {}) {
  const compactClass = options.compact ? " is-compact" : "";
  return `
    <div class="preview-art${compactClass} ${item.category.toLowerCase().replaceAll(" ", "-")}">
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

function createGeoNativeCard(item) {
  const link = document.createElement("a");
  link.className = "geo-native-card";
  link.dataset.tone = item.tone;
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.innerHTML = `
    <span class="geo-native-card-media">
      ${
        item.nativePreviewImage
          ? `<img src="${item.nativePreviewImage}" alt="${item.label} preview" loading="lazy" />`
          : ""
      }
      <span class="geo-native-card-label">${item.label}</span>
    </span>
    <h4>${item.nativeHeadline || item.bannerHeadline || item.title}</h4>
    <p>${item.chips.slice(0, 3).join(" · ")}</p>
    <span class="geo-native-card-footer">
      <span class="geo-native-card-domain">${new URL(item.url).hostname}</span>
      <span class="geo-native-card-open">
        <span>Open app</span>
        ${icon}
      </span>
    </span>
  `;
  return link;
}

function createCasePanel(item, displayIndex) {
  const article = document.createElement("article");
  article.className = "case-panel reveal";
  article.dataset.category = item.category;
  article.dataset.tone = item.tone;

  article.innerHTML = `
    <div class="case-index">${String(displayIndex + 1).padStart(2, "0")}</div>
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

function renderGeoApps() {
  const stage = document.querySelector("#geo-native-list");
  if (!stage) return;

  stage.innerHTML = "";
  geoApps.forEach((item) => stage.appendChild(createGeoNativeCard(item)));
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
  const activeCases =
    filter === "All"
      ? cases
      : cases.filter((item) => item.category === filter);
  stage.innerHTML = "";
  activeCases.forEach((item) => stage.appendChild(createCasePanel(item, cases.indexOf(item))));
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

function scrollToSection(selector = "#use-cases") {
  const target = document.querySelector(selector);
  if (!target) return;
  const headerOffset = window.innerWidth <= 1050 ? 88 : 104;
  const top = Math.max(target.getBoundingClientRect().top + window.scrollY - headerOffset, 0);
  window.scrollTo({ top, behavior: "smooth" });
}

function initSpaceCards() {
  document.querySelectorAll(".space-card[data-filter]").forEach((card) => {
    card.setAttribute("aria-pressed", "false");
    card.addEventListener("click", () => {
      setActiveFilter(card.dataset.filter || "All");
      scrollToSection("#use-cases");
    });
  });

  document.querySelectorAll(".space-card[data-scroll-target]").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll("#filter-bar .filter-button").forEach((node) => {
        node.classList.remove("is-active");
      });
      document.querySelectorAll(".space-card[data-filter]").forEach((node) => {
        node.classList.remove("is-selected");
        node.setAttribute("aria-pressed", "false");
      });
      scrollToSection(`#${card.dataset.scrollTarget}`);
    });
  });
}

function initEarlyAccessModal() {
  const modal = document.querySelector("#early-access-modal");
  const form = document.querySelector("#early-access-form");
  const status = document.querySelector("#early-access-status");
  const triggers = [...document.querySelectorAll("[data-open-early-access]")];
  const closeTargets = [...document.querySelectorAll("[data-close-early-access]")];

  if (!modal || !form || !triggers.length) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const submitLabel = submitButton?.querySelector("span");
  const firstField = form.querySelector('input[name="name"]');
  let lastTrigger = null;

  const setStatus = (message, tone = "") => {
    if (!status) return;
    status.textContent = message;
    status.classList.remove("is-error", "is-success");
    if (tone) status.classList.add(tone);
  };

  const openModal = (trigger) => {
    lastTrigger = trigger || document.activeElement;
    modal.hidden = false;
    document.body.classList.add("early-access-open");
    window.requestAnimationFrame(() => {
      firstField?.focus();
    });
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("early-access-open");
    setStatus("");
    if (lastTrigger instanceof HTMLElement) lastTrigger.focus();
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(trigger);
    });
  });

  closeTargets.forEach((target) => {
    target.addEventListener("click", () => closeModal());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!submitButton || !submitLabel) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const whatInterests = String(formData.get("whatInterests") || "").trim();
    const wantsUpdates = formData.get("productUpdates") === "on";

    setStatus("");
    submitButton.disabled = true;
    submitLabel.textContent = "Sending...";

    try {
      const payload = {
        formType: "portfolio_early_access",
        name,
        email,
        interest: [],
        interestOther: whatInterests,
        skills: wantsUpdates ? ["Receive product updates"] : [],
        roles: ["Portfolio guest"],
        roleOther: "",
        source: "graphgeo.com",
        notes: whatInterests,
        receiveProductUpdates: wantsUpdates,
      };

      const response = await fetch("https://www.geobrowser.io/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      form.reset();
      form.querySelector('input[name="productUpdates"]').checked = true;
      setStatus("Thanks — we’ve got your details and will be in touch.", "is-success");
      window.setTimeout(() => {
        if (!modal.hidden) closeModal();
      }, 1400);
    } catch (error) {
      console.error("Early access submission failed", error);
      setStatus("That didn’t go through. Please try again in a moment.", "is-error");
    } finally {
      submitButton.disabled = false;
      submitLabel.textContent = "Request access";
    }
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

function initGraphJourney() {
  const section = document.querySelector(".graph-journey");
  const scene = document.querySelector("#journey-scene");
  if (!section || !scene) return;

  const stepNodes = [...section.querySelectorAll(".journey-step")];
  const captionKicker = section.querySelector(".journey-caption-kicker");
  const captionTitle = section.querySelector(".journey-caption-title");
  const captionCopy = section.querySelector(".journey-caption-copy");
  const nodeElements = new Map(
    [...scene.querySelectorAll(".journey-node")].map((node) => [node.dataset.node, node]),
  );
  const edgeElements = [...scene.querySelectorAll(".journey-edge")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const stagePoints = [0, 0.42, 0.7, 1];
  const stages = [
    {
      kicker: "Entities",
      title: "Entities are the things in the graph.",
      copy:
        "People, companies, places, claims, and sources each become structured objects you can keep connecting.",
    },
    {
      kicker: "Relationships",
      title: "Relationships explain the context.",
      copy:
        "The labeled lines show how those entities relate: who leads what, what a claim is about, where it came from, and how it is checked.",
    },
    {
      kicker: "Outputs",
      title: "The same graph can power useful apps.",
      copy:
        "Once the entities and relationships are in place, the same graph can drive profile pages, timelines, and search.",
    },
  ];
  const staticCaption = {
    kicker: "Entities + relationships",
    title: "Entities are the cards. Relationships are the labeled lines.",
    copy:
      "People, companies, places, claims, and sources can live in one connected graph, then power many different interfaces.",
  };
  const nodeStates = {
    topic: { x: 0.18, y: 0.18, appear: 0, full: 0.06, scale: 0.92, blur: 14 },
    company: { x: 0.46, y: 0.42, appear: 0.05, full: 0.11, scale: 0.92, blur: 16 },
    person: { x: 0.18, y: 0.64, appear: 0.1, full: 0.16, scale: 0.92, blur: 14 },
    claim: { x: 0.71, y: 0.49, appear: 0.15, full: 0.21, scale: 0.92, blur: 14 },
    source: { x: 0.75, y: 0.18, appear: 0.2, full: 0.26, scale: 0.92, blur: 14 },
    place: { x: 0.77, y: 0.79, appear: 0.25, full: 0.31, scale: 0.92, blur: 14 },
    editor: { x: 0.12, y: 0.46, appear: 0.44, full: 0.5, scale: 0.88, blur: 16 },
    verification: { x: 0.46, y: 0.11, appear: 0.5, full: 0.56, scale: 0.88, blur: 16 },
    "app-profile": { x: 0.88, y: 0.21, appear: 0.72, full: 0.78, scale: 0.9, blur: 14 },
    "app-timeline": { x: 0.88, y: 0.49, appear: 0.8, full: 0.86, scale: 0.9, blur: 14 },
    "app-search": { x: 0.86, y: 0.78, appear: 0.88, full: 0.94, scale: 0.9, blur: 14 },
  };

  let ticking = false;
  let staticMode = false;

  const getActiveStageIndex = (progress) => {
    if (progress < stagePoints[1]) return 0;
    if (progress < stagePoints[2]) return 1;
    return 2;
  };

  const getStageProgress = (progress, index) =>
    clamp(
      (progress - stagePoints[index]) /
        Math.max((stagePoints[index + 1] ?? 1) - stagePoints[index], 0.001),
    );

  const setCaption = (activeIndex) => {
    const current = staticMode ? staticCaption : stages[activeIndex];
    if (captionKicker) captionKicker.textContent = current.kicker;
    if (captionTitle) captionTitle.textContent = current.title;
    if (captionCopy) captionCopy.textContent = current.copy;
  };

  const setStepState = (progress, activeIndex) => {
    if (staticMode) {
      stepNodes.forEach((step) => {
        step.classList.remove("is-complete", "is-active");
        step.style.setProperty("--step-progress", "1");
      });
      return;
    }

    stepNodes.forEach((step, index) => {
      const isComplete = index < activeIndex;
      const isActive = index === activeIndex;
      const localProgress = isComplete ? 1 : isActive ? getStageProgress(progress, index) : 0;
      step.classList.toggle("is-complete", isComplete);
      step.classList.toggle("is-active", isActive);
      step.style.setProperty("--step-progress", String(localProgress));
    });
  };

  const edgeProgress = (progress, start, end) =>
    clamp((progress - start) / Math.max(end - start, 0.001));

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
          (window.scrollY - section.offsetTop + window.innerHeight * 0.3) /
            Math.max(section.offsetHeight - window.innerHeight, 1),
        );
    const activeStageIndex = getActiveStageIndex(progress);

    const sceneWidth = scene.clientWidth;
    const sceneHeight = scene.clientHeight;
    const centers = {};

    Object.entries(nodeStates).forEach(([id, keyframes]) => {
      const element = nodeElements.get(id);
      if (!element) return;

      const reveal = staticMode ? 1 : edgeProgress(progress, keyframes.appear, keyframes.full);
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const x = keyframes.x * sceneWidth;
      const y = keyframes.y * sceneHeight;
      const scale = lerp(keyframes.scale ?? 0.92, 1, reveal);
      const lift = (1 - reveal) * 18;
      const opacity = clamp(reveal * 1.35);
      const blur = (1 - reveal) * (keyframes.blur ?? 12);

      element.style.transform = `translate(${x - width / 2}px, ${y - height / 2 + lift}px) scale(${scale})`;
      element.style.opacity = String(opacity);
      element.style.filter = `blur(${blur}px)`;

      centers[id] = {
        x,
        y,
        width: width * scale,
        height: height * scale,
        opacity,
      };
    });

    edgeElements.forEach((edge) => {
      const from = centers[edge.dataset.from];
      const to = centers[edge.dataset.to];
      if (!from || !to) return;

      const reveal = edgeProgress(progress, Number(edge.dataset.appear), Number(edge.dataset.full));
      const visibility = (staticMode ? 1 : reveal) * Math.min(from.opacity, to.opacity);
      const labelVisibility = clamp((reveal - 0.35) / 0.45) * clamp(Math.min(from.opacity, to.opacity) * 1.1);

      if (visibility <= 0.01) {
        edge.style.opacity = "0";
        edge.style.width = "0px";
        edge.style.setProperty("--edge-label-opacity", "0");
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
      edge.style.setProperty("--edge-label-opacity", String(labelVisibility));
      edge.style.transform = `translate(${startX}px, ${startY}px) rotate(${angle}rad) scaleX(${reveal})`;
    });

    setCaption(activeStageIndex);
    setStepState(progress, activeStageIndex);
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
initEarlyAccessModal();
initGraphJourney();
renderGeoApps();
renderFilters();
initSpaceCards();
setActiveFilter();
