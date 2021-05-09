import React, { Component } from "react";
import RouteRoot from "routes";
import GlobalStyle from "common/globalStyle";
import styled from "@emotion/styled";

class App extends Component {
  render() {
    return (
      <Container className="App">
        <RouteRoot />
        <GlobalStyle />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: black;
`;

export default App;
