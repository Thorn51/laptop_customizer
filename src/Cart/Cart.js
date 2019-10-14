import React from "react";
import "./Cart.css";
import ProcessorCost from "../ProcessorCost/ProcessorCost";
import OperatingSystemCost from "../OperatingSystemCost/OperatingSystemCost";
import VideoCardCost from "../VideoCardCost/VideoCardCost";
import DisplayCost from "../DisplayCost/DisplayCost";
import TotalCost from "../TotalCost/TotalCost";

export default class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <ProcessorCost items={this.props.items.Processor} />
        <OperatingSystemCost items={this.props.items["Operating System"]} />
        <VideoCardCost items={this.props.items["Video Card"]} />
        <DisplayCost items={this.props.items.Display} />
        <TotalCost total={this.props.items} />
      </section>
    );
  }
}
