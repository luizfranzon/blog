import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "luizfranzon.dev",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "luizfranzon05@hotmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Início",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/luizfranzon",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/luizffranzon/",
  },
];
