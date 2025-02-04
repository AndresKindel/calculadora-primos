/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Cell, Grid, HFlow, TextField, VFlow } from 'bold-ui'
import React, { useState } from 'react'
import { formatDateAndHoursMinutes, isNumber } from './utils/utils'
import { useProcessarNumeroLazyQuery } from './gql/generated'

function InputForm() {
  const [formState, setFormState] = useState('')
  const [processarNumero] = useProcessarNumeroLazyQuery()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (isNumber(value)) {
      setFormState(value)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await processarNumero({
        variables: { limiteContagem: parseInt(formState, 10) },
      })

      if (data && data.processarNumero) {
        alert(`
          Número de primos: ${data.processarNumero.numeroPrimos}
          Tempo de cálculo: ${data.processarNumero.tempoDeCalculo}ns
          Data do cálculo: ${formatDateAndHoursMinutes(data.processarNumero.dataDoCalculo)}
        `)
      } else {
        console.error('Erro: Dados retornados são inválidos.')
      }
    } catch (error) {
      console.error('Erro ao processar o número: ', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid style={formStyles}>
        <VFlow>
          <Cell xs={12}>
            <TextField
              name="input"
              label="Insira um número inteiro entre 1 e X"
              clearable={false}
              value={formState}
              onChange={handleInputChange}
              required
            />
          </Cell>
          <Cell xs={12}>
            <HFlow justifyContent="center">
              <Button type="submit" kind="primary">
                Calcular
              </Button>
            </HFlow>
          </Cell>
        </VFlow>
      </Grid>
    </form>
  )
}

export default InputForm

const formStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
