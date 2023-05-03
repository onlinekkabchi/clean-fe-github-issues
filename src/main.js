import { getLabelTpl } from "./tpl.js";
import { view } from "./view.js";
// import { preview } from "./preview.js";

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
  const labelPreview = form.querySelector("#label-preview");
  const labelColorChangeBtn = form.querySelector("#new-label-color");

  newLabelBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });

  labelName.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    labelPreview.textContent = e.target.value;
    checkValues();
  });

  labelDescription.addEventListener("keyup", (e) => {
    checkValues();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const labelNameValue = labelName.value;
    const labelDescriptionValue = labelDescription.value;
    const labelColorValue = labelColor.value;

    view.add({ name: labelNameValue, color: labelColorValue, description: labelDescriptionValue });

    labelName.value = "";
    labelColor.value = "";
    labelDescription.value = "";
  });

  labelColorChangeBtn.addEventListener("click", () => {
    // teal, sea green, tan, off black, light gray, kelly green, navy, rose pink, indigo
    const items = ["#43a5be", "#53bda5", "#f5c26b", "#253342", "#cbd6e2", "#4fb06d", "#f07857", "#ebb8dd", "#5c62d6"];
    const item = items[Math.floor(Math.random() * items.length)];
    labelColorChangeBtn.style.backgroundColor = item;
    labelPreview.style.backgroundColor = item;
    labelColor.value = item;
    checkValues();
  });

  const checkValues = () => {
    if (labelName.value.length > 0 && labelDescription.value.length > 0 && labelColor.value.length > 0) {
      // Enable the button
      button.disabled = false;
      button.classList.remove("opacity-50");
      button.classList.add("opacity-100");
    } else {
      button.disabled = true;
      button.classList.remove("opacity-100");
      button.classList.add("opacity-50");
    }
  };
}

main();
