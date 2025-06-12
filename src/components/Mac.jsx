import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container, Row } from 'react-bootstrap'
import data from './data'
import data2 from './data2'
import data3 from './data3'
import Product1 from './Producy1'

const Mac = () => {
    let allData = [...data, ...data2, ...data3];
    let macData = allData.filter(item => item.modelType === 'Mac');

    return (
        <>
            <Header />
            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>Mac 상품</h3>
                </div>

                <Container>
                    <Row className='contentBigbox'>
                        {macData.length === 0 ? (
                            <p style={{margin:0, padding:0}}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            macData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Mac