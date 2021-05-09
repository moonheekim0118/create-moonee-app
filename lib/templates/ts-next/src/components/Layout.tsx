import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return <div>{children}</div>;
};

export default Layout;
