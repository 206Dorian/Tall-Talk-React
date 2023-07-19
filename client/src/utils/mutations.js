import { gql } from '@apollo/client';

export const CREATE_QUESTION = gql`
  mutation CreateQuestion($text: String!) {
    createQuestion(text: $text) {
      id
      text
    }
  }
`;

const ADD_QUESTIONS = gql`
  mutation CreateBulkQuestions($questions: [QuestionInput!]!) {
    createBulkQuestions(questions: $questions) {
      id
      text
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation UpdateQuestion($updateQuestionId: ID!, $text: String!) {
    updateQuestion(id: $updateQuestionId, text: $text) {
    id
    text
  }
}
`;

export const DELETE_QUESTION = gql`
  mutation DeleteQuestion($deleteQuestionId: ID!) {
    deleteQuestion(id: $deleteQuestionId)
}
`;