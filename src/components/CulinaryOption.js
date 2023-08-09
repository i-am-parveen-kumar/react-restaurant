import React from 'react'

const CulinaryOption = ({ isVeg }) => {
  const symbol = isVeg ? '🍅' : '🍗'

  return <span>{symbol}</span>
}

export default CulinaryOption
