document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const cards = Array.from(document.querySelectorAll("#cards .card"));
  const search = document.getElementById("search");
  const tagFilter = document.getElementById("tagFilter");

  function applyFilters(){
    const q = (search?.value || "").toLowerCase().trim();
    const tag = (tagFilter?.value || "").toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();
      const okQ = q === "" || text.includes(q);
      const okTag = tag === "" || tags.split(",").map(t=>t.trim()).includes(tag);
      card.style.display = (okQ && okTag) ? "" : "none";
    });
  }
  search?.addEventListener("input", applyFilters);
  tagFilter?.addEventListener("change", applyFilters);
  applyFilters();
});
