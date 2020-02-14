import React, { useState, useEffect } from 'react'
import { Radio, Typography, Result } from 'antd'
import PropTypes from 'prop-types'
import { times } from 'lodash'
import CustomerCrad from '../../components/customerCard'

import './style.css'

const { Text } = Typography

export default function Main(
    {
        customers,
        loading,
        error,
        categoryFilter,
        setCategoryFilter
    }
) {
    const [cardsLoading, setcardsLoading] = useState(true)

    const handleCardsLoading = loading => {
        if (!loading) {
            setTimeout(() => setcardsLoading(false), 2000)
        }
    }

    useEffect(() => handleCardsLoading(loading), [])

    const handleCardsSkeletons = () => times(9, () => <CustomerCrad loading={cardsLoading} />)
    console.log(cardsLoading)
    return (
        <div className='main-container'>
            <div className='main-filter-container'>
                <Text className='filter-title' strong>Filtrar por categoria:</Text>
                <Radio.Group
                    className="filter-radio-container"
                    onChange={e => setCategoryFilter(e.target.value)}
                    value={categoryFilter || ""}
                    defaultValue='trabalhoso'
                >
                    <Radio style={{ marginLeft: 0 }} value='trabalhoso'>Trabalhoso</Radio>
                    <Radio siz style={{ marginLeft: 0 }} value='especial'>Especial</Radio>
                    <Radio style={{ marginLeft: 0 }} value='normal'>Normal</Radio>
                </Radio.Group>
            </div>
            <div className='main-content'>
                {
                    cardsLoading ? handleCardsSkeletons() :

                        customers.length ? customers.map(customer => {
                            //const address = customer.location
                            return (
                                <CustomerCrad
                                    loading={cardsLoading}
                                    name={customer.name.fullname}
                                    address={customer.location.fullAddress}
                                    photo={customer.picture.large}
                                />
                            )
                        }
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
    customers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
}