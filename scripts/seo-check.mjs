const baseUrl = (process.argv[2] || process.env.SITE_URL || "https://rameshraoufi.me").replace(/\/+$/, "");

const checks = [
  {
    name: "Homepage",
    path: "/",
    validate: async (text) => {
      const hasNoIndex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(text);
      if (hasNoIndex) {
        return "contains noindex meta";
      }
      return null;
    },
  },
  {
    name: "robots.txt",
    path: "/robots.txt",
    validate: async (text) => {
      if (!/sitemap\s*:/i.test(text)) {
        return "missing Sitemap directive";
      }
      return null;
    },
  },
  {
    name: "sitemap.xml",
    path: "/sitemap.xml",
    validate: async (text) => {
      if (!/<urlset[\s>]/i.test(text)) {
        return "is not a valid sitemap urlset";
      }
      return null;
    },
  },
];

let hasErrors = false;

for (const check of checks) {
  const url = `${baseUrl}${check.path}`;

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "seo-check/1.0",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      console.error(`✖ ${check.name} (${url}) returned ${response.status}`);
      hasErrors = true;
      continue;
    }

    const text = await response.text();
    const validationError = await check.validate(text);

    if (validationError) {
      console.error(`✖ ${check.name} (${url}) ${validationError}`);
      hasErrors = true;
    } else {
      console.log(`✔ ${check.name} (${url}) looks good`);
    }
  } catch (error) {
    console.error(`✖ ${check.name} (${url}) failed: ${error.message}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  process.exit(1);
}

console.log("\nSEO checks passed.");
