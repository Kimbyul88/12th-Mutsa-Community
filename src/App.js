import React from "react";
import styled from "styled-components";
import Router from "./Router";
import { White } from "./styles/color";

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 376px;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
  background-color: ${White};
`;

export default App;

