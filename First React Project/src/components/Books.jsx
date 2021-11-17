import axios from 'axios';
import React, { useEffect, useState } from 'react'
import filterBooks from '../mocks/books'

function Books() {
  const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials'];

  const [selectedBooks, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    async function fetchBooks() {
      const result = await axios.get('http://localhost:9000/books');
      return result;
    }
    fetchBooks().then((response) => setBooks(response.data));
  }, [])

  function setFilter(filter) {
    setSelectedCategory(filter)

    const filteredBooks = filterBooks.filter(function(book) {
      if(filter === 'All') return book.category;
      return book.category === filter;
    });
    setBooks(filteredBooks);
  }

  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-pills text-center">
              {filters.map((filter, index) => (
                <li
                  className={filter === selectedCategory ? 'active' : ''}
                  key={index}
                  onClick={() => setFilter(filter)}
                >
                  <a href="#0">{filter}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row book-list">
          {selectedBooks.map((book) => (
            <div className="col-xs-6 col-sm-3" key={book.id}>
              <div className="thumbnail">
                <img alt="" className="img-responsive" src={book.cover} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Books
