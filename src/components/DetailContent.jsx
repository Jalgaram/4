import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { addItem } from './store';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const DetailContent = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [hovername, setHovername] = useState(null);

    if (!product) return null

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
                            <h6>{product.smallTitle}</h6>
                            <h2 style={{ whiteSpace: 'pre-line' }}>{product.title} {product.colors?.[selectedIndex]?.name && ` - ${product.colors[selectedIndex].name}`}</h2>
                            <p>₩{product.price.toLocaleString()} <span onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    '/img/Untitled.png',
                                    '할부옵션제공안내',
                                    'width=580,height=882');
                            }}>할부 옵션 제공</span></p>
                        </div>

                        {product.modelType === "iPhone" && (
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
                        )}

                        {product.modelType === "iPhone2" && (
                            <div className="select-wrapper">
                                <label htmlFor="model" className="select-label">크기</label>

                                <select
                                    name="model"
                                    id="model"
                                    style={{ cursor: "pointer" }} defaultValue="iPhone 16">
                                    <option value="iPhone 16">iPhone 16</option>
                                    <option value="iPhone 16 Plus">iPhone 16 Plus</option>
                                    <option value="iPhone 16 Pro">iPhone 16 Pro</option>
                                    <option value="iPhone 16 Pro Max">iPhone 16 Pro Max</option>
                                </select>
                            </div>
                        )}

                        {product.modelType === "iPad" && (
                            <div className="select-wrapper">
                                <label htmlFor="model" className="select-label">언어</label>

                                <select
                                    name="model"
                                    id="model"
                                    style={{ cursor: "pointer" }} defaultValue="한국어">
                                    <option value="iPhone 16">중국어(병음)</option>
                                    <option value="iPhone 16 Plus">일본어</option>
                                    <option value="iPhone 16 Pro">한국어</option>
                                    <option value="iPhone 16 Pro Max">영어(미국)</option>
                                </select>
                            </div>
                        )}


                        {product.colors && (
                            <>
                                <h4>색상 - <span>{product.colors[hovername ?? selectedIndex].name}</span></h4>

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
                            </>
                        )}

                        <hr />

                        <div className="detailBtnBox">
                            <Button variant="primary" className='detailBtn1' onClick={() => {
                                dispatch(addItem({
                                    id: product.id, 
                                    img: product.img,
                                    mainTitle: product.mainTitle, amount: product.amount,
                                    price: product.price
                                }));
                                navigate('/장바구니');
                            }}>장바구니에 담기</Button>
                            <Button variant="outline-primary" className='detailBtn2'>구매하기</Button>
                        </div>

                        <div className="detailFont2">
                            <h5><i className="fi fi-rr-messages"></i> 제품 구입에 필요한 도움을 받아보세요.</h5>
                            <p><span>지금 채팅하기 <i className="fi fi-bs-arrow-up-right detailup"></i></span> 서비스를 이용하거나 080-330-887에 전화로 문의하세요.</p>
                        </div>
                    </Col>

                    <Col xs={4} className="detailImgBox">
                        {product.colors && product.colors.length > 0 ? (
                            <img src={product.detailimgs[selectedIndex]} alt="악세" />
                        ) : (
                            <img src={product.detailimgs} alt="악세" />
                        )}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailContent