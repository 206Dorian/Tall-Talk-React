import React, { useState, useEffect } from 'react';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the database or external data source
    // Update the questions state with the retrieved data
    const fetchQuestions = async () => {
      try {
        // Perform the data fetching and set the questions state
        const data = await fetchQuestionsFromDatabase();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const generateRandomQuestion = () => {
    if (questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex]);
    }
  };

  return (
    <div>
      <h3>{currentQuestion}</h3>
      <button onClick={generateRandomQuestion}>Next Question</button>
    </div>
  );
}

export default Questions;
