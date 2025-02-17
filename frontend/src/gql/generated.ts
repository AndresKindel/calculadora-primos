import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Instant: { input: any; output: any; }
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


export const ProcessarNumeroDocument = gql`
    query processarNumero($limiteContagem: Int!) {
  processarNumero(limiteContagem: $limiteContagem) {
    numeroPrimos
    tempoDeCalculo
    dataDoCalculo
  }
}
    `;

/**
 * __useProcessarNumeroQuery__
 *
 * To run a query within a React component, call `useProcessarNumeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcessarNumeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcessarNumeroQuery({
 *   variables: {
 *      limiteContagem: // value for 'limiteContagem'
 *   },
 * });
 */
export function useProcessarNumeroQuery(baseOptions: Apollo.QueryHookOptions<ProcessarNumeroQuery, ProcessarNumeroQueryVariables> & ({ variables: ProcessarNumeroQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProcessarNumeroQuery, ProcessarNumeroQueryVariables>(ProcessarNumeroDocument, options);
      }
export function useProcessarNumeroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProcessarNumeroQuery, ProcessarNumeroQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProcessarNumeroQuery, ProcessarNumeroQueryVariables>(ProcessarNumeroDocument, options);
        }
export function useProcessarNumeroSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProcessarNumeroQuery, ProcessarNumeroQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProcessarNumeroQuery, ProcessarNumeroQueryVariables>(ProcessarNumeroDocument, options);
        }
export type ProcessarNumeroQueryHookResult = ReturnType<typeof useProcessarNumeroQuery>;
export type ProcessarNumeroLazyQueryHookResult = ReturnType<typeof useProcessarNumeroLazyQuery>;
export type ProcessarNumeroSuspenseQueryHookResult = ReturnType<typeof useProcessarNumeroSuspenseQuery>;
export type ProcessarNumeroQueryResult = Apollo.QueryResult<ProcessarNumeroQuery, ProcessarNumeroQueryVariables>;