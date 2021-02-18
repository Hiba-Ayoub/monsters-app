import React from 'react';
import  './search-box.style.css';

function Search({handleChang,placeholder}) {
    return (
        <div>
        <input className="search" type="search" onChange={handleChang} placeholder={placeholder} />
            
        </div>
    )  
}

export default Search
