import React from 'react'

function Searches(props: any) {
  const { list } = props
  const listItems = list.map((item: string) => <li key={item}>{item}</li>)

  if (list.length) {
    return (
      <div className="list">
        <span>Past searches</span>
        <ul>{listItems}</ul>
      </div>
    )
  }
  return null
}

export default Searches
