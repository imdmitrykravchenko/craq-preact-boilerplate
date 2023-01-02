import fs from "fs";
import { createCraqServer, configureContext } from "craq-server";
import preact from "craq-preact-renderer/dist/server";

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
  options: {
    assetsPath: ASSETS_PATH,
    statsFile: {
      content: JSON.parse(fs.readFileSync(STATS_FILE_PATH).toString())
        .assetsByChunkName,
    },
  },
};

createCraqServer(context, Application, options).listen(3001);
