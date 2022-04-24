import React,{ useState } from 'react'
import OptionsItem from '../optionItem/OptionsItem';

const CatalogOptionsList = ({catalogOptions}) => {
  const [currentItem,setCurrentItem] = useState(0)

  const list = catalogOptions.map((e,id) => <OptionsItem 
    key={id} 
    value={e} 
    currentItem={currentItem}
    id={id}
    lastChild={catalogOptions.length === id + 1}
    setCurrentItem={e => setCurrentItem(e)}
  />)

  return (
    <ul className='lower_side_options_list'>
      {list}
    </ul>
  )
}

export {CatalogOptionsList}