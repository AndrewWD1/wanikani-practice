import { useEffect, useState } from "react";
import styled from "styled-components";
import { exampleKanji } from "../exampleKanji";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const StyledKanji = styled.p`
  font-size: 4rem;
  background-color: pink;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
`;

function Question({
  data,
  randomNum,
  setRandomNum,
}: {
  data: typeof exampleKanji[];
  randomNum: number;
  setRandomNum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [textInput, setTextInput] = useState("");

  const enterFunction = () => {
    let val = false;
    data[randomNum].data.readings
      .filter((x) => x.primary)
      .forEach((x) => {
        if (textInput === x.reading) {
          val = true;
          setRandomNum(getRandomInt(data.length));
          setTextInput("");
        }
      });
    if (val === false) {
      alert("false");
    }
  };

  return (
    <>
      <StyledKanji id="kanji">
        {randomNum === -1 ? "loading" : data[randomNum].data.characters}
      </StyledKanji>
      <StyledInput
        value={textInput}
        onKeyPress={(e) => {
          console.log(e.code);
          if (e.code === "Enter") {
            enterFunction();
          }
        }}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      ></StyledInput>
      <button onClick={enterFunction}>Enter</button>
    </>
  );
}

export default Question;
