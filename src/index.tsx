import React from 'react'
import ReactDOM from 'react-dom/client'
import InputForm from './InputForm'
import { Helmet } from 'react-helmet'

const Index = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i"
        rel="stylesheet"
      />
      <title>Calculadora de Primos</title>
      <style>{`
        body {
          font-family: 'IBM Plex Sans', sans-serif;
        }
      `}</style>
    </Helmet>
  </>
)

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)
root.render(
  <React.StrictMode>
    <Index />
    <InputForm />
  </React.StrictMode>
)
