import { getLabelTpl, getLabelItemTpl } from "./tpl";

export const view = {
  app: null,
  data: [],

  init() {
    this.app.insertAdjacentHTML("beforeend", getLabelTpl());
  },

  async getinitdata() {
    const response = await fetch("../data-sources/labels.json");
    const result = await response.json();
  },

  render() {
    return this.data.map((item) =>
      getLabelItemTpl({ name: item.name, color: item.color, description: item.description })
    );
  },
};
