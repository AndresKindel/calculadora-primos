/** @jsxImportSource @emotion/react */
import { useMutation } from '@apollo/client'
import { css } from '@emotion/react'
import { Button, Cell, Grid, HFlow, TextField, VFlow } from 'bold-ui'
import React, { useState } from 'react'
import { PROCESS_NUMBER_MUTATION } from './graphql/processNumberMutation'

function InputForm() {
  const [formState, setFormState] = useState('')
  const [processNumber] = useMutation(PROCESS_NUMBER_MUTATION)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (isNumber(value)) {
      setFormState(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data } = await processNumber({
        variables: { input: { number: parseInt(formState, 10) } },
      })
      alert(`
        Número de primos: ${data.processNumber.numeroPrimos}
        Tempo de cálculo: ${data.processNumber.tempoDeCalculo}ns
        Data do cálculo: ${data.processNumber.dataDoCalculo}
      `)
    } catch (e) {
      console.error('Erro ao processar o número:', e)
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

function isNumber(value: string) {
  return /^\d+$/.test(value)
}

const formStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
