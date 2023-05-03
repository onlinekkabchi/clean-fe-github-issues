export class Label {
  constructor(labelName, labelDescription, labelColor) {
    this.labelName = labelName;
    this.labelDescription = labelDescription;
    this.labelColor = labelColor;
  }

  showLabelValues() {
    return { name: this.labelName, color: this.labelColor, description: this.labelDescription };
  }
}
