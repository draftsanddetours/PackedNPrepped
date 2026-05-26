import { categories, packingLists, type PackingList } from "./content";

function requireElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Expected element matching "${selector}"`);
  }
  return element;
}

const categoryGrid = requireElement<HTMLDivElement>("#category-grid");
const trendingRow = requireElement<HTMLDivElement>("#trending-row");
const savedRow = requireElement<HTMLDivElement>("#saved-row");
const allListGrid = requireElement<HTMLDivElement>("#all-list-grid");
const searchInput = requireElement<HTMLInputElement>("#packing-search");
const resultCount = requireElement<HTMLParagraphElement>("#result-count");
const searchForm = requireElement<HTMLFormElement>(".search-panel");

function makeImage(src: string, alt: string): HTMLImageElement {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  return image;
}

function renderCategories(): void {
  categoryGrid.innerHTML = "";
  categories.forEach((category) => {
    const card = document.createElement("a");
    card.className = "category-card";
    card.href = "#all-lists";
    card.dataset.category = category.name.toLowerCase();
    card.append(makeImage(category.image, `${category.name} packing inspiration`));
    card.insertAdjacentHTML("beforeend", `<span>${category.name}</span><small>${category.count}</small>`);
    categoryGrid.append(card);
  });
}

function renderListCard(list: PackingList): HTMLAnchorElement {
  const card = document.createElement("a");
  card.className = "list-card";
  card.href = `packing-list.html?slug=${encodeURIComponent(list.slug)}`;
  card.setAttribute("aria-label", `Open ${list.title}`);
  card.append(makeImage(list.image, `${list.title} packing list`));
  card.insertAdjacentHTML("beforeend", `<h3>${list.title}</h3><p>${list.meta}</p>`);
  return card;
}

function renderRows(): void {
  trendingRow.innerHTML = "";
  savedRow.innerHTML = "";
  packingLists
    .filter((list) => list.group === "trending")
    .forEach((list) => trendingRow.append(renderListCard(list)));
  packingLists
    .filter((list) => list.group === "saved")
    .forEach((list) => savedRow.append(renderListCard(list)));
}

function renderAllLists(query = ""): void {
  const normalizedQuery = query.trim().toLowerCase();
  const matches = packingLists.filter((list) => {
    const haystack = `${list.title} ${list.meta} ${list.tags}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  allListGrid.innerHTML = "";
  matches.forEach((list) => allListGrid.append(renderListCard(list)));
  resultCount.textContent = normalizedQuery
    ? `${matches.length} result${matches.length === 1 ? "" : "s"} for "${query}"`
    : "Showing all lists";
}

renderCategories();
renderRows();
renderAllLists();

categoryGrid.addEventListener("click", (event) => {
  const card = (event.target as Element | null)?.closest<HTMLAnchorElement>(".category-card");
  if (!card) return;
  const category = card.dataset.category;
  if (!category) return;
  searchInput.value = category;
  renderAllLists(category);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderAllLists(searchInput.value);
  document.querySelector("#all-lists")?.scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  renderAllLists(searchInput.value);
});
