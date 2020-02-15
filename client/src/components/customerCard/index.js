import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import "./style.css"

const { Meta } = Card

function CustomerCard({
    customer
}) {
    const history = useHistory()
    return (
        <Card
            onClick={() => history.push('/detail', customer)}
            className="customer-card"
            hoverable
            cover={<img alt="example" src={customer.photo} />}
        >
            <Meta title={customer.name} description={customer.address} />
        </Card>
    )
}

CustomerCard.propTypes = {
    customer: PropTypes.object.isRequired
}

export default CustomerCard