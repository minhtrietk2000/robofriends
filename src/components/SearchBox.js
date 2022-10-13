import React from 'react';

const SearchBox = ({searchField, onSearchChange}) => {
    return (
        <input className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={onSearchChange}
                />
    );
}

export default SearchBox;