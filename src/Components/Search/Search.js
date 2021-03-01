import React from 'react';
import './Search.css'

const Search = (props) => {
    return (
        <div>
            <input className='search' 
                type='search' 
                placeholder={props.placeholder} 
                onChange={props.handleChange} />
        </div>
    )
}

export default Search;