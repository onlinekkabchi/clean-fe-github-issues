export default function form(view, label) {
  const newLabelBtn = document.querySelector(".new-label-button");
  const form = document.querySelector("#new-label-form");
  const button = document.querySelector("#label-create-button");

  //   const label = new Label();
  //   preview(label);

  const onOffBtn = () => {
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
    console.log("form submit");
    form.reset();
    onOffBtn();
  });

  form.addEventListener("input", () => {
    onOffBtn();
  });
}
