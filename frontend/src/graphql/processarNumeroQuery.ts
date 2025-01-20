import { gql } from '@apollo/client'

export const PROCESSAR_NUMERO_QUERY = gql`
  query processarNumero($limiteContagem: Int!) {
    processarNumero(limiteContagem: $limiteContagem) {
      numeroPrimos
      tempoDeCalculo
      dataDoCalculo
    }
  }
`
