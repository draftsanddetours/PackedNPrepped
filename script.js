const categories = [
  {
    name: "Beach",
    count: "12 lists",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Europe",
    count: "9 lists",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ski",
    count: "7 lists",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Business Travel",
    count: "8 lists",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Disney",
    count: "6 lists",
    image: "https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Girls Trip",
    count: "10 lists",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Carry-On Only",
    count: "14 lists",
    image: "https://images.unsplash.com/photo-1527090496-346715fed66d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "National Parks",
    count: "11 lists",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
];

const packingLists = [
  {
    title: "10 Days in Italy in the Spring",
    meta: "Destination guide",
    tags: "italy europe spring city walking",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    title: "Hawaii Vacation Packing List",
    meta: "Beach trip",
    tags: "hawaii beach tropical vacation",
    image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    title: "Ski Trip Essentials",
    meta: "Cold weather",
    tags: "ski snow winter mountain layers",
    image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    title: "New York City Weekend",
    meta: "Long weekend",
    tags: "new york city weekend carry on",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=900&q=80",
    group: "trending",
  },
  {
    title: "Bachelorette Weekend",
    meta: "Event packing",
    tags: "girls trip bachelorette party weekend",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
  {
    title: "Family Beach House Week",
    meta: "Family travel",
    tags: "family beach kids rental house",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
  {
    title: "European Carry-On Capsule",
    meta: "Carry-on only",
    tags: "europe capsule wardrobe carry on",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
  {
    title: "National Park Road Trip",
    meta: "Outdoors",
    tags: "national parks road trip hiking camping",
    image: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=900&q=80",
    group: "saved",
  },
];

const categoryGrid = document.querySelector("#category-grid");
const trendingRow = document.querySelector("#trending-row");
const savedRow = document.querySelector("#saved-row");
const allListGrid = document.querySelector("#all-list-grid");
const searchInput = document.querySelector("#packing-search");
const resultCount = document.querySelector("#result-count");
const searchForm = document.querySelector(".search-panel");

function makeImage(src, alt) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  return image;
}

function renderCategories() {
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

function renderListCard(list) {
  const card = document.createElement("article");
  card.className = "list-card";
  card.append(makeImage(list.image, `${list.title} packing list`));
  card.insertAdjacentHTML("beforeend", `<h3>${list.title}</h3><p>${list.meta}</p>`);
  return card;
}

function renderRows() {
  trendingRow.innerHTML = "";
  savedRow.innerHTML = "";
  packingLists
    .filter((list) => list.group === "trending")
    .forEach((list) => trendingRow.append(renderListCard(list)));
  packingLists
    .filter((list) => list.group === "saved")
    .forEach((list) => savedRow.append(renderListCard(list)));
}

function renderAllLists(query = "") {
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
  const card = event.target.closest(".category-card");
  if (!card) return;
  const category = card.dataset.category;
  searchInput.value = category;
  renderAllLists(category);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderAllLists(searchInput.value);
  document.querySelector("#all-lists").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  renderAllLists(searchInput.value);
});
