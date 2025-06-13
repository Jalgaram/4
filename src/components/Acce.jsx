import React from 'react'
import data from './data';
import data2 from './data2';
import data3 from './data3';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import Product1 from './Producy1';
import Footer from './Footer';

const Acce = () => {
    let allData = [...data, ...data2, ...data3];
    let acceData = allData.filter(item => item.modelType === '액세서리')

    return (
        <>
            <Header />

            <hr style={{ margin: 0 }} />

            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>액세서리 상품</h3>
                </div>

                <Container>
                    <Row className='contentBigbox' style={{rowGap: "50px"}}>
                        {acceData.length === 0 ? (
                            <p style={{ margin: 0, padding: 0 }}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            acceData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Acce