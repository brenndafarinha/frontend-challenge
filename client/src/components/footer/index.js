import React from 'react'
import logo from '../../images/logo.svg'
import { Icon, Typography } from 'antd'

import './style.css'

const { Text } = Typography

export default function Footer() {

    return (
        <div className="footer-container">
            <img alt="Juntos Somos Mais logo" src={logo} />
            <Text strong>Juntos Somos Mais Fidelização S.A.</Text>
            <Text type="secondary">Siga-nos em nossas redes sociais</Text>
            <div className="footer-icons" >
                <a href='https://www.facebook.com/OficialJuntosSomosMais/'>
                    <Icon type="facebook" theme="filled" />
                </a>
                <a href="https://instagram.com/juntossomosmais_oficial?igshid=uwuf7v74c5ep">
                    <Icon type="instagram" theme="filled" />
                </a>
            </div>
        </div>
    )
}