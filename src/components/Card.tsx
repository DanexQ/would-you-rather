import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { CardsContext } from "../context/CardsContext";

interface CardProps {
  question: string;
  onClick: () => void;
}

const Card = ({ question, onClick }: CardProps) => {
  const { state } = useContext(CardsContext);
  return (
    <SCardContainer onClick={onClick}>
      <SQuestion>{!state.noMore ? question : "No more cards"}</SQuestion>
    </SCardContainer>
  );
};

export default Card;

const animateRainbow = keyframes`
  0%{
    filter: brightness(100%);
  }

  50% {
    filter: brightness(80%);
  }
  
  100%{
    filter: brightness(100%);
  }
`;

const SCardContainer = styled.div`
  width: 35rem;
  height: 47rem;
  background-color: #00abb3;
  border-radius: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  border: 1px solid black;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
  padding: 3rem;
  cursor: pointer;
  transition: all 0.2s;
  background-size: 1800%;
  overflowY: auto:
  word-break: break-all;
  word-wrap: break-word;

  &:hover {
    animation: ${animateRainbow} 0.75s ease-in infinite;
  }

  &:active {
    transform: translateY(5px);
  }
`;

const SQuestion = styled.span`
  transform: rotate(-5deg);
  text-align: center;
`;
