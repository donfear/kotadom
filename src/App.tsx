import React from "react";
import "./App.scss";

import { Header } from "./components/header/header";
import { BackgroundDescription } from "./components/background-description/background-description";
import { Products } from "./components/products/products";
import { Catalogue } from "./components/catalogue/catalogue";
import { About } from "./components/about/about";
import { Offers } from "./components/offers/offers";
import { Subscribe } from "./components/subscribe/subscribe";
import { Contacts } from "./components/contacts/contacts";
import { Partner } from "./components/partner/partner";
import { Footer } from "./components/footer/footer";
import i18n from "./i18n";

function setLanguage() {
  const lng = localStorage.getItem('lng');
  if (!!lng) {
    i18n.changeLanguage(lng);
  }
}

function App() {
  setLanguage();
  return (
    <div className="App">
      <Header />
      <BackgroundDescription />
      <Products />
      <Catalogue />
      <About />
      <Offers />
      <Subscribe />
      <Contacts />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
