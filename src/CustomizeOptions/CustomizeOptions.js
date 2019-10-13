import React from "react";
import "./CustomizeOptions.css";
import ProcessorOption from "../ProcessorOption/ProcessorOption";
import OperatingSystemOption from "../OperatingSystemOption/OperatingSystemOption";
import VideoCardOption from "../VideoCardOption/VideoCardOption";
import DisplayOption from "../DisplayOption/DisplayOption";

export default class CustomizeOptions extends React.Component {
  render() {
    return (
      <form className="main__summary">
        <h2>Customize your Laptop</h2>
        <ProcessorOption
          processorOptions={this.props.features.Processor}
          selected={this.props.selected.Processor}
          updateFeature={this.props.updateFeature}
        />
        <OperatingSystemOption
          operatingSystem={this.props.features["Operating System"]}
          selected={this.props.selected["Operating System"]}
          onSelect={this.props.onSelect}
        />
        <VideoCardOption
          videoCard={this.props.features["Video Card"]}
          selected={this.props.selected["Video Card"]}
          onSelect={this.props.onSelect}
        />
        <DisplayOption
          display={this.props.features.Display}
          selected={this.props.selected.Display}
          onSelect={this.props.onSelect}
        />
      </form>
    );
  }
}
