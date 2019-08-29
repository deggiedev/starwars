import React from 'react'

const SearchBar = (props) => {
    return(
        <div>       
            <input type ="text" id="txtComputer" placeholder="Search Planets..." className={'SearchBar'} onChange={(event) => props.handleSearch(event)}></input><br></br>
            
        </div>
      );
}

export default SearchBar