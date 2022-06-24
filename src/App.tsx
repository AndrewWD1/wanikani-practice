import { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Question from "./components/Question";

const StyleContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [apiKey, setApiKey] = useState("");

  return (
    <StyleContainer>
      {apiKey !== "" ? (
        <Question apiKey={apiKey} />
      ) : (
        <Login setApiKey={setApiKey} />
      )}
    </StyleContainer>
  );
}

export default App;
