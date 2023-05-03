import preview from "./preview";

const onOffBtn = (name, button) => {
  if (name.validity.valueMissing) {
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

export default function form(view, label) {
  const newLabelBtn = document.querySelector(".new-label-button");
  const form = document.querySelector("#new-label-form");
  const button = document.querySelector("#label-create-button");
  const labelPreview = form.querySelector("#label-preview");
  const labelName = form.querySelector("#label-name-input");
  const labelDescription = form.querySelector("#label-description-input");
  const labelColor = form.querySelector("#label-color-value");
  const labelColorChangeBtn = form.querySelector("#new-label-color");

  preview({
    label: label,
    labelPreview: labelPreview,
    labelName: labelName,
    labelDescription: labelDescription,
    labelColor: labelColor,
    labelColorChangeBtn: labelColorChangeBtn,
  });

  newLabelBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    view.add(label.showLabelValues());
    form.reset();
    onOffBtn(labelName, button);
  });

  form.addEventListener("input", () => {
    onOffBtn(labelName, button);
  });
}
