import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #fff;
`;

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <h1>test</h1>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
