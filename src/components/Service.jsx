import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

const Service = () => {
    return (
        <>
            <Header />

            <div className="serviceWrap">
                <img src={process.env.PUBLIC_URL +"/img/서비스.jpg"} alt="서비스" />

                <div className="serviceContent">
                    <h2>Apple 지원</h2>

                    <Container>
                        <Row className='serviceRow' style={{ gap: '1.56vw' }}>
                            <Col className='serviceCol' md={3}>
                                <img src={process.env.PUBLIC_URL +"/img/계정.svg"} alt="계정" />
                                <p>Apple 계정 암호를 잊어버림</p>
                            </Col>

                            <Col className='serviceCol' md={3}>
                                <img src={process.env.PUBLIC_URL +"/img/수리.svg"} alt="수리" />
                                <p>Apple 수리</p>
                            </Col>

                            <Col className='serviceCol' md={3}>
                                <img src={process.env.PUBLIC_URL +"/img/청구.svg"} alt="청구" />
                                <p>청구 및 구독</p>
                            </Col>
                        </Row>
                    </Container>   
                </div>

                <div className="serviceContent2">
                    <h2>추가 주제 검색하기</h2>

                    <InputGroup className="mb-3" style={{width: "54.16vw"}}>
                        <Form.Control className='serviceInput'
                            placeholder="지원 검색하기"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            <i className="fi fi-rs-search"></i>
                        </Button>
                    </InputGroup>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Service