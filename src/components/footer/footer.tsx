import React from "react";
import "./footer.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class Footer extends React.Component<IComponentProps> {
  render() {
    return (
      <div className="footer">
        <div className="footer__title logo logo-light">{this.props.t?.("KotAdom")}</div>
        <div className="footer__description description">
          {this.props.t?.("Качество, которое понравится вашему питомцу")}
        </div>
        <div className="footer__contact">
          <ul className="footer__contacts">
            <li style={{ textAlign: "left" }}>
              <i className="fa fa-map-marker fa-3x"></i>
              Turu 200, Tartu
              <br/>
              Estonia pst 200, Tallinn
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
