import { gql } from "@apollo/client";

export const GET_IDEAS = gql`
  {
    ideas {
      id
      title
      description
    }
  }
`;

export const IDEA = gql`
  query Idea($id: String) {
    idea(id: $id) {
      title
      description
    }
  }
`;

export const ADD_IDEA = gql`
  mutation AddIdea($title: String, $description: String) {
    addIdea(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

export const DELETE_IDEA = gql`
  mutation DeleteIdea($id: String) {
    deleteIdea(id: $id) {
      id
      title
      description
    }
  }
`;

export const EDIT_IDEA = gql`
  mutation EditIdea($id: String, $title: String, $description: String) {
    editIdea(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
