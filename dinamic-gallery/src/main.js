import { createApp } from "vue";

// Foglio di stile globale
import "./style.css";

import App from "./App.vue";

// Store js
import store from "./store.js";

createApp(App).use(store).mount("#app");
