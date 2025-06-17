import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const New = () => {
  return (
    <div className='newWrap'>
      <h3>최신제품</h3>
      <p>따끈따끈한 신제품 이야기</p>

      <Container className="newBoxWrap">
        <Col className="newBox1">
          <Row className="new1">
            <h3>MacBook Air</h3>
            <h5>Apple Intelligence</h5>
            <p>₩1,590,000부터</p>
          </Row>
        </Col>

        <Col className="newBox2">
          <Row className="new new2">
            <div className="newfontBox">
              <h3>iPhone 16e</h3>
              <h4>아름답고 견고한 디자인과 최신세대 칩 A18 탑재</h4>
              <h5>Apple Intelligence</h5>
              <p>₩990,000부터</p>
            </div>

            <img src={process.env.PUBLIC_URL +"/img/new2.png"} alt="아이폰16e" />
          </Row>

          <Row className="new new3">
            <div className="newfontBox2">
              <h3>iPad Air</h3>
              <h4>바람처럼 빠르며 강력한 Apple M3 칩 탑재</h4>
              <p>₩949,000부터</p>
            </div>

            <img src={process.env.PUBLIC_URL +"/img/new3.png"} alt="아이패드에어" />
          </Row>
        </Col>
      </Container>


    </div>
  )
}

export default New