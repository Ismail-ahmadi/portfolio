import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/rec_avatar1.jpeg'
import Avt2 from '../../assets/rec_avatar2.jpeg'
import Avt3 from '../../assets/rec_avatar3.jpeg'

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
    name: 'Joy Lee - YICF Executive Director  ',
    review : 'I have had the privilege of knowing Ismail since late 2018, when I first became Exec. Director of YICF, the parent organization of Roshan Learning Center, a refugee learning center where Ismail was serving as a volunteer English teacher. Ismail quickly won my trust and admiration as a young man who was so earnest, open, and driven to learn ... '
  },
  {
    avatar: Avt2,
    name: 'Tony Ta - CEO at CloudE8',
    review : 'We had the pleasure of bringing Ismail onboard as an intern for a short period of time in 2020. During this time, he worked with our development team on our sown.co platform where he learnt how to setup a new cloud server and did some software development in python and html. Ismail was a very quick learner and capable of applying what he learnt to his work. He has a wonderful work ethic and always took the initiative to look for solutions himself before turning for help. I have no doubt he will be valuable to any future employer. I wish him all the absolute best.'
  },
  {
    avatar: Avt3,
    name: 'Dr Lauren Clarke - Vice Rector for International Relations at Sampoerna University',
    review : '... He entered the Broward International Center with outstanding test scores in English and Math - among the highest in the Center’s history. Subsequently, Ismail excelled in his studies and served as a valuable resource for his faculty and his classmates. In our many conversations, I have been impressed with Ismail’s focus, dedication, maturity, and desire to succeed. His is a remarkable success story: any employer would benefit from his intelligence, his interpersonal skills, and his drive.'
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>What people think - taken from <a href='https://www.linkedin.com/in/ismail-ahmadi/' className='text-light'>Linkedin</a></h5>
      <h2>Recommendations</h2>
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
