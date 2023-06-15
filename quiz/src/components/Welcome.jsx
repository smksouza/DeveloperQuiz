import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../image/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>welcome</h2>
      <p>click on the button below to get started</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Start</button>
      <img src={Quiz} alt="start of the quiz" />
    </div>
  );
};

export default Welcome;
