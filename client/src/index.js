import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { createStore } from 'redux'
import reducers from './reducers'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App'

import './index.css'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
})

const store = createStore(reducers)

const MainApp = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
)

render(<MainApp />, document.getElementById('root'))

