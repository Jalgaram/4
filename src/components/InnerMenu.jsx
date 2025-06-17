import React from 'react'
import { Link } from 'react-router-dom'

const InnerMenu = () => {
  return (
    <div className='innerMenu'>
      <div className="innerWrap">
        <ul>
          <Link as={Link} to="/iPhone" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_iPhone.png"} alt="아이폰" /><p>iPhone</p></li></Link>

          <Link as={Link} to="/iPad" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_iPad.png"} alt="아이패드" /><p>iPad</p></li></Link>

          <Link as={Link} to="/Mac" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_Mac.png"} alt="맥" /><p>Mac</p></li></Link>

          <Link as={Link} to="/Watch" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_Watch.png"} alt="워치" /><p>Watch</p></li></Link>

          <Link as={Link} to="/AirPods" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_AirPods.png"} alt="에어팟" /><p>AirPods</p></li></Link>

          <Link as={Link} to="/AirTag" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_Tag.png"} alt="테그" /><p>AirTag</p></li></Link>

          <Link as={Link} to="/Vision" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_Vision.png"} alt="비전" /><p>Vision</p></li></Link>

          <Link as={Link} to="/TV&Home" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_TV.png"} alt="티비" /><p>Apple TV 4K</p></li></Link>

          <Link as={Link} to="/Acce" style={{textDecoration: "none"}}><li><img src={process.env.PUBLIC_URL +"/img/inner_악세서리.png"} alt="악세서리" /><p>액세서리</p></li></Link>
        </ul>
      </div>
    </div>
  )
}

export default InnerMenu