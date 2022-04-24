import React from 'react'
import UpperSide from "./upperSide"
import LowerSide from './lowerSide'
import './header.css'

const Header = ({catalogOptions, addresses, setAddresses,clickTarget}) => {
  return (
    <header className='app_header'>
        <UpperSide 
          addresses={addresses} 
          setAddresses={e => setAddresses(e)} 
          clickTarget={clickTarget} 
        />
        <LowerSide catalogOptions={catalogOptions} />
  </header>
  )
}

export {Header}