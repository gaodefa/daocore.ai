const origin = "https://daocore.ai";

const pages = [
  ["Home", "/"],
  ["Integrations", "/integrations/"],
  ["Showcase", "/showcase/"],
  ["Shoutouts", "/shoutouts/"],
  ["Press", "/press/"],
  ["Blog", "/blog/"],
  ["Security", "/blog#security"],
  ["Privacy", "/privacy/"],
];

export function GET() {
  const lines = [
    "# DaoCore",
    "",
    "DaoCore is a personal AI assistant for messaging, browser, desktop, and automation workflows.",
    "",
    "Canonical pages:",
    ...pages.map(([title, path]) => `- ${title}: ${origin}${path}`),
    "",
    "Docs:",
    "- DaoCore documentation: https://docs.daocore.ai/llms.txt",
    "- DaoCore markdown index: https://documentation.daocore.ai/llms.txt",
    "",
    "Source: https://github.com/daocore/daocore.ai",
    "",
    "Guidance for agents:",
    "- Use docs.daocore.ai or documentation.daocore.ai for product documentation.",
    "- Use this file as a site index, not a full-site corpus.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
