import React, {useState} from 'react'

import NavBar from './NavBar'
import Header from './Header'
import Books from './Books'
import About from './About'
import Footer from './Footer'

function App() {

  return (
    <div id="page-wrap">
      <NavBar />
      <Header 
        title="Welcome to React"
        todaysDate={new Date().toLocaleDateString()}
      />
      <Books />
      <About />
      <Footer/>
    </div>
  )
}

export default App
