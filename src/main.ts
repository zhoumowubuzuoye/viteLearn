import { createApp } from "vue";
import "normalize.css";
import "./style.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import getTimeD from "@/directives";
import router from "./routes";
import pinia from "@/store";

const { getTimeValueDirective } = getTimeD;

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
getTimeValueDirective(app);

app.use(router).use(pinia).mount("#app");
