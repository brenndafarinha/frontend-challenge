import React from 'react'
import { Radio, Typography } from 'antd'
import PropTypes from 'prop-types'
import CustomerCrad from '../../components/customerCard'

import './style.css'

const { Text } = Typography

export default function Main(
    {
        customers: {
            customersData,
            customersLoading
        },
        setFilter
    }
) {

    return (
        <div className='main-container'>
            <div className='main-filter-container'>
                <Text className='filter-title' strong>Filtrar por categoria:</Text>
                <Radio.Group
                    className="filter-radio-container"
                    onChange={e => setFilter(e.target.value)}
                    defaultValue='especial'
                >
                    <Radio siz style={{ marginLeft: 0 }} value='especial'>Especial</Radio>
                    <Radio style={{ marginLeft: 0 }} value='normal'>Normal</Radio>
                    <Radio style={{ marginLeft: 0 }} value='trabalhoso'>Trabalhoso</Radio>
                </Radio.Group>
            </div>
            <div className='main-content'>
                {customersData.map(customer => 
                    <CustomerCrad
                        loading={customersLoading}
                        name={customer.fullname}
                        address={customer.address}
                        photo={customer.picture}
                    />
                )}
            </div>
        </div>
    )
}

Main.propTypes = {
    customers: PropTypes.shape({
        customersData: PropTypes.array.isRequired,
        customersLoading: PropTypes.bool.isRequired
    }),
    setFilter: PropTypes.func.isRequired
}