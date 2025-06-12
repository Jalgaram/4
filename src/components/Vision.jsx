import React from 'react'
import data from './data';
import data2 from './data2';
import data3 from './data3';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import Product1 from './Producy1';

const Vision = () => {
    let allData = [...data, ...data2, ...data3];
    let visionData = allData.filter(item => item.modelType === 'Vision')

    return (
        <>
            <Header />
            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>Vision 상품</h3>
                </div>

                <Container>
                    <Row className='contentBigbox' style={{ justifyContent: "space-evenly" }}>
                        {visionData.length === 0 ? (
                            <p style={{ margin: 0, padding: 0 }}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            visionData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Vision