import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 0.75rem;
  width: 100%;
`;

function Login({
  setApiKey,
}: {
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [textInput, setTextInput] = useState("");

  return (
    <div>
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
    </div>
  );
}

export default Login;
