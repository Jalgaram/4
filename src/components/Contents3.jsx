import React from 'react'
import { Col } from 'react-bootstrap'

const Contents3 = (props) => {
    const { contents3 } = props

    return (
        <Col xs={1} className="contentBox">
            <div className="contentImgBox">
                <img src={contents3.img} alt="악세" />
                {contents3.imgColor && (
                    <img src={contents3.imgColor} alt="색상" />
                )}
            </div>

            <div className="contentfont">
                <h6>{contents3.smallTitle}</h6>
                <h4>{contents3.title.length > 50
                    ? contents3.title.slice(0, 50) + ' ...'
                    : contents3.title}</h4>
                <p>₩{contents3.price.toLocaleString()}</p>
            </div>
        </Col>
    )
}

export default Contents3