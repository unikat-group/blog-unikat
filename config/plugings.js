module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_xO0AQpdKA4kBEVhnVtQjmpi3xPNz/zqSyot19Rq",
      apiToken: "mibIX0XbWjBpU5Pq0H7AwDlS",
      appFilter: "blog-unikat",
      teamFilter: "team_KBzIs3pHDwroPEzkwe7S2diH",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
