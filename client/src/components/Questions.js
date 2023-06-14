import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import QButton from './QButton';
import { GET_QUESTIONS } from '../utils/queries'
import './Questions.css';

const Questions = () => {
  const { loading, error, data } = useQuery(GET_QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  console.log(data);  // logging data here
  
  // Function to select a random question
  const getQuestion = () => {
    if (!loading && data) {
      const questionList = data.questions;
      const randomIndex = Math.floor(Math.random() * questionList.length);
      setCurrentQuestion(questionList[randomIndex].text);
    }
    else {
      console.log('No question available');
    }
  };

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
    <div className='card'>
      Questions
      <p>{currentQuestion}</p>
    </div>
    <QButton onClick={getQuestion} />
  </div>
  );
};

export default Questions;
