const BASE_URL = "https://worksheetdownload.com";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

/**
 * Root Website Schema with Google Sitelinks SearchBox
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WorksheetDownload",
    alternateName: ["KidsWorksheets", "Worksheet Download"],
    url: BASE_URL,
    description:
      "Download 3,000+ free printable worksheets for Kindergarten through Grade 8 and 647 developer cheat sheets.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/worksheets?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Root Organization Schema
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "WorksheetDownload",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    description:
      "Free learning platform providing K–8 printable PDF practice worksheets and developer cheat sheets.",
    sameAs: [
      "https://twitter.com/worksheetdl",
    ],
  };
}

/**
 * BreadcrumbList Schema
 */
export function breadcrumbsJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Learning Resource Schema for Worksheets
 */
export function learningResourceJsonLd({
  name,
  description,
  url,
  educationalLevel,
  about,
  inLanguage = "en",
  keywords = [],
}: {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  about?: string;
  inLanguage?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name,
    description,
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    learningResourceType: ["Worksheet", "Practice Sheet", "Printable"],
    educationalUse: ["assignment", "practice", "assessment"],
    isAccessibleForFree: true,
    inLanguage,
    ...(educationalLevel ? { educationalLevel } : {}),
    ...(about ? { about: { "@type": "Thing", name: about } } : {}),
    ...(keywords.length > 0 ? { keywords: keywords.join(", ") } : {}),
    provider: {
      "@type": "EducationalOrganization",
      name: "WorksheetDownload",
      url: BASE_URL,
    },
  };
}

/**
 * FAQPage Schema
 */
export function faqJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Software Application Schema for Generator Tools
 */
export function softwareAppJsonLd({
  name,
  description,
  url,
  applicationCategory = "EducationalApplication",
  operatingSystem = "Web Browser",
}: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    applicationCategory,
    operatingSystem,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    provider: {
      "@type": "Organization",
      name: "WorksheetDownload",
      url: BASE_URL,
    },
  };
}

/**
 * CollectionPage Schema for Directory / Hub Pages
 */
export function collectionPageJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: "WorksheetDownload",
      url: BASE_URL,
    },
  };
}
