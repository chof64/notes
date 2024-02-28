import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="!font-bold">chof64/notes</span>,
  project: {
    link: "https://github.com/chof64/notes",
  },
  docsRepositoryBase: "https://github.com/chof64/notes",
  footer: {
    text: "By Chad Fernandez. Built with Nextra.",
  },
};

export default config;
