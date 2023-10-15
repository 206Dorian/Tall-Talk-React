const cron = require('node-cron');

// Function to select a random question from your pool
function selectRandomQuestion() {
  // Replace this with your logic to select a random question
  // For example, you might have an array of questions and pick one randomly.
  const questions = [
    'Question 1',
    'Question 2',
    'Question 3',
    // Add more questions to the array
  ];

  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to update your database with the selected question
function updateDatabase(question) {
  // Replace this with your logic to update your database with the question
  // This could involve sending a GraphQL mutation or using a database query.
  console.log('Updating database with question:', question);
}

// Schedule the task to run at midnight PST
cron.schedule('0 0 * * *', () => {
  try {
    // Select a random question from the pool
    const selectedQuestion = selectRandomQuestion();
  
    // Update your database with the selected question
    updateDatabase(selectedQuestion);
  
    console.log('Question of the Day updated:', selectedQuestion);
  } catch (error) {
    console.error('Error updating Question of the Day:', error);
  }
});
