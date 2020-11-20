import React from "react";
import "./partner.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class Partner extends React.Component<IComponentProps> {
  render() {
    return (
      <div className="partner">
        <form className="partner__form" id="contact-form" role="form">
          <div className="partner__message">
            {this.props.t?.('Если у Вас есть вопросы, ждем Ваших сообщений !')}
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder={this.props.t?.('Введите полное имя*')}
                  required
                  data-error="Firstname is required."
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  id="form_phone"
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder={this.props.t?.('Введите номер телефона*')}
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder={this.props.t?.('Введите эмаил*')}
                  required
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder={this.props.t?.('Введите ваше сообщение')}
                  rows={4}
                  required
                  data-error="Please,leave us a message."
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-12">
              <input
                type="submit"
                className="btn btn-primary btn-send"
                value={this.props.t?.('Отправить')}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
