import React from "react";
import styled from "@emotion/styled";

const Index = (): JSX.Element => {
  return (
    <Container>
      <MainTitle>Welcome to Next.js With TypeScript Bolierplate!</MainTitle>
      <SubContents>
        <SubTitle>â Now we have configured...</SubTitle>
        <ul>
          <List>React, Next.js, TypeScript</List>
          <List>Emotion 11</List>
          <List>Babel</List>
          <List>Prettier, ESLint</List>
        </ul>
        <SubTitle>âDo you have Any Questions or Find some Bug?</SubTitle>
        <Description>
          Let me know by Issue or send PR! I would love to hear from youð
        </Description>
      </SubContents>
      <Anchor href="https://github.com/moonheekim0118/create-moonee-app">
        Visit Github Repo ð
      </Anchor>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`;

const MainTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  color: Cyan;
`;

const SubTitle = styled.h2`
  color: #fff;
  margin-top: 1.2rem;
`;

const List = styled.li`
  font-family: "Raleway", sans-serif;
  color: #fff;
  font-size: 1.2rem;
`;

const Description = styled.p`
  font-family: "Raleway", sans-serif;
  color: #fff;
  font-size: 1.2rem;
`;

const Anchor = styled.a`
  color: #fff;
`;

export default Index;
