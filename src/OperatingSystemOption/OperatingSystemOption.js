import React from "react";
import "./OperatingSystemOption.css";
import slugify from "slugify";
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class OperatingSystemOption extends React.Component {
  render() {
    let operatingSystems = this.props.operatingSystem.map((os, index) => {
      const featureHash = `${os.name}-${index}`;
      return (
        <div key={featureHash} className="feature__item">
          <input
            type="radio"
            id={featureHash}
            className="feature__option"
            name={slugify(os.name)}
            checked={os.name === this.props.selected.name}
            onChange={e => this.props.updateFeature("Operating System", os)}
          />
          <label htmlFor={featureHash} className="feature__label">
            {os.name} ({USCurrencyFormat.format(os.cost)})
          </label>
        </div>
      );
    });
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Operating System</h3>
        </legend>
        {operatingSystems}
      </fieldset>
    );
  }
}
