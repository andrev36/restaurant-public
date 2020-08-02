/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookTable = /* GraphQL */ `
  query GetBookTable($id: ID!) {
    getBookTable(id: $id) {
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
export const listBookTables = /* GraphQL */ `
  query ListBookTables(
    $filter: ModelBookTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
