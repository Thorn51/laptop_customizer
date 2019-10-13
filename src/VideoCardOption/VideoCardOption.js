import React from "react";
import "./VideoCardOption.css";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class VideoCardOption extends React.Component {
  render() {
    const videoCard = this.props.videoCard.map((videoCard, index) => {
      const featureHash = `${videoCard.name}-${index}`;
      return (
        <div key={featureHash} className="feature__item">
          <input
            type="radio"
            id={featureHash}
            className="feature__option"
            name={slugify(videoCard.name)}
            checked={videoCard.name === this.props.selected.name}
          />
          <label htmlFor={featureHash} className="feature__label">
            {videoCard.name} ({USCurrencyFormat.format(videoCard.cost)})
          </label>
        </div>
      );
    });
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Video Card</h3>
        </legend>
        {videoCard}
      </fieldset>
    );
  }
}
