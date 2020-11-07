import React from "react";
import "./catalogue.scss";
import { IComponentProps } from "../../types/component.interface";
import { translation } from "../../decorators/translation.decorator";
@translation()
export class Catalogue extends React.Component<IComponentProps> {
  handlePdfClick() {
      window.open('./catalog.pdf', '_blank')
  }
  render() {
    return (
      <div className="catalogue" id="catalogue">
        <div className="catalogue__content">
          <div>{this.props.t?.('Наш каталог')}</div>
          <div>
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={this.handlePdfClick.bind(this)}
            >
              {this.props.t?.('Скачать PDF')}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
