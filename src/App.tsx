import { useEffect, useState } from "react";
import styled from "styled-components";
import Login from "./components/Login";
import { exampleKanji } from "./exampleKanji";
import Question from "./components/Question";

const StyleContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

function App() {
  const [apiKey, setApiKey] = useState("");
  const [data, setData] = useState([] as typeof exampleKanji[]);
  const [randomNum, setRandomNum] = useState(-1);
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

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
    }
    a();
  }, [apiKey]);

  if (apiKey !== "") {
    return (
      <StyleContainer>
        <Question
          data={data}
          randomNum={randomNum}
          setRandomNum={setRandomNum}
        />
      </StyleContainer>
    );
  }
  return (
    <StyleContainer>
      <Login setApiKey={setApiKey} />
    </StyleContainer>
  );
}

export default App;
