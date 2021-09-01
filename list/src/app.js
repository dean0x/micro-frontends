import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #efefef;
  padding: 0.75rem 0;
  line-height: 1;
  font-size: 1rem;
  font-weight: 300;
  &:last-child {
    border: none;
  }
`;

const ListTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 50vw;
  margin: 0 auto;
`;

function App({ data }) {
  return (
    <ListContainer>
      <ListTitle>TODO LIST:</ListTitle>
      <List>
        {data.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </ListContainer>
  );
}

export default App;
