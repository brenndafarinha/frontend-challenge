import React, { Fragment } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Descriptions, PageHeader } from 'antd'

import './style.css'


export default function Detail() {

    const { state: { name, photo, cell, phone, email, address } } = useLocation()
    const history = useHistory()

    return (
        <Fragment>
            <div className="detail-container">
                <PageHeader
                    onBack={() => history.push('/')}
                    title="Detalhes"
                />
                <div className="detail-content">
                    <div className='detail-info'>
                        <div className='info-profile'>
                            <img className="profile-image" alt="Foto do usuário" src={photo} />
                            <h3>{name}</h3>
                        </div>
                        <Descriptions className="info">
                            <Descriptions.Item label="Contatos" span={3}>{`${phone} - ${cell}`}</Descriptions.Item>
                            <Descriptions.Item label="E-mail" span={3}>{email}</Descriptions.Item>
                            <Descriptions.Item label="Endereço" span={3}>{address}</Descriptions.Item>
                        </Descriptions>
                    </div>
                    <div className='detail-bio'>
                        <h4>{`Sobre ${name}:`}</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam tempus diam at aliquet consectetur. Cras venenatis urna lorem,
                            at ultricies nibh rutrum sit amet. Nam quis tortor tincidunt, luctus
                            lorem id, pretium nunc. Suspendisse euismod dolor ut scelerisque dapibus.
                            Suspendisse nec velit a orci fermentum tempus vitae id nisl. Quisque ornare
                            ligula sed lorem elementum porta. Aliquam facilisis erat vitae cursus gravida.
                            Donec posuere nulla non dictum pharetra. Praesent vel enim vitae sem aliquam
                            feugiat id ac mauris. Proin lorem ante, ullamcorper non tempus eget, vulputate
                            in nisl. Donec sollicitudin urna arcu, vel cursus lacus pellentesque eu. Mauris
                            sit amet quam eu orci ornare aliquam in scelerisque neque. Ut malesuada dolor
                            sed urna aliquam, in aliquet orci auctor. Morbi hendrerit tempus tempor.
                            Fusce vitae porttitor lorem. Donec a mi non metus fermentum semper.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}