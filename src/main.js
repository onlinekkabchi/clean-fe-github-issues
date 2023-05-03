import { getLabelTpl } from "./tpl.js";
import { view } from "./view.js";
// import { preview } from "./preview.js";
import { Label } from "./label.js";
import preview from "./preview.js";

const app = document.querySelector("#app");
app.insertAdjacentHTML("beforeend", getLabelTpl());

view.app = app;
view.init();

function main() {
  const newLabelBtn = document.querySelector(".new-label-button");
  const form = document.querySelector("#new-label-form");
  const button = document.querySelector("#label-create-button");

  const label = new Label();
  preview(label);

  const onOffBtn = () => {
    console.log(form.querySelector("#label-name-input").validity.valueMissing);
    if (form.querySelector("#label-name-input").validity.valueMissing) {
      button.disabled = true;
      button.classList.remove("opacity-100");
      button.classList.add("opacity-50");
    } else {
      // Enable the button
      button.disabled = false;
      button.classList.remove("opacity-50");
      button.classList.add("opacity-100");
    }
  };

  newLabelBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    view.add(label.showLabelValues());
    form.reset();
    onOffBtn();
  });

  form.addEventListener("input", () => {
    onOffBtn();
  });
}

main();
