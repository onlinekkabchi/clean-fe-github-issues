import { getLabelItemTpl } from "./tpl";
import { Model } from "./model";

export const view = {
  app: null,
  data: [],
  async init() {
    const response = await fetch("../data-sources/labels.json");
    const result = await response.json();
    result.forEach((item) => {
      this.render(item);
    });
  },
  add(input) {
    const name = input.name;
    const color = input.color;
    const description = input.description;
    const model = new Model(name, color, description);

    // this.data.concat(model).forEach((item) => this.render(item));

    this.data.push(model);
    return this.render(model);
  },
  render(item) {
    return this.app.insertAdjacentHTML("beforeend", getLabelItemTpl(item));
  },
};
