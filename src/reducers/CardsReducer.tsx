import { CardType } from "../context/CardsContext";

export type CardsReducerActions =
  | {
      type: "CHANGE_STATE";
      payload: CardType[];
    }
  | {
      type: "CLEAR_STATE";
    }
  | {
      type: "DRAW_CARDS";
    };

export type StateType = {
  questions: CardType[];
  currentQuestions: CardType[] | null;
  noMore: boolean;
};

export const CardsReducer = (state: StateType, action: CardsReducerActions) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return { ...state, questions: action.payload };
    case "CLEAR_STATE":
      return {
        questions: [{ id: "", question: "" }],
        currentQuestions: null,
        noMore: false,
      };
    case "DRAW_CARDS":
      if (state.questions.length <= 1) return { ...state, noMore: true };
      let currentQuestions: CardType[] = [];
      let updatedQuestions: CardType[] = state.questions;
      for (let i = 0; i < 2; i++) {
        let randomCard =
          updatedQuestions[Math.floor(Math.random() * updatedQuestions.length)];
        updatedQuestions = updatedQuestions.filter(
          (question) => question.id !== randomCard.id
        );
        currentQuestions = [...currentQuestions, randomCard];
      }
      return {
        questions: updatedQuestions,
        currentQuestions: currentQuestions,
        noMore: false,
      };
    default:
      throw new Error();
  }
};
