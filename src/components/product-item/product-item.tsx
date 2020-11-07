import React from "react";
import "./product-item.scss";
import { translation } from "../../decorators/translation.decorator";

@translation()
export class ProductItem extends React.Component<{
  className: any;
  product: any;
  index: number;
  t?: any
}> {
  render() {
    return (
      <div className={this.props.className + " product-item"}>
        <div className="product-item__image"
         data-toggle="modal"
         data-target={`#imageModal`+this.props.index}
        >
          <img src={this.props.product.src} alt="" />
        </div>
        <div className="product-item__name">{this.props.t?.(this.props.product.name)}</div>
        <div className="product-item__price">
          <span className="product-item__sign">€</span>
          <span>{this.props.product.price}</span>
        </div>

        <div className="modal" role="dialog" id={`imageModal`+this.props.index}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.product.name}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="product-item__modal-image">
                  <img src={this.props.product.src} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
