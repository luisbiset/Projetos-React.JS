import React from 'react'
import axios from 'axios'
import style from './SearchList.module.css'

const SearchList = (props) => {
  return (
    <>
      <input
        className={style.searchList}
        type='search'
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    </>
  )
}

export default SearchList
