import React from 'react'
import { Radio, Typography, Result } from 'antd'
import PropTypes from 'prop-types'
import CustomerCrad from '../../components/customerCard'

import './style.css'

const { Text } = Typography

export default function Main(
    {
        data,
        loading,
        error,
        categoryFilter,
        setCategoryFilter
    }
) {

    return (
        <div className='main-container'>
            <div className='main-filter-container'>
                <Text className='filter-title' strong>Filtrar por categoria:</Text>
                <Radio.Group
                    className="filter-radio-container"
                    onChange={e => setCategoryFilter(e.target.value)}
                    value={categoryFilter || ""}
                    defaultValue='especial'
                >
                    <Radio siz style={{ marginLeft: 0 }} value='especial'>Especial</Radio>
                    <Radio style={{ marginLeft: 0 }} value='normal'>Normal</Radio>
                    <Radio style={{ marginLeft: 0 }} value='trabalhoso'>Trabalhoso</Radio>
                </Radio.Group>
            </div>
            <div className='main-content'>
                {
                    data ? data.map(customer =>
                        <CustomerCrad
                            loading={loading}
                            name={customer.fullname}
                            address={customer.address}
                            photo={customer.picture.medium}
                        />
                    )
                        :
                        <Result
                            status="404"
                            title="Nenhum usuário encontrado"
                            subTitle="Seleciona outra categoria ou tente novamente"
                        />
                }
            </div>
        </div>
    )
}

Main.propTypes = {
    categoryFilter: PropTypes.string.isRequired,
    setCategoryFilter: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
}