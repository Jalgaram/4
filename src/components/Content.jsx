import React from 'react'

const Content = () => {
  return (
    <div className='contentWrap'>
        <h3>액세서리</h3>
        <p>즐겨 사용하는 기기들과 완벽하게 페어링되는 여러가지 필수품</p>

        <div className="contentBox">
          <div className="contentImgBox">
            <img src="/img/악세1.png" alt="악세1" />
            <img src="/img/악세1-color.png" alt="악세1색상" />
            </div>

            <div className="contentfont">
              <h6>New</h6>
              <h4>MagSafe형 iPhone 16 Pro Max <br />
              실리콘 케이스 - 피오니</h4>
              <p>₩69,000</p>
          </div>
        </div>
    </div>
  )
}

export default Content