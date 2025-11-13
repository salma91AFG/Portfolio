// script.js
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Génération dynamique des projets ----------
  const cardsContainer = document.getElementById("cards");

  function createProjectCard(projet) {
    const article = document.createElement("article");
    article.className = "card";
    article.setAttribute("data-tags", projet.tags.join(","));

    // image (optionnelle)
    if (projet.image) {
      const img = document.createElement("img");
      img.src = projet.image;
      img.alt = `Capture du projet ${projet.titre}`;
      img.className = "card-image";
      article.appendChild(img);
    }

    const h3 = document.createElement("h3");
    h3.textContent = projet.titre;
    article.appendChild(h3);

    const pSummary = document.createElement("p");
    pSummary.className = "summary";
    pSummary.textContent = projet.resumeCourt;
    article.appendChild(pSummary);

    const btn = document.createElement("button");
    btn.className = "toggle-btn";
    btn.type = "button";
    btn.textContent = "Afficher plus";
    article.appendChild(btn);

    const details = document.createElement("div");
    details.className = "details";
    details.hidden = true;

    const pDetail = document.createElement("p");
    pDetail.textContent = projet.resumeDetail;
    details.appendChild(pDetail);

    if (projet.lienGithub) {
      const link = document.createElement("a");
      link.href = projet.lienGithub;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Voir le projet sur GitHub";
      details.appendChild(link);
    }

    article.appendChild(details);
    return article;
  }

  if (cardsContainer && Array.isArray(projectsData)) {
    projectsData.forEach(p => {
      cardsContainer.appendChild(createProjectCard(p));
    });
  }

  // ---------- Génération dynamique des compétences ----------
  const skillsGrid = document.getElementById("skillsGrid");

  function createSkillCard(skillBlock) {
    const card = document.createElement("article");
    card.className = "card";

    const h3 = document.createElement("h3");
    h3.textContent = skillBlock.categorie;
    card.appendChild(h3);

    const ul = document.createElement("ul");
    skillBlock.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    card.appendChild(ul);
    return card;
  }

  if (skillsGrid && Array.isArray(skillsData)) {
    skillsData.forEach(s => {
      skillsGrid.appendChild(createSkillCard(s));
    });
  }

  // ---------- Filtres (recherche + tags) ----------
  const cards = () => Array.from(document.querySelectorAll("#cards .card"));
  const search = document.getElementById("search");
  const tagFilter = document.getElementById("tagFilter");

  function applyFilters() {
    const q = (search?.value || "").toLowerCase().trim();
    const tag = (tagFilter?.value || "").toLowerCase();

    cards().forEach(card => {
      const text = card.textContent.toLowerCase();
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();
      const okQ = q === "" || text.includes(q);
      const okTag = tag === "" || tags.split(",").map(t => t.trim()).includes(tag);
      card.style.display = (okQ && okTag) ? "" : "none";
    });
  }

  search?.addEventListener("input", applyFilters);
  tagFilter?.addEventListener("change", applyFilters);
  applyFilters();

  // ---------- Bouton "Afficher plus / moins" ----------
  if (cardsContainer) {
    cardsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".toggle-btn");
      if (!btn) return;

      const card = btn.closest(".card");
      const details = card.querySelector(".details");
      if (!details) return;

      const isHidden = details.hidden;
      details.hidden = !isHidden;
      btn.textContent = isHidden ? "Afficher moins" : "Afficher plus";
    });
  }


    // ---------- FORMATIONS ----------
  const formationList = document.getElementById("formationList");

  if (formationList && Array.isArray(formationsData)) {
    formationsData.forEach(f => {
      const item = document.createElement("article");
      item.className = "timeline-item";

      const title = document.createElement("h3");
      title.textContent = f.titre;
      item.appendChild(title);

      if (f.resume) {
        const p = document.createElement("p");
        p.className = "muted";
        p.textContent = f.resume;
        item.appendChild(p);
      }

      formationList.appendChild(item);
    });
  }

  // ---------- CERTIFICATS ----------
  const certificationsGrid = document.getElementById("certificationsGrid");

  if (certificationsGrid && Array.isArray(certificationsData)) {
    certificationsData.forEach(c => {
      const card = document.createElement("article");
      card.className = "card";

      const h3 = document.createElement("h3");
      h3.textContent = c.titre;
      card.appendChild(h3);

      if (c.resume) {
        const p = document.createElement("p");
        p.textContent = c.resume;
        card.appendChild(p);
      }

      certificationsGrid.appendChild(card);
    });
  }

});
