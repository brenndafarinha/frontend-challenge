import React from 'react'

import './App.css'
import 'antd/dist/antd.css'

import Routes from './routes'
import Footer from './components/footer'
import NavBar from './components/navbar'

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes />
      <Footer />
    </div>
  )
}
