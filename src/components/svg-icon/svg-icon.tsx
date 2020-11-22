import React from "react";
import './svg-icon.scss';

export class SvgIcon extends React.Component<{ name: string, className: any }> {
  render() {
    return (
      <div className={`svg-icon ${this.props.className || ''}`}>
        <img src={`./images/svg/${this.props.name}.svg`} alt={this.props.name}></img>
      </div>
    );
  }
}
