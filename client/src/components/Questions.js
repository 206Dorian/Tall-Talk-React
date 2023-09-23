import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import QButton from './QButton';
import { GET_QUESTIONS } from '../utils/queries';
import './Questions.css';

const Questions = () => {
  const { loading, error, data } = useQuery(GET_QUESTIONS);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    // Check if data is available and questions have not been set yet
    if (!loading && data && questions.length === 0) {
      // Shuffle the questions randomly
      const shuffledQuestions = shuffleArray(data.questions);
      setQuestions(shuffledQuestions);
    }
  }, [loading, data, questions]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getNextQuestion = () => {
    if (questions.length > 0) {
      // Get and remove the next question from the shuffled list
      const nextQuestion = questions.pop();
      setCurrentQuestion(nextQuestion.text);
    } else {
      // All questions have been displayed, reset the list
      setQuestions(shuffleArray(data.questions));
      getNextQuestion();
    }
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div className='card'>
        <br />
        <p>{currentQuestion}</p>
        <br />
      </div>
      <QButton onClick={getNextQuestion} />
    </div>
  );
};

export default Questions;
