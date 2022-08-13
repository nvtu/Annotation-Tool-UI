import { useState, useRef } from 'react'
import { AutoComplete, Input } from 'antd';


function FilterBar(props) {
    const searchRef = useRef(null);
    const [query, setQuery] = useState('');

    
    const onSearch = (searchText) => {
        // Do Search
    }
    
    
    const onSearchButtonClick = () => {
        searchRef.current.blur() // Prevent Autofocus
        onSearch(query)
    }

    const onChange = (data) => {
        setQuery(data)
    }


    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            value={props.query}
            style={props.style}
            onSearch={onSearch}
            onChange={onChange}
            ref={searchRef}
        >
            <Input.Search size="large" placeholder="Filter" enterButton
                onSearch = {onSearchButtonClick}
            />
        </AutoComplete>
    )
}


export default FilterBar;