import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import data from './data'
import data2 from './data2';
import data3 from './data3';
import Product1 from './Producy1';

const Content = () => {
  let [contents] = useState(data);
  let [contents2, setContents2] = useState(data2);
  let [contents3, setContents3] = useState(data3);

  const [visibleRows, setVisibleRows] = useState(1);

  return (
    <div className='contentWrap'>
      <div className="contentTitle">
        <h3>액세서리 상품</h3>
        <p>즐겨 사용하는 기기들과 완벽하게 페어링되는 여러가지 필수품</p>
      </div>

      <Container>
        <Row className='contentBigbox'>
          {
            contents.map((content) =>
              <Product1 contents={content} key={content.id} />
            )
          }
        </Row>
      </Container>

      {visibleRows >= 2 && (
        <Container>
          <Row className='contentBigbox'>
            {contents2.map((content) => (
              <Product1 contents={content} key={content.id} />
            ))}
          </Row>
        </Container>
      )}

      {visibleRows >= 3 && (
        <Container>
          <Row className='contentBigbox'>
            {contents3.map((content) => (
              <Product1 contents={content} key={content.id} />
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

export default Content;