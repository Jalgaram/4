import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const CenterSlide = () => {
  return (
    <div className='centerWrap'>
      <div className="centerfontBox">
        <h3>Apple 경험</h3>
        <p>Apple 제품 및 서비스로 더욱 많은걸 누리다.</p>
      </div>


      <Swiper slidesPerView={4} spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination, Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop={true}  className="mySwiper centerSlide">

        <SwiperSlide className='center1 center'>
          <div className="centerfontBox1">
            <h4>Apple Intelligence</h4>
            <p>글을 쓰고, 개성을 표출하고</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='center2 center'>
          <div className="centerfontBox2">
            <h5>APPLE STORE 앱</h5>
            <h4>선물이 곧 도착한다는 걸 미리 알려주세요</h4>
            <p>보내는 이도 받는 이도 기분 좋아지는 디지털 메시지. <br /> 선물과 함께 원하는 날짜에 전해보세요.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='center3 center'>
          <div className="centerfontBox3">
            <h5>APPlE TV+</h5>
            <h4>Apple 기기를 구입하면 <br /> Apple TV+가 3개월 무료</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide className='center4 center'>
          <div className="centerfontBox4">
            <h4>네 가지 Apple 서비스를 <br /> 단, 한 번의 가입으로 만나보세요.</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide className='center5 center'>
          <div className="centerfontBox5">
            <h4>보다 오래 안심할 수 있도록.</h4>
            <p>이제 AppleCare+가 우발적인 손상에 대한 <br /> 수리 서비스를 횟수 제한 없이 제공합니다.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className='center6 center'>
          <div className="centerfontBox6">
            <h4>Apple Pay 사용법을 <br /> 모두 알아보세요.</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide className='center7 center'>
          <div className="centerfontBox7">
            <h5>홈</h5>
            <h4>앱 하나로 집안 전체를 관리하는 <br /> 방법을 알아보세요.</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CenterSlide