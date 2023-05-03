export class Label {
  constructor(labelName, labelDescription, labelColor) {
    this.labelName = labelName;
    this.labelDescription = labelDescription;
    this.labelColor = labelColor;
  }

  changeColor() {
    const items = ["43a5be", "53bda5", "f5c26b", "253342", "cbd6e2", "4fb06d", "f07857", "ebb8dd", "5c62d6"];
    const item = items[Math.floor(Math.random() * items.length)];
    this.labelColor = item;
    return this.labelColor;
  }

  checkValues() {
    return true;
  }

  showLabelValues() {
    console.log({ name: this.labelName, color: this.labelColor, description: this.labelDescription });
    return { name: this.labelName, color: this.labelColor, description: this.labelDescription };
  }
}
