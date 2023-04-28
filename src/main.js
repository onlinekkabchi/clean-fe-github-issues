import { getLabelTpl } from "./tpl.js";
import { view } from "./view.js";

const app = document.querySelector("#app");
const newLabelBtn = document.querySelector(".new-label-button");
const form = document.querySelector("#new-label-form");
const button = document.querySelector("#label-create-button");

view.app = app;
view.init();

// app.insertAdjacentHTML("beforeend", getLabelTpl());

// async function init() {
//   await view.init();
//   // const labelItems = view.render().join("");
//   app.insertAdjacentHTML("beforeend", view.render().join(""));
// }

function main() {
  newLabelBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const labelName = form.querySelector("#label-name-input").value;
    const labelDescription = form.querySelector("#label-description-input").value;
    const labelColor = form.querySelector("#label-color-value").value;

    console.log(labelName, labelDescription, labelColor);
  });

  // Enable the button
  button.disabled = false;
  button.classList.remove("opacity-50");
  button.classList.add("opacity-100");
}

main();
