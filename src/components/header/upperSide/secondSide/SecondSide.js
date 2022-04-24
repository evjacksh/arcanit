import React, {useState} from 'react'

const SecondSide = () => {

  const [search,setSearch] = useState('')
  
  return (
    <div className="app_header_upper_side_second_group">
        <div className="header_upper_side_search">
            <label className="search_icon" htmlFor='search_input'></label>
            <input
            type={'text'}
            className="search_input"
            id='search_input'
            placeholder='Поиск' 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            />
        </div>
        <div className="header_upper_side_login">
            <label className="login_icon" htmlFor='login_input'></label>
            <input 
            className="login_input"
            id='login_input'
            type={'button'}
            value='Войти'
            />
        </div>
        <div className="header_upper_side_cart">
            <input type="button" className="cart_icon"></input>
        </div>
    </div>
  )
}

export {SecondSide}