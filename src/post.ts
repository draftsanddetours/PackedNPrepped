import { posts } from "./content";

type MetaItem = {
  label: string;
  value: string;
};

function requireElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Expected element matching "${selector}"`);
  }
  return element;
}

function renderMeta(items: MetaItem[], container: HTMLElement): void {
  container.innerHTML = "";
  items.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<dt>${item.label}</dt><dd>${item.value}</dd>`;
    container.append(wrapper);
  });
}

function renderChecklist(title: string, items: string[]): HTMLElement {
  const card = document.createElement("article");
  card.className = "check-card";
  card.innerHTML = `<h2>${title}</h2>`;
  items.forEach((item) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" /> ${item}`;
    card.append(label);
  });
  return card;
}

function renderForgotten(items: string[], container: HTMLElement): void {
  container.innerHTML = "";
  items.forEach((item) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" /> ${item}`;
    container.append(label);
  });
}

const slug = new URL(window.location.href).searchParams.get("slug") ?? posts[0].slug;
const post = posts.find((entry) => entry.slug === slug) ?? posts[0];

document.title = `${post.title} | Packed N Prepped`;

const titleEl = requireElement<HTMLHeadingElement>("#post-title");
const heroImage = requireElement<HTMLImageElement>("#post-hero-image");
const tripMeta = requireElement<HTMLElement>("#trip-meta");
const sections = requireElement<HTMLElement>("#post-sections");
const forgotten = requireElement<HTMLElement>("#post-forgotten");

titleEl.textContent = post.title;
heroImage.src = post.heroImage;
heroImage.alt = post.title;

renderMeta(
  [
    { label: "Destination", value: post.destination },
    { label: "Season", value: post.season },
    { label: "Duration", value: post.duration },
    { label: "Bag", value: post.bag },
    { label: "Style", value: post.style },
  ],
  tripMeta,
);

sections.innerHTML = "";
post.sections.forEach((section) => {
  sections.append(renderChecklist(section.title, section.items));
});

renderForgotten(post.forgotten, forgotten);
