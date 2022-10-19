import { useState } from 'react'
import '../../assets/styles/css/particles/search.css'

function Search(props) {

  function onChangeEvent(event) {
    const text = event.target.value
    props.onChangeHandler(text)
  }

  function clearSearch() {
    props.onClickHandler('')
  }

  return <div className='page-search'>
    <input
      value={props.query}
      onChange={onChangeEvent}
      placeholder={props.placeholder} 
      type='text' />
    
    <div className='clear'>
      <span 
        onClick={clearSearch}
        className={props.query ? 'active' : ''}>
        &times;
      </span>
    </div>
    {/* <button onClick={onClickEvent}>Find</button> */}
  </div>
}

export default Search
