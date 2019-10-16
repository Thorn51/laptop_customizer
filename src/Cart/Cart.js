import React from "react";
import "./Cart.css";
import Summary from "../Summary/Summary";
import TotalCost from "../TotalCost/TotalCost";

export default class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary costs={this.props.costs} />
        <TotalCost total={this.props.costs} />
      </section>
    );
  }
}
