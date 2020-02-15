import React from 'react'

import './App.css'
import 'antd/dist/antd.css'

import Routes from './routes'
import Footer from './components/footer'

export default function App() {
  return (
    <div className="App">
      <Routes />
      <Footer />
    </div>
  )
}
