import React from "react";
import "./ProcessorCost.css";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class ProcessorCost extends React.Component {
  render() {
    return (
      <div className="summary__option">
        <div className="summary__option__label">Processor</div>
        <div className="summary__option__value">{this.props.items.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.items.cost)}
        </div>
      </div>
    );
  }
}
