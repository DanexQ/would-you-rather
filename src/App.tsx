import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Game from "./pages/Game";
import NewQuestion from "./pages/NewQuestion";

function App() {
  return (
    <SAppContainer>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/new-question" element={<NewQuestion />} />
      </Routes>
    </SAppContainer>
  );
}

export default App;

const SAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 576px) {
    height: 100%;
    padding: 3rem 0;
  }
`;
