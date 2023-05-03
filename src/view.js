import { getLabelItemTpl } from "./tpl";
import { Model } from "./model";

export const view = {
  app: null,
  data: [],
  async init() {
    const response = await fetch("../data-sources/labels.json");
    const result = await response.json();
    result.forEach((item) => {
      this.add(item);
    });
  },
  add(input) {
    const name = input.name;
    const color = input.color;
    const description = input.description;
    const model = new Model(name, color, description);

    // this.data.concat(model).forEach((item) => this.render(item));

    this.data.push(model);
    this.render(model);
    this.countLabel();
  },
  render(item) {
    this.app.insertAdjacentHTML("beforeend", getLabelItemTpl(item));
  },
  countLabel() {
    this.app.querySelector(".label-header > div > div").textContent = this.data.length + " Labels";
  },
};
