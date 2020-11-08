import React from "react";
import "./contacts.scss";
import { translation } from "../../decorators/translation.decorator";
import { IComponentProps } from "../../types/component.interface";

@translation()
export class Contacts extends React.Component<
  IComponentProps,
  { contactMapShown: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      contactMapShown: "",
    };
  }
  private contacts = [
    {
      name: this.props.t?.("Офис в Таллинне"),
      address: "Estonia pst 200,\nTallinn",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=24.753720760345463%2C59.43493566877917%2C24.75554466247559%2C59.43581267566538&amp;layer=mapnik&amp;marker=59.43537417506363%2C24.754632711410522",
      src: "./images/contacts/1.jpg",
      email: "tallinn@kotadom.ee",
    },
    {
      name: this.props.t?.("Офис в Тарту"),
      address: "Turu 200,\nTartu",
      src: "./images/contacts/2.jpg",
      mapSrc:
        "https://www.openstreetmap.org/export/embed.html?bbox=25.590623617172245%2C58.36545693872802%2C25.5942714214325%2C58.36726605873341&amp;layer=mapnik&amp;marker=58.36636290060876%2C25.592446050000035",
      email: "tartu@kotadom.ee",
    },
  ];
  render() {
    return (
      <div className="contacts">
        <div className="contacts__title">{this.props.t?.("Контакты")}</div>
        <div className="contacts__grid row">
          {this.contacts.map((contact, index) => (
            <div key={index} className="col-sm-6 contacts__grid-item">
              <div className="contacts__name">
                {this.props.t?.(contact.name as string)}
              </div>
              <div
                className="contacts__grid-image card"
                onMouseEnter={() =>
                  this.setState({ contactMapShown: contact.name || "" })
                }
                onMouseLeave={() => this.setState({ contactMapShown: "" })}
              >
                {this.state.contactMapShown === contact.name ? (
                  <iframe
                    width="425"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    src={contact.mapSrc}
                    style={{ border: "1px solid black", margin: 0 }}
                  ></iframe>
                ) : (
                  <img src={contact.src} alt="" />
                )}
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
