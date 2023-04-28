import { getLabelItemTpl } from "./tpl";

export class Model {
  constructor(name, color, description) {
    this.name = name;
    this.color = color;
    this.description = description;
  }

  render() {
    return getLabelItemTpl({ name: this.name, color: this.color, description: this.description });
  }
}
