import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import BookList from './components/BookList'

import fantasyBooks from './data/books/fantasy.json'
import historyBooks from './data/books/history.json'
import horrorBooks from './data/books/horror.json'
import romanceBooks from './data/books/romance.json'
import scifiBooks from './data/books/scifi.json'

function App() {
  // Unisco tutti i libri in un unico array
  const allBooks = [
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks
  ]

  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        {/* ora uso BookList per mostrare tutti i libri */}
        <AllTheBooks />
        <BookList books={allBooks} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  )
}

export default App


