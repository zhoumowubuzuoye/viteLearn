import { Directive } from "vue";
import moment from "moment";
function getTime(el: Element, binding: any) {
  const time = moment().format();
  console.dir(el);
  // el.nodeName ==='input'
  // el.innerHTML = time;
}

const getTimeDirective: Directive = {
  mounted: getTime,
};

export default getTimeDirective;
