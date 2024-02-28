import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      description: "A simple note-taking app.",
      titleTemplate: "%s | Notes",
    };
  },
  banner: {
    text: "A work in progress. 🚧",
  },
  logo: <span className="font-bold">chof64/notes</span>,
  project: {
    link: "https://github.com/chof64/notes",
  },
  docsRepositoryBase: "https://github.com/chof64/notes",
  footer: {
    text: (
      <div>
        <div className="text-sm font-medium">
          Copyright © 2024{" "}
          <Link
            className="underline underline-offset-2"
            href="https://chadfernandez.me"
            target="_blank"
          >
            Chad Fernandez
          </Link>
          . All rights reserved.
        </div>
        <div className="text-xs font-medium">
          Made with ❤️, 🐼butter, and ☕️coffee.
        </div>
      </div>
    ),
  },
};

export default config;
