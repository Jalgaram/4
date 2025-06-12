import React from 'react'
import Header from './Header'
import Footer from './Footer'
import data from './data'
import data2 from './data2'
import data3 from './data3'
import { Container, Row } from 'react-bootstrap'
import Product1 from './Producy1'

const IPad = () => {
    let allData = [...data, ...data2, ...data3];
    let ipadData = allData.filter(item => item.modelType === 'iPad');

    return (
        <>
            <Header />
            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>iPad 상품</h3>
                </div>

                <Container >
                    <Row className='contentBigbox' style={{ justifyContent: "center" }}>
                       {ipadData.length === 0 ? (
                            <p style={{margin:0, padding:0}}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            ipadData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default IPad