import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/client_avatar.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: Avt1,
    name: 'My client name',
    review : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laudantium exercitationem harum ipsa sint explicabo, voluptates eaque, rerum tempore perferendis necessitatibus? Laudantium quibusdam aperiam itaque a voluptatibus odit sed tempora?'
  },
  {
    avatar: Avt1,
    name: 'My client name',
    review : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laudantium exercitationem harum ipsa sint explicabo, voluptates eaque, rerum tempore perferendis necessitatibus? Laudantium quibusdam aperiam itaque a voluptatibus odit sed tempora?'
  },
  {
    avatar: Avt1,
    name: 'My client name',
    review : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laudantium exercitationem harum ipsa sint explicabo, voluptates eaque, rerum tempore perferendis necessitatibus? Laudantium quibusdam aperiam itaque a voluptatibus odit sed tempora?'
  },
  {
    avatar: Avt1,
    name: 'My client name',
    review : ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium laudantium exercitationem harum ipsa sint explicabo, voluptates eaque, rerum tempore perferendis necessitatibus? Laudantium quibusdam aperiam itaque a voluptatibus odit sed tempora?'
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key= { index } className="testimonial">
              <div className="client__avatar">
                <img src={ avatar } alt= { name } />
              </div>
              <h5 className='client__name'>{ name }</h5>
              <small className="client__review"> { review } </small>
            </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section >
  )
}

export default Testimonials
