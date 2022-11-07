import styled from "styled-components";
import Button from "../components/Button";
import Card from "../components/Card";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const Game = () => {
  const handleAddQuestion = async () => {
    const questionRef = doc(collection(db, "questions"));
    try {
      await setDoc(questionRef, {
        id: questionRef.id,
        question: "last test",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SGameContainer>
      <STitleContainer>
        <STitle>
          <STitleWord>Czy </STitleWord>
          <STitleWord>wolałbyś?</STitleWord>
        </STitle>
        <SDescription>
          (Wybierz kartę z rzeczą, którą wolałbyś zrobić){" "}
        </SDescription>
      </STitleContainer>
      <SCardsContainer>
        <Card question="Nigdy więcej nie zobaczyć słońca" />
        <SOr>lub</SOr>
        <Card question="żyć bez jakiejkolwiek muzyki do końca życia" />
      </SCardsContainer>
      <Button text="Wylosuj nowe karty" place="left" smallFont={true} />
      <Button
        text="Dodaj swoją kartę"
        place="right"
        smallFont={true}
        onClick={handleAddQuestion}
      />
    </SGameContainer>
  );
};

export default Game;

const SGameContainer = styled.div`
  max-width: 140rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-direction: column;

  @media only screen and (max-width: 540px) {
    gap: 6rem;
  }
`;

const STitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media only screen and (max-width: 1000px) {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 540px) {
    margin-top: 5rem;
  }
`;

const SDescription = styled.span`
  color: white;
  font-size: 2.4rem;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const STitle = styled.div`
  display: flex;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const STitleWord = styled.h1`
  display: inline-block;
  font-size: 9.6rem;
  color: #00abb3;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  filter: drop-shadow(1rem 1rem 0.5rem rgba(0, 0, 0, 0.25));
  transform: rotate(-5deg);

  &:last-child {
    margin-left: 2rem;
  }
`;

const SCardsContainer = styled.div`
  display: flex;
  gap: 10rem;

  @media only screen and (max-width: 1400px) {
    gap: 5rem;
  }
  @media only screen and (max-width: 540px) {
    flex-direction: column;
    gap 3rem;
  }
`;

const SOr = styled.span`
  color: white;
  font-size: 6.4rem;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  transform: rotate(-5deg);
  align-self: center;
`;
