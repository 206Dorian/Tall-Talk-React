import { gql } from '@apollo/client';

export const CREATE_QUESTION = gql`
  mutation CreateQuestion($text: String!) {
    createQuestion(text: $text) {
      id
      text
    }
  }
`;
