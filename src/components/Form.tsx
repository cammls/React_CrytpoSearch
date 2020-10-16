import React, { useState } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import DataViz from './DataViz'
import Searches from './Searches'

function Form(): JSX.Element {
  const [crypto, setCrypto] = useState('')
  const stringList: string[] = []
  const [searches, setSearches] = useState(stringList) // is there another way ?
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [prices, setPrices] = useState([])
  const [data, setData] = useState({
    name: '',
    symbol: '',
    market_cap_rank: 0,
    image: { small: '' },
    market_data: {
      current_price: { usd: 0 },
      market_cap_change_percentage_24h: 0,
    },
  })

  function Content() {
    const { image, name, symbol, market_cap_rank, market_data } = data
    if (status === 'success') {
      return (
        <DataViz
          logo={image.small}
          name={name}
          symbol={symbol}
          market_cap_rank={market_cap_rank}
          price={market_data.current_price.usd}
          evolution={market_data.market_cap_change_percentage_24h}
          prices={prices}
        />
      )
    } else if (status === 'error') {
      return <div>Sorry! This cryptocurrency does not exist!</div>
    }
    return <div></div> // is there a better way? Removing JSX.Element?
  }

  const handleSubmit = async (evt: any) => {
    const cryptoSearch = crypto.toLowerCase()
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/'
    const chartUrl = '/market_chart?vs_currency=usd&days=7'
    evt.preventDefault()
    setIsLoading(true)

    try {
      const { data } = await axios(apiUrl + cryptoSearch)
      const {
        data: { prices },
      } = await axios(apiUrl + cryptoSearch + chartUrl)
      setData(data)
      setPrices(prices)
      setSearches((searches) => [...searches, cryptoSearch])
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
    setCrypto('')
    setIsLoading(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search a cryptocurrency <br />
          <input
            required
            placeholder="ex: bitcoin"
            type="text"
            value={crypto}
            onChange={(e) => setCrypto(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className="flex">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        ) : (
          <Content />
        )}
        <Searches list={searches} />
      </div>
    </div>
  )
}

export default Form
