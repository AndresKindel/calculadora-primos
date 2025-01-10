import { gql } from '@apollo/client'

export const PROCESS_NUMBER_MUTATION = gql`
  mutation processNumber($input: Input!) {
    processNumber(input: $input) {
      numeroPrimos
      tempoDeCalculo
      dataDoCalculo
    }
  }
`
