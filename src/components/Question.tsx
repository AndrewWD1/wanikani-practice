import { useState } from "react";
import styled from "styled-components";
import { exampleKanji } from "../exampleKanji";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const StyledKanji = styled.p`
  font-size: 9rem;
  background-color: #ed009e;
  width: 100%;
  text-align: center;
  color: white;
  padding: 2rem 0rem;
  text-shadow: 5px 5px 0 #dd0093;
  // font-family: "Yuji Syuku", serif;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem 0rem;
  padding: 1rem 0rem;
  width: 100%;
  text-align: center;
`;

const StyledItemType = styled.div`
  color: white;
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
  const [textReadingInput, setTextReadingInput] = useState("");
  const [textMeaningInput, setTextMeaningInput] = useState("");

  const enterFunction = () => {
    let val = false;
    data[randomNum].data.readings
      .filter((x) => x.primary)
      .forEach((x) => {
        if (textReadingInput === x.reading) {
          val = true;
          setRandomNum(getRandomInt(data.length));
          setTextReadingInput("");
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
      <StyledItemType>Kanji</StyledItemType>
      <StyledInput
        value={textReadingInput}
        onKeyPress={(e) => {
          console.log(e.code);
          if (e.code === "Enter") {
            enterFunction();
          }
        }}
        onChange={(e) => {
          setTextReadingInput(e.target.value);
        }}
        placeholder="Reading"
      ></StyledInput>
      <StyledInput
        value={textMeaningInput}
        onKeyPress={(e) => {
          console.log(e.code);
          if (e.code === "Enter") {
            enterFunction();
          }
        }}
        onChange={(e) => {
          setTextMeaningInput(e.target.value);
        }}
        placeholder="Meaning"
      ></StyledInput>
      <button onClick={enterFunction}>Enter</button>
    </>
  );
}

export default Question;
