import React from 'react'
import { Card, Avatar } from 'antd'
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
            style={{ width: 200 }}
            cover={photo ? <img alt="example" src={photo} /> : <Avatar shape="square" icon="user" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

CustomerCard.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    photo: PropTypes.string,
}