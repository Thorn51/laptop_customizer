import React from "react";
import "./ProcessorOption.css";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class ProcessorOption extends React.Component {
  render() {
    const processors = this.props.processorOptions.map((processor, index) => {
      const featureHash = `${processor.name}-${index}`;
      return (
        <div key={featureHash} className="feature__item">
          <input
            type="radio"
            id={featureHash}
            className="feature__option"
            name={slugify(processor.name)}
            checked={processor.name === this.props.selected.name}
            onChange={e => this.props.updateFeature("Processor", processor)}
          />
          <label htmlFor={featureHash} className="feature__label">
            {processor.name} ({USCurrencyFormat.format(processor.cost)})
          </label>
        </div>
      );
    });
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Processor</h3>
        </legend>
        {processors}
      </fieldset>
    );
  }
}
