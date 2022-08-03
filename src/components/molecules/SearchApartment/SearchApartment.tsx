import React, { FormEvent, useContext, useState } from 'react';
import AppContext from 'AppProvider';

export const SearchApartment: React.FunctionComponent = (): JSX.Element => {
    const {search, setSearch} = useContext(AppContext);
    const [inputVal, setInputVal] = useState<string>(search);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSearch(inputVal);
        setInputVal("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <button>Search</button>
        </form>
    )
}