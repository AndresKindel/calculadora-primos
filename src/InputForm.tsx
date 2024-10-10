/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Cell, Grid, HFlow, TextField } from 'bold-ui'
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
    <div css={formStyles}>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Cell xs={6}>
            <TextField
              name="input"
              label="Insira um número inteiro entre 1 e X"
              value={formState.input}
              onChange={handleInputChange}
            />
          </Cell>
          <Cell xs={12}>
            <HFlow justifyContent="flex-end">
              <Button type="submit" kind="primary">
                Submit
              </Button>
            </HFlow>
          </Cell>
        </Grid>
      </form>
    </div>
  )
}

export default InputForm

const formStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
