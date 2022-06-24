import { useEffect, useState } from "react";
import styled from "styled-components";
import { exampleKanji } from "../exampleKanji";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const StyledKanji = styled.p`
  font-size: 2rem;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
`;

function Question({ apiKey }: { apiKey: string }) {
  const [data, setData] = useState([] as typeof exampleKanji[]);
  const [randomNum, setRandomNum] = useState(0);
  const [textInput, setTextInput] = useState("loading");

  useEffect(() => {
    async function a() {
      const responseUser = await fetch("https://api.wanikani.com/v2/user", {
        method: "get",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const user = await responseUser.json();

      const response = await fetch("https://api.wanikani.com/v2/subjects", {
        method: "get",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const body = await response.json();
      const resdata = body.data;
      const kanji = resdata.filter((x: any) => x.object === "kanji");
      const mykanji = kanji.filter(
        (x: any) => x.data.level <= user.data.level - 1
      );
      setData(mykanji);
      setRandomNum(getRandomInt(mykanji.length));
      setTextInput("Reading");
    }
    a();
  }, []);

  const enterFunction = () => {
    let val = false;
    data[randomNum].data.readings
      .filter((x) => x.primary)
      .forEach((x) => {
        if (textInput === x.reading) {
          val = true;
          setRandomNum(getRandomInt(data.length));
          setTextInput("Reading");
        }
      });
    if (val === false) {
      alert("false");
    }
  };

  return (
    <>
      <StyledKanji>
        {data.length === 0 ? "loading" : data[randomNum].data.characters}
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
