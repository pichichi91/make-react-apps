import React, { useState } from 'react';
import Question from './components/Question';
import CategorySelector from './components/CategorySelector';
import ResultModal from './components/ResultModal';
import Scoreboard from './components/Scoreboard';
import useTrivia from "./hooks/useTrivia";


import './App.css';

export default function App() {

  const { question, getQuestion, category, setCategory } = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null)

  function handleQuestionAnswered(answer) {
    const result = answer === question.correct_answer;
    setIsCorrect(result)
  }

  function handlNextQuestion() {
    setIsCorrect(null);
    getQuestion();

  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {isCorrect !== null && <ResultModal isCorrect={isCorrect} answer={question.correct_answer} getQuestion={handlNextQuestion} />}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
        <Scoreboard isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && <Question question={question} answerQuestion={handleQuestionAnswered} />}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={handlNextQuestion}>Go to next question <span aria-label="emoji" role="img">👉</span></button>
      </div>
    </div>
  );
}
