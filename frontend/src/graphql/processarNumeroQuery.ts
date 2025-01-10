import { gql } from '@apollo/client'

export const PROCESSAR_NUMERO_QUERY = gql`
  query processarNumero($input: LimiteContagem!) {
    processarNumero(input: $input) {
      numeroPrimos
      tempoDeCalculo
      dataDoCalculo
    }
  }
`
