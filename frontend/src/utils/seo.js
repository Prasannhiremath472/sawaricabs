function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function applySeo({ title, description, keywords }) {
  if (title) document.title = title;
  setMeta("description", description);
  setMeta("keywords", keywords);
}
