const cron = require('node-cron');
const { selectRandomQuestion, updateDatabase } = require('./questionService'); // Implement these functions


// Schedule the task to run at midnight PST
cron.schedule('0 0 * * *', async () => {
    try {
      // Select a random question from the pool of questions
      const selectedQuestion = await selectRandomQuestion();
  
      // Update your database with the selected question
      await updateDatabase(selectedQuestion);
  
      console.log('Question of the Day updated:', selectedQuestion);
    } catch (error) {
      console.error('Error updating Question of the Day:', error);
    }
  });
  