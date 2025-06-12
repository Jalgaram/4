import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'

const Service = () => {
    return (
        <>
            <Header />

            <div className="serviceWrap">
                <img src="/img/서비스.jpg" alt="서비스" />

                <div className="serviceContent">
                    <h2>Apple 지원</h2>

                    <Container>
                        <Row className='serviceRow' style={{ gap: '30px' }}>
                            <Col className='serviceCol' style={{width: "145vw"}}>1 of 3</Col>
                            <Col className='serviceCol' style={{width: "145vw"}}>2 of 3</Col>
                            <Col className='serviceCol' style={{width: "145vw"}}>3 of 3</Col>
                        </Row>
                    </Container>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Service