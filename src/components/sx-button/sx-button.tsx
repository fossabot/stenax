import { Component, Prop } from "@stencil/core";

export type Color =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "dark"
  | string;

@Component({
  tag: "sx-button",
  styleUrl: "sx-button.scss",
  shadow: true
})
export class SXButton {
  @Prop()
  name: string;
  @Prop()
  color: Color;
  @Prop()
  disabled: boolean;

  constructor() {
    this.name = "Button";
    this.color = "primary";
  }

  render() {
    return (
      <button class={`sx-button sx-button-${this.color} ${this.disabled ? 'sx-button-disabled': ''}`}>{this.name}</button>
    );
  }
}
