import React from "react";
import styled from "styled-components";

interface CardProps {
  question: string;
}

const Card = ({ question }: CardProps) => {
  return (
    <SCardContainer>
      <SQuestion>{question}</SQuestion>
    </SCardContainer>
  );
};

export default Card;

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

  @media only screen and (max-width: );
`;

const SQuestion = styled.span`
  transform: rotate(-5deg);
  text-align: center;
`;
