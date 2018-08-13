import { Component } from "@stencil/core";

@Component({
  tag: "sx-divider",
  styleUrl: "sx-divider.scss",
  shadow: true
})
export class SXDivider {

  constructor() { }

  render() {
    return (
      <div class="">
      <hr/>
      </div>
    );
  }
}
