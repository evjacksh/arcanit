import React from 'react'
import CatalogOptionsList from "./catalogOptionsList";
import './lowerSide.css'

const LowerSide = ({catalogOptions}) => {
  return (
    <div className="app_header_lower_side">
        <CatalogOptionsList catalogOptions={catalogOptions} />
    </div>
  )
}

export {LowerSide}