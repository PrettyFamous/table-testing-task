import { useState } from 'react'
import { search } from '../../assets/img'

import './Search.scss'

const Search = ({setFilter}) => {
  const [value, setValue] = useState('')

  return (
    <header className='search'>
      <input 
        className='search__input' 
        placeholder='Поиск' 
        onChange={(e) => setValue(e.target.value)} 
        onSubmit={() => setFilter(value.trim())}
      />
      <img className='search__icon' src={search} onClick={() => setFilter(value.trim())}/>
    </header>
  )
}

export default Search