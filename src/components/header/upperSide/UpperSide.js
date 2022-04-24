import React from 'react'
import FirstSide from './firstSide'
import SecondSide from './secondSide'
import './upperSide.css'

const UpperSide = ({addresses, setAddresses, clickTarget}) => {
  return (
    <div className="app_header_upper_side">
        <FirstSide 
          addresses={addresses} 
          setAddresses={e => setAddresses(e)} 
          clickTarget={clickTarget} 
        />
        <SecondSide />
    </div>
  )
}

export {UpperSide}