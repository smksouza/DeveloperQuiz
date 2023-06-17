import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../image/welldone.svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Game Over</h2>
      <p>Score: {quizState.score}</p>
      <p>
        You answered {quizState.score} out of {quizState.questions.length}{" "}
        questions
      </p>
      <img src={WellDone} alt="End of quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Restart</button>
    </div>
  );
};

export default GameOver;
