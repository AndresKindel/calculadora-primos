/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Instant type */
  Instant: { input: any; output: any; }
  /** Long type */
  Long: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  processarNumero?: Maybe<ResultadoContagem>;
};


export type QueryProcessarNumeroArgs = {
  limiteContagem: Scalars['Int']['input'];
};

export type ResultadoContagem = {
  __typename?: 'ResultadoContagem';
  dataDoCalculo: Scalars['Instant']['output'];
  numeroPrimos: Scalars['Long']['output'];
  tempoDeCalculo: Scalars['Int']['output'];
};

export type ProcessarNumeroQueryVariables = Exact<{
  limiteContagem: Scalars['Int']['input'];
}>;


export type ProcessarNumeroQuery = { __typename?: 'Query', processarNumero?: { __typename?: 'ResultadoContagem', numeroPrimos: any, tempoDeCalculo: number, dataDoCalculo: any } | null };


export const ProcessarNumeroDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"processarNumero"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limiteContagem"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processarNumero"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limiteContagem"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limiteContagem"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"numeroPrimos"}},{"kind":"Field","name":{"kind":"Name","value":"tempoDeCalculo"}},{"kind":"Field","name":{"kind":"Name","value":"dataDoCalculo"}}]}}]}}]} as unknown as DocumentNode<ProcessarNumeroQuery, ProcessarNumeroQueryVariables>;