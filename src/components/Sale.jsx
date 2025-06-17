import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Sale = () => {
  return (
    <Container className='saleWrap'>
      <Row className='saleBox'>
        <Col md={1} className="sale1">
          <div className="sale1font">
            <h5>인증 리퍼비쉬 제품</h5>
            <h4>1년 보증이 제공되는 리퍼비쉬 Apple 제품을 쇼핑하세요</h4>
            <p>1년 보증, 철저한 테스트를 거쳐 완벽하게 작동하는 기능, <br /> 최대 15% 더 부담 없는 가격으로 새롭게 태어난 Apple 인증 리퍼비쉬 제품을 만나보세요.</p>
          </div>

          <img src={process.env.PUBLIC_URL +"/img/할인1.png"} alt="리퍼비쉬" />
        </Col>

        <Col md={1} className="sale2">
          <div className="sale2font">
            <h5>비지니스</h5>
            <h4>대기업부터 중소기업까지 Apple이 함께합니다.</h4>
            <p>더욱 효율적으로 소통 협업하고, 비지니스를 운영할 수 있도록 힘을 실어주는 <br /> Apple의 하드웨어, 소프트웨어 그리고 서비스</p>
            <h3>귀사의 예산에 적헙한 기기를 선택할 수 있도록 안내와 <br /> 최상의 할부 헤택에 대해서도 알려드립니다.</h3>
            <h6>전문가와 상담하기 &gt;</h6>
          </div>

          <img src={process.env.PUBLIC_URL +"/img/할인2.png"} alt="비지니스" />
        </Col>
      </Row>
    </Container >
  )
}

export default Sale