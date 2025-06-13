import React from 'react'
import data from './data';
import data2 from './data2';
import data3 from './data3';
import Header from './Header';
import { Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import Product1 from './Producy1';

const Enter = () => {
    let allData = [...data, ...data2, ...data3];
    let enterData = allData.filter(item => item.modelType === '엔터테인먼트')

    return (
        <>
            <Header />

            <hr style={{ margin: 0 }} />

            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>엔터테인먼트</h3>
                </div>

                <Container>
                    <Row className='contentBigbox'>
                        {enterData.length === 0 ? (
                            <p style={{ margin: 0, padding: 0 }}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            enterData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Enter