import { CardType } from "../context/CardsContext";

export type CardsReducerActions = {
  type: "CHANGE_STATE";
  payload: CardType[];
};

type state = {
  questions: CardType[];
  currentQuestions: CardType[];
};

export const CardsReducer = (state: state, action: CardsReducerActions) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return { ...state, questions: { ...action.payload } };
  }
};
