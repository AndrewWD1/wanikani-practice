import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 0.75rem;
  width: 250px;
  margin: 0.5rem 0rem;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function Login({
  setApiKey,
}: {
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [textInput, setTextInput] = useState("");

  return (
    <StyledDiv>
      <div>Enter your WaniKani API Key</div>
      <StyledInput
        type="text"
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.code === "Enter") {
            setApiKey(textInput);
          }
        }}
      ></StyledInput>
      <button
        onClick={() => {
          setApiKey(textInput);
        }}
      >
        Enter
      </button>
    </StyledDiv>
  );
}

export default Login;
