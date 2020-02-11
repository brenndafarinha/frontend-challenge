import React, { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Main from './Pages/Main'


export default function App() {

  const [searchInput, setSearchInpu] = useState('')
  console.log('search input here', searchInput)

  return (
    <div className="App">
      <NavBar setSarchInput={setSearchInpu} />
      <Main />
      <Footer />
    </div>
  )
}


