/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Cell, Grid, HFlow, TextField, VFlow } from 'bold-ui'
import React, { useState } from 'react'

function InputForm() {
  const [formState, setFormState] = useState({
    input: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d*$/.test(value)) {
      setFormState({ input: value })
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Enviado: ' + formState.input)
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
              value={formState.input}
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
