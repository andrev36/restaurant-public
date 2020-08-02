/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookTable = /* GraphQL */ `
  mutation CreateBookTable(
    $input: CreateBookTableInput!
    $condition: ModelBookTableConditionInput
  ) {
    createBookTable(input: $input, condition: $condition) {
      id
      name
      email
      date
      time
      message
      numberOfGuests
      createdAt
      updatedAt
    }
  }
`;
export const updateBookTable = /* GraphQL */ `
  mutation UpdateBookTable(
    $input: UpdateBookTableInput!
    $condition: ModelBookTableConditionInput
  ) {
    updateBookTable(input: $input, condition: $condition) {
      id
      name
      email
      date
      time
      message
      numberOfGuests
      createdAt
      updatedAt
    }
  }
`;
export const deleteBookTable = /* GraphQL */ `
  mutation DeleteBookTable(
    $input: DeleteBookTableInput!
    $condition: ModelBookTableConditionInput
  ) {
    deleteBookTable(input: $input, condition: $condition) {
      id
      name
      email
      date
      time
      message
      numberOfGuests
      createdAt
      updatedAt
    }
  }
`;
