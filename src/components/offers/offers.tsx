import React from "react";
import "./offers.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class Offers extends React.Component<IComponentProps> {
  private offers = [
    { name: this.props.t?.("Информация о товаре"), src: "./images/offers/1.png" },
    { name: this.props.t?.("Возможность оплаты на месте"), src: "./images/offers/2.png" },
    { name: this.props.t?.("Возможность монтажа на месте"), src: "./images/offers/3.png" },
    { name: this.props.t?.("Постоянно обновляемая линейка"), src: "./images/offers/4.png" },
  ];
  render() {
    return (
      <div className="offers">
        <div className="offers__title">{this.props.t?.('Что мы предлагаем')}</div>
        <div className="offers__grid row justify-content-center">
          {this.offers.map((offer, index) => (
            <div
              key={index}
              className="col-sm-6 col-md-4 col-lg-3 offers__item"
            >
              <div className="offers__item--img">
              <img src={offer.src} alt="" />
                </div>
              <div>{this.props.t?.(offer.name as string)}</div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    );
  }
}
