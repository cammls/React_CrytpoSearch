import React from 'react'
import cx from 'classnames'
import { LineChart, Line, YAxis, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import moment from 'moment'

function DataViz(props: any): JSX.Element {
  const { logo, name, symbol, market_cap_rank, price, evolution, prices } = props

  const chartPrices = prices.map((price: [number, number]) => {
    const date = moment(price[0]).format('MMMM Do YYYY, hh:mm')
    return { date, price: price[1] }
  })

  const isPositive = Math.sign(evolution) >= 0

  const evolClass = cx({
    positive: isPositive,
    negative: !isPositive,
  })

  return (
    <div className="content">
      <img src={logo} alt="logo" />
      <h1>{name}</h1>
      <p>
        Symbol: <span>{symbol}</span>
      </p>
      <p>
        MarketCap Rank: <span>#{market_cap_rank}</span>
      </p>
      <p>
        Current price (USD): <span>{price}$</span>
      </p>
      <p>
        Price evolution 24H: <span className={evolClass}>{evolution}%</span>
      </p>

      <p>Price fluctuation in the last 7 days (in USD):</p>

      <ResponsiveContainer height={400} width="100%">
        <LineChart width={1000} height={400} data={chartPrices}>
          <YAxis dataKey="price" />
          <XAxis dataKey="date" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DataViz
