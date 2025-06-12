import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import data from './data';
import data2 from './data2';
import data3 from './data3';
import { Container, Row } from 'react-bootstrap';
import Product1 from './Producy1';

const IPhone = () => {
    let allData = [...data, ...data2, ...data3];
    let iphoneData = allData.filter(item => item.modelType === 'iPhone' || item.modelType === 'iPhone2');

    return (
        <>
            <Header />
            <div className='contentWrap'>
                <div className="contentTitle">
                    <h3>iPone 상품</h3>
                </div>

                <Container>
                    <Row className='contentBigbox'>
                        {iphoneData.length === 0 ? (
                            <p style={{margin:0, padding:0}}>해당 상품은 준비중입니다 :(</p>
                        ) : (
                            iphoneData.map((content) => <Product1 contents={content} key={content.id} />)
                        )}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default IPhone