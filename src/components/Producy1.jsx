import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product1(props) {

  return (
    <Col xs={1} className="contentBox">
      <Link to={`/detail/${props.contents.id}`} style={{ textDecoration: "none" }}>
        <div className="contentImgBox">
          <img src={props.contents.img} alt="악세" />
          {props.contents.imgColor && (
            <img src={props.contents.imgColor} alt="색상" />
          )}
        </div>

        <div className="contentfont">
          <h6>{props.contents.smallTitle}</h6>
          <h4>{props.contents.mainTitle.length > 50
            ? props.contents.mainTitle.slice(0, 50) + ' ...'
            : props.contents.mainTitle}</h4>
          <p>₩{props.contents.price.toLocaleString()}</p>
        </div>
      </Link>
    </Col>
  )
}

export default Product1;