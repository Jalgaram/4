import React from 'react'

const New = () => {
  return (
    <div className='newWrap'>
      <h3>최신제품</h3>
      <p>따끈따끈한 신제품 이야기</p>

      <div className="newBoxWrap">

        <div className="new1">
          <h3>MacBook Air</h3>
          <h5>Apple Intelligence</h5>
          <p>₩1,590,000부터</p>
        </div>

        <div className="newBoxWrap2">
          <div className="new new2">
            <div className="newfontBox">
              <h3>iPhone 16e</h3>
              <h4>아름답고 견고한 디자인과 최신세대 칩 A18 탑재</h4>
              <h5>Apple Intelligence</h5>
              <p>₩990,000부터</p>
            </div>

            <img src="/img/new2.png" alt="아이폰16e" />
          </div>

          <div className="new new3">
            <div className="newfontBox2">
              <h3>iPad Air</h3>
              <h4>바람처럼 빠르며 강력한 Apple M3 칩 탑재</h4>
              <p>₩949,000부터</p>
            </div>
            <img src="/img/new3.png" alt="아이패드에어" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default New