import React from 'react'
import './finder.css'

const FormBar =()=>{
    return(
        <form className="search-form" id="search-form">
        <input type="text" name="searchQuery" autocomplete="off"
          placeholder="Search images..."
          className="input-form"
        />
        <button type="submit">&#x1F36D;</button>
        
      </form> 
    )
}
const FinderBar = () => {
  return (
    <div>
        <header>
            <FormBar></FormBar>
        </header>
    </div>
  )
}

export default FinderBar

