const db = require('../config/connection'); // replace with your actual path to database connection file
const Question = require('../models/Questions'); // replace with your actual path to the Question model
const questionData = require('../seeds/questionData'); // replace with your actual path to seeds file

db.once('open', async () => {
    try {
        // delete existing questions
        await Question.deleteMany({});
        // add new questions
        console.log(questionData);
        await Question.insertMany(questionData);



        console.log('All done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
