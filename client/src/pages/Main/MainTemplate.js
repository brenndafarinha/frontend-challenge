import React from 'react'
import { Radio, Typography, Pagination, Spin, Result } from 'antd'
import PropTypes from 'prop-types'

import CustomerCard from '../../components/customerCard'

import './style.css'

const { Text } = Typography

export default function MainTemplate(
    {
        customers,
        categoryFilter,
        setCategoryFilter,
        loading,
        totalCustomers,
        handleBackendError,
        error,
        onPageChange,
        currentPage
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
                    defaultValue={categoryFilter}
                >
                    <Radio style={{ marginLeft: 0 }} value=''>Todos</Radio>
                    <Radio style={{ marginLeft: 0 }} value='trabalhoso'>Trabalhoso</Radio>
                    <Radio siz style={{ marginLeft: 0 }} value='especial'>Especial</Radio>
                    <Radio style={{ marginLeft: 0 }} value='normal'>Normal</Radio>
                </Radio.Group>
            </div>
            <div className='main-content'>
                {loading ? <Spin size="large" style={{ marginTop: 20 }} /> :
                    <div className="content">
                        {error ? handleBackendError() :
                            customers.length ? customers.map((customer, idx) => {
                                return (
                                    <CustomerCard
                                        key={idx}
                                        customer={{
                                            name: customer.name.fullname,
                                            address: customer.location.fullAddress,
                                            photo: customer.picture.large,
                                            cell: customer.cell,
                                            phone: customer.phone,
                                            email: customer.email
                                        }}
                                    />
                                )
                            }
                            )
                                :
                                <Result
                                    status="404"
                                    title="Nenhum usuário encontrado"
                                    style={{ margin: "0 auto" }}
                                />
                        }
                    </div>
                }
                {
                    customers.length && !loading ?
                        <Pagination
                            style={{ marginTop: 10 }}
                            total={totalCustomers}
                            current={currentPage}
                            onChange={page => onPageChange(page)} /> : null}
            </div>
        </div>
    )
}

MainTemplate.propTypes = {
    categoryFilter: PropTypes.string.isRequired,
    setCategoryFilter: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    handleBackendError: PropTypes.func.isRequired,
    totalCustomers: PropTypes.number,
    onPageChange: PropTypes.func.isRequired
}