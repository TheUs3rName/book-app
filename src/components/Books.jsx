import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";

import styles from "./Books.module.css";
import SideCard from "./SideCard";
import Search from "./Search";

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(bookData);

  const handleLiked = (book, status) => {
    if (status) {
      const newLiked = liked.filter((item) => item.id !== book.id);
      setLiked(newLiked);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    const searchQuery = search.toLowerCase().trim();
    if (searchQuery.length) {
      const searchResult = books.filter((book) =>
        book.title.toLowerCase().trim().includes(searchQuery)
      );
      setBooks(searchResult);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.length ? (books.map((book) => (
            <BookCard key={book.id} data={book} handleLiked={handleLiked} />
          ))) : (<div><p>Book Doesn't found.</p></div>)}
        </div>

        <div>
          {!!liked.length && (
            <div className={styles.favorite}>
              <h4>Favorites</h4>
              {liked.map((item) => (
                <SideCard key={item.id} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
