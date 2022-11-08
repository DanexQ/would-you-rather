import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useReducer } from "react";
import { db } from "../firebase";
import {
  CardsReducer,
  CardsReducerActions,
  StateType,
} from "../reducers/CardsReducer";

export interface CardsStateType {
  state: StateType;
  dispatch: React.Dispatch<CardsReducerActions>;
}

export type state = {
  questions: CardType[];
  currentQuestions: CardType[] | null;
};

export type CardType = {
  id: string;
  question: string;
};

const INITIAL_VALUE: StateType = {
  questions: [{ id: "", question: "" }],
  currentQuestions: null,
  noMore: false,
};

export const CardsContext = createContext({} as CardsStateType);

export const CardsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(CardsReducer, INITIAL_VALUE);

  const getData = async () => {
    const questionsRef = collection(db, "questions");
    let questions: CardType[] = [];
    try {
      const querySnapshot = await getDocs(questionsRef);
      querySnapshot.forEach(
        (doc) => (questions = [...questions, doc.data() as CardType])
      );
      dispatch({ type: "CHANGE_STATE", payload: questions });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      console.log("unmounted");
      dispatch({ type: "CLEAR_STATE" });
    };
  }, []);

  return (
    <CardsContext.Provider value={{ state, dispatch }}>
      {children}
    </CardsContext.Provider>
  );
};
