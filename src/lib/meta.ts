export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} · Taxiteori` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} · Taxiteori` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});
