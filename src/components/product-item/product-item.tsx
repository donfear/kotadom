import React from "react";
import "./product-item.scss";
import { translation } from "../../decorators/translation.decorator";
import { Modal } from "../modal/modal";
import { Checkout } from "../checkout/checkout";

@translation()
export class ProductItem extends React.Component<{
  className: any;
  product: any;
  index: number;
  t?: any;
}> {
  handleBuyClick(id: string) {
    (document.querySelector(
      `#imageModal${id} button`
    ) as HTMLDivElement).click();
    (document.getElementById(`itemCheckoutBtn` + id) as HTMLDivElement).click();
  }
  onBuyClick(id: string) {
    (document.getElementById(`itemCheckoutBtn` + id) as HTMLDivElement).click();
  }

  getPriceComponent(price: string) {
    const splitedPrice: string[] = price.split(".");
    return (
      <div className="product-item__cost">
        <span className="product-item__cost--amount-before">
          <span className="product-item__cost--amount">
            €{+splitedPrice[0] * 2},<sup>{splitedPrice[1]}</sup>
          </span>
        </span>
        <div>
          <span className="product-item__cost--amount-after">
            €{splitedPrice[0]},<sup>{splitedPrice[1]}</sup>
          </span>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={this.props.className + " product-item"}>
        <div
          className="product-item__image card"
          data-toggle="modal"
          data-target={`#imageModal` + this.props.index}
        >
          <img src={this.props.product.src} alt="" />
        </div>
        <div className="product-item__name">
          {this.props.t?.(this.props.product.name)}
        </div>
        <div className="product-item__price">
          {this.getPriceComponent(this.props.product.price)}

          <div
            className="btn btn-primary"
            onClick={this.onBuyClick.bind(this, this.props.index.toString())}
          >
            {this.props.t?.("Купить")}
          </div>
        </div>

        <Modal
          id={`imageModal` + this.props.index}
          title={this.props.product.name}
        >
          <div className="product-item__modal-image">
            <img src={this.props.product.src} alt="" />
          </div>
          <div className="product-item__price product-item__price--modal">
            <div>
              <span className="product-item__sign">€</span>
              <span>{this.props.product.price}</span>
            </div>
            <div
              className="btn btn-primary"
              onClick={this.handleBuyClick.bind(
                this,
                this.props.index.toString()
              )}
            >
              {this.props.t?.("Купить")}
            </div>
          </div>
        </Modal>

        <button
          style={{ display: "none" }}
          data-toggle="modal"
          id={`itemCheckoutBtn` + this.props.index}
          data-target={`#itemCheckout` + this.props.index}
        ></button>
        <Modal
          id={`itemCheckout` + this.props.index}
          title={this.props.product.name}
        >
          <Checkout
            name={this.props.product.name}
            price={this.props.product.price}
          />
        </Modal>
      </div>
    );
  }
}
