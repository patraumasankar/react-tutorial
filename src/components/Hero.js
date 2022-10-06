import React from 'react'

const Hero = ({heroName}) => {
    if (heroName === 'Joker') {
        throw new Error('Invalid hero name!')
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero