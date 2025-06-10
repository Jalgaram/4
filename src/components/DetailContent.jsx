import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import data from './data';

const DetailContent = () => {
    const product = data[0];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [hovername, setHovername] = useState(null);
    return (
        <div className='detailContent_wrap'>
            <div className="detailheader">
                <h3>액세서리</h3>
            </div>
            <hr />

            <Container className="detailBigBox">
                <Row className="detailBox1">
                    <Col xs={6} className="detailFontBox">
                        <div className="detailfontWrap">
                            <h6>New</h6>
                            <h2>MagSafe형 iPhone 16 Pro Max <br />실리콘 케이스</h2>
                            <p>₩69,000 <span>할부 옵션 제공</span></p>
                        </div>

                        <div className="select-wrapper">
                            <label htmlFor="model" className="select-label">크기</label>

                            <select
                                name="model"
                                id="model"
                                style={{ cursor: "pointer" }} defaultValue="iPhone 16 Pro Max">
                                <option value="iPhone 16">iPhone 16</option>
                                <option value="iPhone 16 Plus">iPhone 16 Plus</option>
                                <option value="iPhone 16 Pro">iPhone 16 Pro</option>
                                <option value="iPhone 16 Pro Max">iPhone 16 Pro Max</option>
                            </select>
                        </div>

                        <h4>색상 - <span>{product.colors[hovername ?? selectedIndex].name}</span>
                        </h4>

                        <div className="color">
                            {product.colors.map((color, index) => (
                                <img
                                    key={index}
                                    src={color.src}
                                    alt={color.name}
                                    className={selectedIndex === index ? "active" : ""}
                                    onClick={() => setSelectedIndex(index)}
                                    onMouseEnter={() => setHovername(index)}
                                    onMouseLeave={() => setHovername(null)}
                                />
                            ))}

                        </div>

                        <hr />

                        <div className="detailBtnBox">
                            <Button variant="primary" className='detailBtn1'>장바구니에 담기</Button>
                            <Button variant="outline-primary" className='detailBtn2'>구매하기</Button>
                        </div>

                        <div className="detailFont2">
                            <h5><i className="fi fi-rr-messages"></i> 제품 구입에 필요한 도움을 받아보세요.</h5>
                            <p><span>지금 채팅하기 <i className="fi fi-bs-arrow-up-right detailup"></i></span> 서비스를 이용하거나 080-330-887에 전화로 문의하세요.</p>
                        </div>
                    </Col>

                    <Col xs={4} className="detailImgBox">
                        <img src={product.detailimgs[selectedIndex]} alt="악세" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailContent