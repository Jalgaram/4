import { Col } from "react-bootstrap"

const Contents2 = (props) => {
    const { contents2 } = props

    return (
        <Col xs={1} className="contentBox">
            <div className="contentImgBox">
                <img src={contents2.img} alt="악세" />
                {contents2.imgColor && (
                    <img src={contents2.imgColor} alt="색상" />
                )}
            </div>

            <div className="contentfont">
                <h6>{contents2.smallTitle}</h6>
                <h4>{contents2.mainTitle.length > 50
                    ? contents2.mainTitle.slice(0, 50) + ' ...'
                    : contents2.mainTitle}</h4>
                <p>₩{contents2.price.toLocaleString()}</p>
            </div>
        </Col>
    )
}

export default Contents2