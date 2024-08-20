import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'

function App() {
  return (
    <>
    <header>
      <MyNav />
      </header>
      <main>
      <Welcome />
      <AllTheBooks />
      </main>
      <footer>
      <MyFooter />
      </footer>
    </>
  )
}

export default App

