import { useState, useRef, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';

import searchIcon from './search.svg';
import classes from './Search.module.css';

const Search = () => {
    const [searchFocused, setSearchFocused] = useState(false);
    const [enteredSearchKeyword, setEnteredSearchKeyword] = useState('');
    const inputRef = useRef(null);
    let navigate = useNavigate();

    useEffect(() => {
        if (searchFocused) {
            inputRef.current.focus();
        }
    }, [searchFocused]);

    const keyPressHandler = (event) => {
        if (event.key === 'Enter') {
            searchHandler();
        }
    };

    const searchHandler = () => {
        setSearchFocused(true);

        if (enteredSearchKeyword) {
            navigate(`./search/${enteredSearchKeyword}`);
            closeSearchInput();
            setEnteredSearchKeyword('');
        }
    };

    const closeSearchInput = () => {
        setSearchFocused(false);
    };

    const enteredKeywordHandler = (event) => {
        setEnteredSearchKeyword(event.target.value);
    };

    return (
        <div className={classes.search}>
            <input 
                type='image'
                src={searchIcon}
                className={classes.button} 
                alt='search'
                onClick={searchHandler}
            />
            {searchFocused &&
                <input 
                    ref={inputRef} 
                    className={classes.input} 
                    placeholder='Search...' 
                    onChange={enteredKeywordHandler} 
                    onKeyUp={keyPressHandler}
                    onBlur={closeSearchInput} 
                />
            }
        </div>
    );
}

export default Search;