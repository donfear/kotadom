import React from "react";
import { ProductItem } from "../product-item/product-item";
import "./products.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

interface IProduct {
  name: string;
  price: string;
  src: string;
}
@translation()
export class Products extends React.Component<IComponentProps> {
  private products: IProduct[] = [
    {
      name: this.props.t?.("Большая когтеточка с домиком") || '',
      price: "149.99",
      src: "./images/4.jpg",
    },
    {
      name: this.props.t?.("Средняя когтеточка с домиком") || '',
      price: "129.99",
      src: "./images/2.jpg",
    },
    {
      name: this.props.t?.("Маленькая когтеточка без домика") || '',
      price: "29.99",
      src: "./images/3.jpg",
    },
    {
      name: this.props.t?.("Стильная когтеточка  с домиком") || '',
      price: "109.99",
      src: "./images/1.jpg",
    },
  ];

  render() {
    return (
      <div className="products">
        <div className="products__title">{this.props.t?.('Популярные продукты')}</div>
        <div className="row justify-content-center">
          {this.products.map((product, index) => (
            <ProductItem
              key={index}
              index={index}
              className="col-sm-6 col-md-4 col-lg-3 text-left"
              product={product}
            ></ProductItem>
          ))}
        </div>
      </div>
    );
  }
}
