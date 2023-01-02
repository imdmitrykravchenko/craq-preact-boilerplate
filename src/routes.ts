const routes = [
  {
    name: "home",
    path: "/",
    config: {
      renderer: "preact",
      bundle: "home",
      page: "HomePage",
      actions: ["updateMetaAction"],
    },
  },
  {
    name: "segment",
    path: "/items/:slug",
    config: {
      renderer: "preact",
      bundle: "segment",
      page: "SegmentPage",
      actions: ["updateMetaAction"],
    },
  },
  {
    name: "404",
    path: "/(.*)",
    config: {
      renderer: "preact",
      bundle: "model",
      page: "NotFound",
      actions: ["updateMetaAction"],
    },
  },
];

export default routes;
