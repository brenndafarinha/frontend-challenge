import React from 'react'
import logo from '../../images/logo.svg'
import PropTypes from 'prop-types'
import { Input, Button } from 'antd'

import './style.css'

const { Search } = Input

export default function NavBar(
    {
        setSarchInput
    }
) {

    return (
        <div className="navbar-container">
            <img alt="Juntos Somos Mais logo" src={logo} />
            <Search
                placeholder="Buscar aqui"
                onChange={e => setSarchInput(e.target.value)}
                onSearch={value => setSarchInput(value)}
                className='search-input'
                
            />
            <div>
                <Button type="dashed">Cadastre-se</Button>
                <Button>Entrar</Button>
            </div>
        </div>
    )
}

NavBar.propTypes = {
    setSarchInput: PropTypes.func.isRequired
}