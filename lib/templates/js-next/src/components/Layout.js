import React from "react";
import styled from "@emotion/styled";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: black;
`;

export default Layout;
