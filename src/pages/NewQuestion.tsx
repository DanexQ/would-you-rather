import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { db } from "../firebase";
import { SButtonsContainer } from "../pages/Game";

const NewQuestion = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<string>();
  const [error, setError] = useState<string>();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuestion("");
    const questionRef = doc(collection(db, "questions"));

    try {
      !!question &&
        (await setDoc(questionRef, {
          id: questionRef.id,
          question: question.trim(),
        }));
    } catch (err) {
      const er = err as Error;
      setError(er.message);
    }
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <label htmlFor="question">Question of the new card</label>
      <SInput
        id="question"
        cols={20}
        rows={5}
        onChange={handleChange}
        value={question}
      />
      <SButtonsContainer>
        <Button type="submit" text="Submit" place="mid" smallFont={true} />
        <Button
          text="Back"
          place="right"
          smallFont={false}
          onClick={handleGoBack}
        />
      </SButtonsContainer>
      {!!error && error}
    </SForm>
  );
};

export default NewQuestion;

const SForm = styled.form`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  color: white;
  font-size: 5rem;
  text-align: center;

  label {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    @media only screen and (max-width: 576px) {
      font-size: 6rem;
    }
  }
`;

const SInput = styled.textarea`
  font-size: 3rem;
  text-align: center;
  padding: 2rem;
  resize: none;

  &:focus {
    outline: 2px solid #00abb3;
  }
`;

const SSpan = styled.span`
  font-size: 2rem;
  color: red;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  @media only screen and (max-width: 576px) {
    font-size: 2.5rem;
  }
`;
