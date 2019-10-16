import React from "react";
import "./CustomizeOptions.css";
import FeatureOption from "../FeatureOption/FeatureOption";

export default class CustomizeOptions extends React.Component {
  render() {
    return (
      <form className="main__summary">
        <h2>Customize your Laptop</h2>
        <FeatureOption
          features={this.props.features}
          selected={this.props.selected}
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}
