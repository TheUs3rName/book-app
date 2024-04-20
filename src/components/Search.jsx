import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./Search.module.css";

function Search({ search, setSearch, searchHandler }) {
  const changeHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className={styles.search}>
      <input
        name="search"
        type="text"
        placeholder="Search title"
        value={search}
        onChange={changeHandler}
      />
      <button onClick={searchHandler}>
        <AiOutlineSearch />
      </button>
    </div>
  );
}

export default Search;
