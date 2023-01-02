import { createCraqClient, configureContext } from "craq-client";
import preact from "craq-preact-renderer/dist/client";

import routes from "./routes";
import bundles from "./bundles";

import { actions, components } from "./registries";
import Application from "./Application";
import testReducer from "./store/testReducer";
import { configureStore } from "@reduxjs/toolkit";

const context = configureContext({
  actions,
  components,
  routes,
  store: configureStore({ reducer: { test: testReducer } }),
});

const options = {
  bundles,
  renderers: { preact },
};

createCraqClient(context, Application, options)
  .run(document.location.href)
  .render(document.getElementById("root"));
