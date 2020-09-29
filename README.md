## Intro

Welcome to the Cozero coding challenge!

Our idea is to offer you a fun and practical challenge so that we can later we can use it as a conversation starter and go over your thought process.

In this repo you find the boilerplate for a Create React App + Typescript project to help you get started.

## Challenge

Use the public API of [CoinMarketCap](https://coinmarketcap.com/api/documentation/v1) to display a table with the latest top 100 cryptocurrencies. You can use the Listings Latest GET call `/v1/cryptocurrency/listings/latest`.

### Acceptance criteria:

- Order them from descending market cap rank
- Only show the cryptocurrencies that were added to the system on a work week day (Monday to Friday)
- In the cryptocurrency row, display the marketcap rank, name, USD price, symbol, 24h percentual price change and other fields you find important
- Add style to the cryptocurrency row that highlights if it had a growth or a decline in its price in the past 24h
- Paginate the results and allow the user to change page for each 20 results
- On clicking a row, show a line graph with the selected cryptocurrency USD price fluctuation in the past year. You can find an example [here](https://coinmarketcap.com/currencies/ethereum/)

## Note

- Use TypeScript and React
- Use React Hooks instead of Redux
- Prettier / Eslint should show no errors
- Please take no longer than 6-8 hours to solve the task
- You can use any npm package to help you
- You can use our CoinMarketCap Token `95b3c5a2-51e3-429f-9e95-47184ef2522a` or create your own
- Beautiful design is not important for this task so you don't need to worry about things looking great
- You do not need to implement auth

## How to submit

1. Clone this repo locally
2. Make your changes that solve the task
3. Zip compress your project with the solution and send it via email to your recruiting manager. You will be contacted to setup a follow-up call
