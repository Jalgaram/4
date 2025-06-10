import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const DetailTab = () => {
    return (
        <div className='detailTab_wrap'>
            <Tabs
                defaultActiveKey="home"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="home" title="제품 정보">
                    
                </Tab>

                <Tab eventKey="profile" title="호환성">
    
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