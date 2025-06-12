import React from 'react'
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import Product1 from './Producy1';
import Footer from './Footer';
import data from './data';
import data2 from './data2';
import data3 from './data3';

const AirPods = () => {
    let allData = [...data, ...data2, ...data3];
    let airpodshData = allData.filter(item => item.modelType === 'AirPods')

    return (
        <>
            <Header />
            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>AirPods 상품</h3>
                </div>

                <Container>
                    <Row className='contentBigbox' style={{ justifyContent: "space-evenly" }}>
                        {airpodshData.length === 0 ? (
                            <p style={{ margin: 0, padding: 0 }}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            airpodshData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default AirPods