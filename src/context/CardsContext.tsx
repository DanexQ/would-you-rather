import { createContext, useReducer } from "react";
import { CardsReducer, CardsReducerActions } from "../reducers/CardsReducer";

export interface CardsStateType {
  state: state;
  dispatch: React.Dispatch<CardsReducerActions>;
}

export type state = {
  questions: CardType[];
  currentQuestions: CardType[];
};

export type CardType = {
  id: string;
  question: string;
};

const INITIAL_VALUE: state = {
  questions: [{ id: "", question: "" }],
  currentQuestions: [{ id: "", question: "" }],
};

export const CardsContext = createContext({} as CardsStateType);

export const CardsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(CardsReducer, INITIAL_VALUE);

  return (
    <CardsContext.Provider value={{ state, dispatch }}>
      {children}
    </CardsContext.Provider>
  );
};
