import React from 'react'
import logo from '../../images/logo.svg'
import PropTypes from 'prop-types'
import { Input, Button } from 'antd'

import './style.css'

const { Search } = Input

export default function NavBar(
    {
        setSearchInput
    }
) {

    return (
        <div className="navbar-container">
            <img alt="Juntos Somos Mais logo" src={logo} />
            {setSearchInput ? <Search
                placeholder="Buscar aqui"
                onSearch={value => setSearchInput(value)}
                className='search-input'
                
            /> : null}
            <div>
                <Button type="dashed">Cadastre-se</Button>
                <Button>Entrar</Button>
            </div>
        </div>
    )
}

NavBar.propTypes = {
    setSearchInput: PropTypes.func
}