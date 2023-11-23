import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const Navigate = useNavigate();

    const handleSearch = () => {
        if (searchKeyword) {
            Navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className='mobile__menu'>
                <p>menu</p>
                <div>
                    <span></span>
                </div>
            </div>
            <div className="search__inner">
                <label htmlFor="searchInput">검색</label>
                <input type='search'
                    id='searchInput'
                    placeholder='검색어를 입력해주세요.'
                    autoComplete='off'
                    className='search__input'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Search