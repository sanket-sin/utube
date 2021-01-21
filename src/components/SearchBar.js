import React from 'react';

class SearchBar extends React.Component {
    state = {
        SearchTerm: '',
    }
    render(){
        return(
            <h1>This is a SearchBar Component</h1>
        )
    }
}

export default SearchBar;