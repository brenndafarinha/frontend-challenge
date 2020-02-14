import React, { useState, useEffect } from 'react'
import { useLazyQuery, useApolloClient } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import './App.css'
import 'antd/dist/antd.css'

import NavBar from './components/navbar'
import Footer from './components/footer'
import Main from './Pages/Main'


const customerQuery = gql`
  query Customers($page: Int, $size: Int, $category: String){
    customers: getCustomers(page:$page, size:$size, category: $category) {
      totalPages
      customers{
        name {
          fullname,
        }
        picture{
          large
        }
        location {
          fullAddress,
          state,
          city,
          postcode,
          state,
          street,
          coordinates {
            latitude
            longitude
          }
        }
      }
    }
  }
  
`

function App() {

  const client = useApolloClient()

  const [searchInput, setSearchInput] = useState('')
  const [categoryFilter, setCategoryFilter] = useState("trabalhoso")
  const [customers, setCustomers] = useState([])

  const [getCustomers, {
    loading,
    error
  }] = useLazyQuery(customerQuery, {
    client,
    onCompleted: data => setCustomers(data.customers.customers) 
  })


  useEffect(() => {
    getCustomers({ variables: {page: 1, size: 9, category: "trabalhoso"}})
  }, [])

  // useEffect(() => {
  //   getCustomersQuery(1, 9, categoryFilter)
  // }, [categoryFilter])

  return (
    <div className="App">
      <NavBar setSarchInput={setSearchInput} />
      <Main
        customers={customers}
        loading={loading}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <Footer />
    </div>
  )
}


export default App