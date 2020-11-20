import React from "react";
import "./about.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class About extends React.Component<IComponentProps> {
  render() {
    return (
      <div className="about">
        <div className="about__image">
          <img src="./images/about.jpeg" alt="" />
        </div>
        <div className="about__caption">{this.props.t?.('О нас')}</div>
        <div className="about__description description">
        {this.props.t?.('Мы делаем и продаем когтеточки уже более пяти лет, количество наших заказов на данный момент превышает 50 000.')}
          <br />
          <br />
          
          {this.props.t?.('Мы любим домашних животных,и производим для них отличный товар.')}
        </div>
      </div>
    );
  }
}
