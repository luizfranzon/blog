import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "luizfranzon.dev",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "luizfranzon05@hotmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Início",
  DESCRIPTION:
    "Esse é um pequeno espaço onde estarei trazendo alguns dos conteúdos que tenho estudado recentemente.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Artigos que escrevi.",
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
