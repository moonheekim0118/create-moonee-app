import React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
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
