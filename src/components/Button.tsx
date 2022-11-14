import styled from "styled-components";

interface ButtonProps {
  text: string;
  place: "mid" | "right" | "left";
  smallFont: boolean;
  onClick?: () => void;
  type?: "submit";
}

const Button = ({ text, place, smallFont, onClick, type }: ButtonProps) => {
  return (
    <SButton
      type={!!type ? type : "button"}
      place={place}
      smallFont={smallFont}
      onClick={onClick}
    >
      {text}
    </SButton>
  );
};

export default Button;

const SButton = styled.button<{ place: string; smallFont: boolean }>`
  width: 21rem;
  height: 9rem;
  color: white;
  cursor: pointer;
  ${({ smallFont }) => (smallFont ? "font-size: 2rem;" : `font-size: 3rem;`)}
  border-radius: 1rem;
  background-color: #00abb3;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  border: 1px solid black;
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  transition: all 0.1s;

  ${({ place }) =>
    place !== "mid" &&
    `
    position: absolute; 
    top: 4rem; 
    ${place}:4rem;

    
    `}

  @media only screen and (max-width: 1440px) {
    width: 30rem;
    height: 15rem;
    font-size: 3rem;
  }

  @media only screen and (max-width: 576px) {
    min-width: 40%;
    height: 15rem;
    font-size: 2.5rem;
    display: inline-block;
    top: 0rem;
    right: 0rem;
    left: 0rem;
    position: relative;
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  }
`;
