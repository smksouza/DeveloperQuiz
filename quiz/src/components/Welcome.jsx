import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../image/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const quizState = useContext(QuizContext);
  console.log(quizState)

  return (
    <div id="welcome">
      <h2>welcome</h2>
      <p>click on the button below to get started</p>
      <button>Start</button>
      <img src={Quiz} alt="start of the quiz" />
    </div>
  );
};

export default Welcome;
