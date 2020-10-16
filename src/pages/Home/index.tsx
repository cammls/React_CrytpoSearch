import React from 'react'
import Form from '../../components/Form'

function Home(): JSX.Element {
  return (
    <div className="container">
      <h1>Hello from Cam!</h1>
      <Form />
      <p>Powered by CoinGecko API</p>
    </div>
  )
}

export default Home
