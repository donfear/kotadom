import React from "react";
import "./header.scss";
import i18n from "../../i18n";
import { IComponentProps } from "../../types/component.interface";
import { translation } from "../../decorators/translation.decorator";
import { SvgIcon } from "../svg-icon/svg-icon";
@translation()
export class Header extends React.Component<IComponentProps> {
  private languages = ["ee", "ru", "en"];
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded header">
        <h1 className="navbar-brand logo">
          {this.props.t?.("KotAdom")}
        </h1>
        <SvgIcon className="header__paw" name={'heart-tail'}/>
        <div className="nav-item dropdown">
          <button
            className="header__button btn btn-outline-primary"
            id="dropdown09"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.t?.("Язык")}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdown09">
            {this.languages.map((language, id) => (
              <div
                className={`dropdown-item ${
                  language === i18n.language && "active"
                }`}
                key={id}
                onClick={() => {
                  i18n.changeLanguage(language);
                  localStorage.setItem('lng', language)
                }}
              >
                {language.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
