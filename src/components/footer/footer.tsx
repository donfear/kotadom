import React from "react";
import "./footer.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class Footer extends React.Component<IComponentProps> {
  render() {
    return (
      <div className="footer">
        <div className="footer__title">{this.props.t?.('КотАдом')}</div>
        <div className="footer__description">
          {this.props.t?.('Качество, которое понравится вашему питомцу')}
        </div>
      </div>
    );
  }
}
