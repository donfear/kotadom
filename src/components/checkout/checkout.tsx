import React from "react";
import { IComponentProps } from "../../types/component.interface";

interface ICheckoutProps extends IComponentProps {
  name: string;
  price: string;
}
export class Checkout extends React.Component<ICheckoutProps> {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">1</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{this.props.name}</h6>
              </div>
              <span className="text-muted">€{this.props.price}</span>
            </li>
            
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (EUR)</span>
              <strong>€{this.props.price}</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Estonia pst 123"
                required
              />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <select
                  className="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Choose...</option>
                  <option>Estonia</option>
                  <option>Russia</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder="11111"
                  required
                />
              </div>
            </div>
            <hr />
            <h4>Payment</h4>

            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  checked
                  onChange={() => false}
                  required
                />
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder="Card owner"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder="Card number"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder="Card expiration"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    );
  }
}
