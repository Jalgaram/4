import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules';
import 'swiper/css';

const Slide = () => {
  return (
    <Swiper className="mySwiper" modules={[Autoplay]} 
    autoplay={{delay: 5000, disableOnInteraction: false}} 
    loop={true}>
      <SwiperSlide className='slideImg1'>
        <div>
          <h2><i class="fi fi-brands-apple"></i> WATCH</h2>
          <h4>S E R I E S 10</h4>
          <p>얇아진 두께, 더 커진 존재감</p>

          <button>더 알아보기</button>
          <button>구입하기</button>
        </div>

      </SwiperSlide>

      <SwiperSlide className='slideImg2'>
        <div>
          <h2>MacBook Air</h2>
          <p>하늘빛 새 컬러 <br /> M4 칩 탑재로 성능도 하늘 높이</p>

          <button>더 알아보기</button>
          <button>구입하기</button>

          <p className="slide2font"><span>Apple Intelligence를 위한 탄생</span><br />Apple intelligence, 현재 한국어로 서비스 중</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className='slideImg3'>
        <div>
          <h2>iPhone</h2>
          <p>iPhone 16 라인업을 만나볼까요?</p>

          <button>더 알아보기</button>
          <button>구입하기</button>

          <p className="slide2font"><span>Apple Intelligence를 위한 탄생</span><br />Apple intelligence, 현재 한국어로 서비스 중</p>
        </div>

      </SwiperSlide>
    </Swiper>
  )
}

export default Slide