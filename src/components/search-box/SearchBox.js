import React from 'react'
import './search-box.styles.css'

export default function SearchBox({handleChange}) {

  return (
    <input className="search"
    type="search" onChange={handleChange}/>
  )
}
