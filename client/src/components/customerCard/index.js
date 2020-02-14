import React from 'react'
import { Card, Avatar, Skeleton } from 'antd'
import PropTypes from 'prop-types'

const { Meta } = Card


export default function CustomerCard(
    {
        name,
        address,
        photo,
        loading

    }
) {

    return (
        <Card
            loading={loading}
            hoverable
            style={{ width: 220 }}
            cover={photo ? <img alt="example" src={photo} /> : <Skeleton avatar/>}
        >
            <Meta title={name} description={address} />
        </Card>
    )
}

CustomerCard.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    photo: PropTypes.string,
}