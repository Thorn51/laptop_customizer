import React from "react";
import "./TotalCost.css";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class TotalCost extends React.Component {
  render() {
    const total =
      this.props.total.Processor.cost +
      this.props.total["Operating System"].cost +
      this.props.total["Video Card"].cost +
      this.props.total.Display.cost;
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    );
  }
}
