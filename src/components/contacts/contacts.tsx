import React from "react";
import "./contacts.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class Contacts extends React.Component<IComponentProps> {
  private contacts = [
    {
      name: this.props.t?.("Офис в Таллинне"),
      address: "Estonia pst 200,\nTallinn",
      src: './images/contacts/1.jpg',
      email: "tallinn@kotadom.ee",
    },
    {
      name: this.props.t?.("Офис в Тарту"),
      address: "Turu 200,\nTartu",
      src: './images/contacts/2.jpg',
      email: "tartu@kotadom.ee",
    },
  ];
  render() {
    return (
      <div className="contacts">
        <div className="contacts__title">{this.props.t?.('Контакты')}</div>
        <div className="contacts__grid row">
          {this.contacts.map((contact, index) => (
            <div key={index} className="col-sm-6 contacts__grid-item">
              <div className="contacts__name">{this.props.t?.(contact.name as string)}</div>
              <div className="contacts__grid-image">
                  <img src={contact.src} alt=""/>
              </div>
              <div className="contacts__address">{contact.address}</div>
              <div className="contacts__email">{contact.email}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
