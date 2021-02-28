import React from 'react';

export default function ResultModal({ isCorrect, answer, getQuestion }) {
  return (
    <div className={`result-modal ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
      <div className="overlay" />
      <div className="result-modal-content">

        {isCorrect &&
          <h3 >
            <span role="img" aria-label="emoji">👊</span><span aria-label="emoji" role="img">👊</span><span aria-label="emoji" role="img">👊</span>
            <br />
          YOU WON!
        </h3>}
        {!isCorrect &&
          <h3>
            <span aria-label="emoji" role="img">😟</span><span aria-label="emoji" role="img">😢</span><span aria-label="emoji" role="img">😟</span>
            <br />
          YOU LOST!
        </h3>
        }
        {!isCorrect &&
          <div className="correct-answer">
            <small>The correct answer was:</small>
            <br />
            <strong dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        }


        <button onClick={getQuestion}>Go to next question  <span aria-label="emoji" role="img">👉</span> </button>
      </div>
    </div >
  );
}
