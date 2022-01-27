import React, { createContext, useState } from "react";

export const SearchParamContext = createContext();
export function SearchBar(props) {
    const [keyword, setKeyword] = useState('');

    function handleSearchChange(event) {
        setKeyword(event.target.value);
    }

    return (<div>
                <input type="search" value={keyword} onChange={handleSearchChange} placeholder="หาที่เที่ยวแล้วไปกัน..."></input>
                <SearchParamContext.Provider value={{keyword, setKeyword}}>
                    {props.children}
                </SearchParamContext.Provider>
            </div>
    )
}