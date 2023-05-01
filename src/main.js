import { getLabelTpl } from "./tpl.js";
import { view } from "./view.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("beforeend", getLabelTpl());

view.app = app;
view.init();

function main() {
  const newLabelBtn = document.querySelector(".new-label-button");
  const form = document.querySelector("#new-label-form");
  const button = document.querySelector("#label-create-button");
  const labelName = form.querySelector("#label-name-input");
  const labelDescription = form.querySelector("#label-description-input");
  const labelColor = form.querySelector("#label-color-value");

  newLabelBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const labelNameValue = labelName.value;
    const labelDescriptionValue = labelDescription.value;
    const labelColorValue = labelColor.value;

    // console.log(labelName, labelDescription, labelColor);

    view.add({ name: labelNameValue, color: labelColorValue, description: labelDescriptionValue });
  });

  // Enable the button
  button.disabled = false;
  button.classList.remove("opacity-50");
  button.classList.add("opacity-100");
}

main();
