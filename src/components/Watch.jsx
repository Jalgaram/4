import React from 'react'
import Header from './Header'
import { Container, Row } from 'react-bootstrap'
import data from './data'
import data2 from './data2'
import data3 from './data3'
import Product1 from './Producy1'
import Footer from './Footer'

const Watch = () => {
    let allData = [...data, ...data2, ...data3];
    let watchData = allData.filter(item => item.modelType === 'Watch')

    return (
        <>
            <Header />
            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>Watch 상품</h3>
                </div>

                <Container>
                    <Row className='contentBigbox' style={{ justifyContent: "center" }}>
                        {watchData.length === 0 ? (
                            <p style={{ margin: 0, padding: 0 }}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            watchData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Watch