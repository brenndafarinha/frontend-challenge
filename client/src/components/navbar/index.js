import React from 'react'
import { Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setCustomerSearch } from '../../actions'
import './style.css'

const { Search } = Input

export default function NavBar() {

    const dispatch = useDispatch()

    return (
        <div className="navbar-container">
            <Search
                placeholder="Buscar aqui"
                onSearch={value => dispatch(setCustomerSearch(value))}
                className='search-input'

            />
            <div>
                <Button type="dashed">Cadastre-se</Button>
                <Button>Entrar</Button>
            </div>
        </div>
    )
}

