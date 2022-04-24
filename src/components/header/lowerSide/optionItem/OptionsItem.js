import React from 'react'

const OptionsItem = ({value,currentItem, setCurrentItem, id,lastChild}) => {

    const clazz = currentItem === id ? 'options_list_item current' : 'options_list_item'

    return (
        <li className={clazz} onClick={e => !lastChild ? setCurrentItem(id) : null}>
            {value}
            {
                lastChild ? 
                <>
                    <span className='options_list_last_child_first_span'></span>
                    <span className='options_list_last_child_second_span'></span>
                </>
                : null
            }
        </li>
    )
}

export default OptionsItem