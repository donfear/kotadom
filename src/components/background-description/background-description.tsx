import React from "react";
import "./background-description.scss";
import { IComponentProps } from "../../types/component.interface";
import { translation } from "../../decorators/translation.decorator";
@translation()
export class BackgroundDescription extends React.Component<IComponentProps> {
  render() {
    return (
      <div className="background-description__wrapper">
        <div className="background-description">
          <img
            className="background-description__image"
            src={"./images/bg.jpeg"}
            alt=""
          />
            <div className="background-description__content">
          <div>
            <div className="background-description__header">
              {this.props.t?.('Качество, которое понравится вашему питомцу')}
            </div>
            <div className="background-description__description">
              {this.props.t?.('Производим доступные и качественные когтеточки и домики для ваших любимцев.')}
            </div>
          </div>
        </div>
        </div>
      
      </div>
    );
  }
}
