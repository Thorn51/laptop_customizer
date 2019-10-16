import React from "react";
import "./Summary.css";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.costs).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.costs[feature];
      console.log(selectedOption);
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    return <div>{summary}</div>;
  }
}
