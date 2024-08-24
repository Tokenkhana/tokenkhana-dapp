export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tokenkhana",
  description: "Create, launch, update and manage tokens across multiple EVMs within seconds.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Create Token",
      href: "/create",
    },
    {
      label: "Manage Tokens",
      href: "/manage",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Create Token",
      href: "/create",
    },
    {
      label: "Manage Token",
      href: "/manage",
    },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    // {
    //   label: "Team",
    //   href: "/team",
    // },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    // {
    //   label: "Settings",
    //   href: "/settings",
    // },
    // {
    //   label: "Help & Feedback",
    //   href: "/help-feedback",
    // },
    // {
    //   label: "Logout",
    //   href: "/logout",
    // },
  ],
  links: {
    github: "https://github.com/Tokenkhana/tokenkhana-dapp",
    twitter: "https://x.com/mbilalmotiwala",
    docs: "https://github.com/Tokenkhana/tokenkhana-dapp/wiki",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
