import React, { useState, useEffect, Fragment } from 'react'
import { useLazyQuery, useApolloClient } from '@apollo/react-hooks'
import { Result } from 'antd'
import { gql } from 'apollo-boost'

import NavBar from '../../components/navbar'
import MainTemplate from './MainTemplate'

const customerQuery = gql`
  query Customers($page: Int, $size: Int, $category: String, $searchKey: String){
    customers: getCustomers(page:$page, size:$size, category: $category, searchKey: $searchKey) {
      totalPages
      totalCustomers
      customers{
        name {
          fullname,
        }
        picture{
          large
        }
        cell
        phone
        email
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

export default function Main() {

  const client = useApolloClient()

  const [searchInput, setSearchInput] = useState('')
  const [categoryFilter, setCategoryFilter] = useState("trabalhoso")
  const [customers, setCustomers] = useState([])
  const [totalCustomers, setTotalCustomers] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const [getCustomers, {
    loading,
    error
  }] = useLazyQuery(customerQuery, {
    client,
    onCompleted: data => {
      setTotalCustomers(data.customers.totalCustomers)
      setCustomers(data.customers.customers)
    }
  })

  useEffect(() =>
    getCustomers({
      variables:
        { page: 1, size: 12, category: categoryFilter, searchKey: searchInput }
    })
    , [searchInput, categoryFilter, getCustomers])

  const onPageChange = page => {
    getCustomers({ variables: { page: page, size: 12, category: categoryFilter, searchKey: searchInput } })
    setCurrentPage(page)
  }

  const handleBackendError = () => {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Houve um problema com o servidor, tente novamente."
      />
    )
  }

  return (
    <Fragment>
      <NavBar setSearchInput={setSearchInput} />
      <MainTemplate
        customers={customers}
        error={error}
        loading={loading}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        totalCustomers={totalCustomers}
        handleBackendError={handleBackendError}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </Fragment>
  )
}

