import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import data from './data'
import data2 from './data2';
import data3 from './data3';
import Contents3 from './Contents3';
import Contents2 from './Contents2';

const Content = () => {
  let [contents] = useState(data);
  let [contents2, setContents2] = useState(data2);
  let [contents3, setContents3] = useState(data3);
  const [visibleRows, setVisibleRows] = useState(1);

  return (
    <div className='contentWrap'>
      <div className="contentTitle">
        <h3>액세서리</h3>
        <p>즐겨 사용하는 기기들과 완벽하게 페어링되는 여러가지 필수품</p>
      </div>

      <Container>
        <Row className='contentBigbox'>
          {
            contents.map((content1, i) =>
              <Product1 contents={content1} key={i} />
            )
          }
        </Row>
      </Container>

      {visibleRows >= 2 && (
        <Container>
          <Row className='contentBigbox'>
            {contents2.map((content2, i) => (
              <Contents2 contents2={content2} key={i} />
            ))}
          </Row>
        </Container>
      )}

      {visibleRows >= 3 && (
        <Container>
          <Row className='contentBigbox'>
            {contents3.map((content3, i) => (
              <Contents3 contents3={content3} key={i} />
            ))}
          </Row>
        </Container>
      )}

      {visibleRows < 3 && (
        <Button
          variant="outline-primary"
          style={{ padding: '7px 30px', borderRadius: '50px' }}
          onClick={() => setVisibleRows(visibleRows + 1)}
        >
          더보기
        </Button>
      )}

    </div>
  )
}

function Product1(props) {
  return (
    <Col xs={1} className="contentBox">
      <div className="contentImgBox">
        <img src={props.contents.img} alt="악세" />
        {props.contents.imgColor && (
          <img src={props.contents.imgColor} alt="색상" />
        )}
      </div>

      <div className="contentfont">
        <h6>{props.contents.smallTitle}</h6>
        <h4>{props.contents.title.length > 50
          ? props.contents.title.slice(0, 50) + ' ...'
          : props.contents.title}</h4>
        <p>₩{props.contents.price.toLocaleString()}</p>
      </div>
    </Col>
  )
}
export default Content