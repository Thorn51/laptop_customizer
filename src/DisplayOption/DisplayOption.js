import React from "react";
import "./DisplayOption.css";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class DisplayOption extends React.Component {
  render() {
    const displays = this.props.display.map((display, index) => {
      const featureHash = `${display.name}-${index}`;
      return (
        <div key={featureHash} className="feature__item">
          <input
            type="radio"
            id={featureHash}
            className="feature__option"
            name={slugify(display.name)}
            checked={display.name === this.props.selected.name}
            onChange={e => this.props.updateFeature("Display", display)}
          />
          <label htmlFor={featureHash} className="feature__label">
            {display.name} ({USCurrencyFormat.format(display.cost)})
          </label>
        </div>
      );
    });
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Display</h3>
        </legend>
        {displays}
      </fieldset>
    );
  }
}
