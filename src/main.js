import { getLabelTpl } from "./tpl.js";
import { view } from "./view.js";
// import { preview } from "./preview.js";
import { Label } from "./label.js";
import form from "./form.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("beforeend", getLabelTpl());

view.app = app;
view.init();

function main() {
  const label = new Label();
  form(view, label);
}

main();
