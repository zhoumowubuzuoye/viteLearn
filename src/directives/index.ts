import { App } from "vue";
import getTimeDirective from "./getTime";

function getTimeValueDirective(app: App) {
  app.directive("time", getTimeDirective);
}

export default {
  getTimeValueDirective,
};
