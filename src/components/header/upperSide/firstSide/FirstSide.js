import React, {useState,useRef, useEffect} from 'react'

const FirstSide = ({addresses,setAddresses,clickTarget}) => {

  const [geoSearch,setGeoSearch] = useState(addresses[0])
  const [appearGeoList, setAppearGeoList] = useState(false)
  const geoBlockRef = useRef(null)

const clickTargetEffect = useEffect(() => {
  onSearchClickTarget(clickTarget)
}, [clickTarget])


  const geoSearchList = addresses.map((geoItem,ind) => <li 
    key={ind} 
    id={ind}
    onClick={e => {
      setGeoSearch(geoItem)
      onGeoInputChange(geoItem)
    }}
  >
    <span className="geo_item_icon"></span>
    {geoItem}
  </li>)

  const onGeoInputChange = (geoSearch) => {
    if(geoSearch !== ''){
      const index = addresses.indexOf(geoSearch)
      const uniqueItems = new Set([...addresses,geoSearch])

      if(uniqueItems.size !== 3){
        addresses.pop()
        addresses.unshift(geoSearch)
        setAddresses([...addresses])
      } else {
        const item = addresses.splice(index,1)
        addresses.unshift(...item)
        setAddresses([...addresses])
      }
    }
  }

  const onSearchClickTarget = (target) => {
    const checkFunc = Target => Array.from(geoBlockRef.current.children).some(e => e === Target)

    const isGeoBlockChild = checkFunc(target)
    const isGeoBlockListChild = checkFunc(target?.parentNode)

    if(isGeoBlockChild){
      setAppearGeoList(true)
    }else if(isGeoBlockListChild){
      setAppearGeoList(false)
    } else{
      setAppearGeoList(false)
    }
  }

  const geoListClass = appearGeoList ? "geo_search_options_list active" : "geo_search_options_list"
  const geoSearchBlock = appearGeoList ? "header_upper_side_geo_search focus" : "header_upper_side_geo_search"
  const geoSearchInputBorderClass = appearGeoList ? 'geo_search_input_border focus' : 'geo_search_input_border'

  return (
    <div className="app_header_upper_side_first_group">
        <div className="header_upper_side_logo"></div>
        <div className={geoSearchBlock}
          ref={geoBlockRef}
          onBlur={e => clickTargetEffect}
        >
          <label className="geo_search_icon" htmlFor='geo_search_input'></label>
          <input 
              className="geo_search_input"
              id='geo_search_input'
              placeholder='Введите адрес доставки'
              type={'text'} 
              value={geoSearch} 
              onChange={e => setGeoSearch(e.target.value)}
              onFocus={e => setAppearGeoList(true)}
              onBlur={e => onGeoInputChange(e.target.value)}
          />
          <span className={geoSearchInputBorderClass} onClick={e => setGeoSearch('')}></span>
          <ul className={geoListClass}>
            {geoSearchList}
          </ul>
      </div>
    </div>
  )
}

export {FirstSide}