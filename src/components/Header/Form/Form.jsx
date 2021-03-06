import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UnsplashService } from '../../../api/splash/provider';
import useDebounce from '../../../hooks/useDebounce';
import {
  openSearchPage,
  setSavedInput,
  setSearchValue,
} from '../../../store/actions/search/search.actions';
import {
  savedInputSelector,
  searchPageSelector,
} from '../../../store/selectors/search.selector';
import { windowWidthSelector } from '../../../store/selectors/window.selector';

import AutoComplete from './AutoComplete/AutoComplete';
import SearchTrends from './SearchTrends/SearchTrends';

const Form = () => {
  const [isFocusActive, setIsFocusActive] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [autoCompleteValue, setAutoCompleteValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();
  const isSearchPageOpen = useSelector(searchPageSelector);
  const savedInputValue = useSelector(savedInputSelector);

  const debouncedInputValue = useDebounce(inputValue, 1000);
  const navigate = useNavigate();
  const screenWidth = useSelector(windowWidthSelector);

  useEffect(() => {
    if (debouncedInputValue) {
      UnsplashService.searchAutoComplete(debouncedInputValue)
        .then((value) => {
          setAutoCompleteValue(value);
        })
        .catch((error) => {
          console.log(error, 'Limit of requests is over (100/day)');
        });
    }
  }, [debouncedInputValue]);

  return (
    <form className="search">
      <div className="input">
        <button
          className="search__btn"
          type="button"
          onClick={() => {
            dispatch(setSavedInput(inputValue));
            dispatch(setSearchValue(inputValue));
            if (!isSearchPageOpen) {
              dispatch(openSearchPage());
            }
            dispatch(openSearchPage());
            dispatch(openSearchPage());
          }}
        >
          <Link to="/unsplashClone/searchResult">
            <svg
              width="32"
              height="32"
              className="DFW_E nT46U VETef"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path
                d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4
            8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8
            1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3
            7.3-7.3 7.3z"
              />
            </svg>
          </Link>
        </button>

        <input
          className="search__input "
          placeholder={
            screenWidth > 990
              ? 'Search free high-resolution photos'
              : 'Search photos'
          }
          onFocus={() => {
            if (isInputActive) {
              return;
            }
            setIsFocusActive(true);
          }}
          onBlur={() => {
            setIsFocusActive(false);
            setIsInputActive(false);
          }}
          onInput={(e) => {
            setIsFocusActive(false);
            setIsInputActive(true);
            setInputValue(e.target.value);

            // if (isSearchPageOpen) {
            //   setInputValue(e.target.value);
            //   dispatch(setSavedInput(inputValue));
            // }
          }}
          value={
            isSearchPageOpen && !isInputActive ? savedInputValue : inputValue
          }
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !isSearchPageOpen) {
              dispatch(openSearchPage());
              dispatch(setSavedInput(inputValue));
              dispatch(setSearchValue(inputValue));
              setIsFocusActive(false);
              setIsInputActive(false);
              navigate('/unsplashClone/searchResult');
            }
            if (e.keyCode === 13 && isSearchPageOpen) {
              e.preventDefault();
              dispatch(setSavedInput(inputValue));
              dispatch(setSearchValue(inputValue));
              setIsFocusActive(false);
              setIsInputActive(false);
            }

            // if (isSearchPageOpen) {
            //   dispatch(setSavedInput(inputValue));
            // }
          }}
        />

        <AutoComplete
          autoCompleteValue={autoCompleteValue}
          isInputActive={isInputActive}
          setInputValue={setInputValue}
        />

        <SearchTrends isFocusActive={isFocusActive} />
        <div className={isFocusActive || inputValue ? 'inputClear' : 'hidden'}>
          <button
            type="button"
            className="inputClear__btn"
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            onClick={() => {
              setInputValue('');
              dispatch(setSavedInput(''));
            }}
          >
            <svg
              width="32"
              height="32"
              className="FsJPV"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z" />
            </svg>
          </button>
          <div className="v-line" />
        </div>

        <button className="photo__btn" type="button">
          <svg
            width="32"
            height="32"
            className="VdNCI nT46U VETef"
            viewBox="0 0 32 32"
            version="1.1"
            aria-hidden="false"
          >
            <path
              d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2
            4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4
            25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0
            2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6
            0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;
