import React from 'react'
import { Tab, Table, Tabs } from 'react-bootstrap'

const DetailTab = ({ product }) => {
    return (
        <div className='detailTab_wrap'>
            <Tabs
                defaultActiveKey="information"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="information" title="제품 정보">
                    <Table>
                        <tbody>
                            <tr>
                                <th>개요</th>
                                <td>
                                    {[1, 2, 3, 4, 5, 6, 7].map((n) => {
                                        const key = `outline${n}`;
                                        return product[key] ? <p key={key}>{product[key]}</p> : null;
                                    })}
                                </td>
                            </tr>

                            {product.highlight1 && (
                                <tr>
                                    <th>하이라이트</th>
                                    <td>
                                        {[1, 2, 3, 4, 5, 6, 7].map((n) => {
                                            const key = `highlight${n}`;
                                            return product[key] ? <p key={key}>{product[key]}</p> : null;
                                        })}
                                    </td>
                                </tr>
                            )}

                            {product.configuration && (
                                <tr>
                                    <th>제품 구성</th>
                                    <td style={{ whiteSpace: 'pre-line' }}>{product.configuration}</td>
                                </tr>
                            )}

                            <tr>
                                <th>제품 사양</th>
                                <td>
                                    <h5>상품정보표시</h5>

                                    <h6 style={{ whiteSpace: 'pre-line' }}>
                                        {product.specification}
                                    </h6>
                                </td>
                            </tr>

                            {product.specification2 && (
                                <tr>
                                    <th>시스템 요구 사항</th>
                                    <td>
                                        <p>{product.specification2}</p>
                                    </td>
                                </tr>
                            )}

                            {product.company1 && (
                                <tr>
                                    <th>제조업체 정보</th>
                                    <td>
                                        <h5>제품 번호</h5>

                                        <h6 style={{ whiteSpace: 'pre-line' }}>
                                            {product.company1}
                                        </h6>

                                        {product.company2 && (
                                            <>
                                                <h5>보증</h5>

                                                <h6>
                                                    {product.company2}
                                                </h6>
                                            </>
                                        )}

                                        {product.company3 && (
                                            <>
                                                <h5>제조업체 알림</h5>

                                                <h6 style={{ whiteSpace: 'pre-line' }}>
                                                    {product.company3}
                                                </h6>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </Table>

                </Tab>

                <Tab eventKey="compatibility" title="호환성">
                    <Table>
                        <tbody className='detailTabtable2'>
                            <tr>
                                <th>호환 가능한 모델</th>
                                <td>
                                    <h6>{product.modelTitle} 모델</h6>
                                    <p>{product.itemModel}</p>

                                    {[1, 2, 3, 4].map((n) => {
                                        const titleKey = `modelTitle${n}`;
                                        const itemKey = `itemModel${n}`;

                                        return product[titleKey] || product[itemKey] ? (
                                            <div key={n}>
                                                {product[titleKey] && <h6>{product[titleKey]}</h6>}
                                                {product[itemKey] && <p>{product[itemKey]}</p>}
                                            </div>
                                        ) : null;
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>

            <div className="detailimg2">
                <div className="detailimgFont">
                    <h3>착 붙는 액세서리</h3>
                    <p>당신에게 알맞은 MagSafe 케이스, 카드지갑 또는 충전기를 찾아보세요.</p>
                    <h5>MagSafe 쇼핑하기 <i className="fi fi-rr-angle-small-right"></i></h5>
                </div>

                <img src="/img/detail1.png" alt="광고여" />
            </div>
        </div>
    )
}

export default DetailTab