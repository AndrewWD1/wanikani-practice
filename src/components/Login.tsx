import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import styled from "styled-components";

function Login({
  setApiKey,
}: {
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [textInput, setTextInput] = useState("Enter your WaniKani API key");

  return (
    <div>
      <input
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
      ></input>
    </div>
  );
}

export default Login;
