import { Component, Element, Prop } from "@stencil/core";

@Component({
  tag: "sx-chip",
  styleUrl: "sx-chip.scss",
  shadow: true
})
export class SXChip {

  @Prop() color: string;
  @Prop() text: string;
  @Element() el: HTMLElement;

  constructor() {
    this.color = null;
    this.text = null;
  }

  render() {
    return (
      <div class={`sx-chip sx-chip-${this.color}`}>
        <div class={`sx-chip-content`}>{this.el.innerHTML}</div>
      </div>
    );
  }
}
