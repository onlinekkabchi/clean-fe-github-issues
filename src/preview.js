// teal, sea green, tan, off black, light gray, kelly green, navy, rose pink, indigo

const colors = ["43a5be", "53bda5", "f5c26b", "253342", "cbd6e2", "4fb06d", "f07857", "ebb8dd", "5c62d6"];
const picker = () => colors[Math.floor(Math.random() * colors.length)];

export default function preview(data) {
  const label = data.label;
  const labelPreview = data.labelPreview;
  const labelName = data.labelName;
  const labelDescription = data.labelDescription;
  const labelColor = data.labelColor;
  const labelColorChangeBtn = data.labelColorChangeBtn;

  labelName.addEventListener("keyup", (e) => {
    labelPreview.textContent = e.target.value;
    label.labelName = e.target.value;
  });

  labelDescription.addEventListener("keyup", (e) => {
    label.labelDescription = e.target.value;
  });

  labelColorChangeBtn.addEventListener("click", () => {
    const color = picker();
    labelColorChangeBtn.style.backgroundColor = "#" + color;
    labelPreview.style.backgroundColor = "#" + color;
    labelColor.value = color;
    label.labelColor = color;
  });
}
