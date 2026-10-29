export const SITE_URL = "https://coreinternet.online";
export const SITE_NAME = "Core Internet";

type HeadOptions = {
  title: string;
  description: string;
  /** Clean, trailing-slash-free path, e.g. "/internet" or "/" */
  path: string;
  ogType?: "website" | "article";
  /** Breadcrumb trail after Home, in order. */
  breadcrumb?: { name: string; path: string }[];
};

export function pageHead({
  title,
  description,
  path,
  ogType = "website",
  breadcrumb = [],
}: HeadOptions) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  const scripts = breadcrumb.length
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              ...breadcrumb.map((b, i) => ({
                "@type": "ListItem",
                position: i + 2,
                name: b.name,
                item: `${SITE_URL}${b.path}`,
              })),
            ],
          }),
        },
      ]
    : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: ogType },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
