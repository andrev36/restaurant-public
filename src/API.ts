/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookTableInput = {
  id?: string | null,
  name: string,
  email: string,
  date: string,
  time: string,
  message?: string | null,
  numberOfGuests: string,
};

export type ModelBookTableConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  message?: ModelStringInput | null,
  numberOfGuests?: ModelStringInput | null,
  and?: Array< ModelBookTableConditionInput | null > | null,
  or?: Array< ModelBookTableConditionInput | null > | null,
  not?: ModelBookTableConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateBookTableInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  date?: string | null,
  time?: string | null,
  message?: string | null,
  numberOfGuests?: string | null,
};

export type DeleteBookTableInput = {
  id?: string | null,
};

export type ModelBookTableFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  message?: ModelStringInput | null,
  numberOfGuests?: ModelStringInput | null,
  and?: Array< ModelBookTableFilterInput | null > | null,
  or?: Array< ModelBookTableFilterInput | null > | null,
  not?: ModelBookTableFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateBookTableMutationVariables = {
  input: CreateBookTableInput,
  condition?: ModelBookTableConditionInput | null,
};

export type CreateBookTableMutation = {
  createBookTable:  {
    __typename: "BookTable",
    id: string,
    name: string,
    email: string,
    date: string,
    time: string,
    message: string | null,
    numberOfGuests: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookTableMutationVariables = {
  input: UpdateBookTableInput,
  condition?: ModelBookTableConditionInput | null,
};

export type UpdateBookTableMutation = {
  updateBookTable:  {
    __typename: "BookTable",
    id: string,
    name: string,
    email: string,
    date: string,
    time: string,
    message: string | null,
    numberOfGuests: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookTableMutationVariables = {
  input: DeleteBookTableInput,
  condition?: ModelBookTableConditionInput | null,
};

export type DeleteBookTableMutation = {
  deleteBookTable:  {
    __typename: "BookTable",
    id: string,
    name: string,
    email: string,
    date: string,
    time: string,
    message: string | null,
    numberOfGuests: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookTableQueryVariables = {
  id: string,
};

export type GetBookTableQuery = {
  getBookTable:  {
    __typename: "BookTable",
    id: string,
    name: string,
    email: string,
    date: string,
    time: string,
    message: string | null,
    numberOfGuests: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookTablesQueryVariables = {
  filter?: ModelBookTableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookTablesQuery = {
  listBookTables:  {
    __typename: "ModelBookTableConnection",
    items:  Array< {
      __typename: "BookTable",
      id: string,
      name: string,
      email: string,
      date: string,
      time: string,
      message: string | null,
      numberOfGuests: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBookTableSubscription = {
  onCreateBookTable:  {
    __typename: "BookTable",
    id: string,
    name: string,
    email: string,
    date: string,
    time: string,
    message: string | null,
    numberOfGuests: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookTableSubscription = {
  onUpdateBookTable:  {
    __typename: "BookTable",
    id: string,
    name: string,
    email: string,
    date: string,
    time: string,
    message: string | null,
    numberOfGuests: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookTableSubscription = {
  onDeleteBookTable:  {
    __typename: "BookTable",
    id: string,
    name: string,
    email: string,
    date: string,
    time: string,
    message: string | null,
    numberOfGuests: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
