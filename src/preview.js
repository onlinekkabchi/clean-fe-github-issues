export default function preview(label) {
  const form = document.querySelector("#new-label-form");
  const labelName = form.querySelector("#label-name-input");
  const labelDescription = form.querySelector("#label-description-input");
  const labelColor = form.querySelector("#label-color-value");
  const labelPreview = form.querySelector("#label-preview");
  const labelColorChangeBtn = form.querySelector("#new-label-color");

  labelName.addEventListener("keyup", (e) => {
    labelPreview.textContent = e.target.value;
    label.labelName = e.target.value;
  });

  labelDescription.addEventListener("keyup", (e) => {
    label.labelDescription = e.target.value;
  });

  labelColorChangeBtn.addEventListener("click", () => {
    // teal, sea green, tan, off black, light gray, kelly green, navy, rose pink, indigo
    const colors = ["43a5be", "53bda5", "f5c26b", "253342", "cbd6e2", "4fb06d", "f07857", "ebb8dd", "5c62d6"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    labelColorChangeBtn.style.backgroundColor = "#" + color;
    labelPreview.style.backgroundColor = "#" + color;
    labelColor.value = color;
    label.labelColor = color;
  });
}
