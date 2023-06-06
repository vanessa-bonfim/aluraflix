import React from "react";
import { GlobalStyle } from "components/GlobalStyle";
import Header from "components/Header";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Container from "components/Container";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Container />
      <Footer />
    </>
  );
}

export default App;
