import React, { useEffect, useState } from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'

/* 
  1. 슬라이드에 들어갈 사진 3장 + alt로 이미지 제목
  2. 지금 몇 번째 이미지인지 순서를 기억
    => slideIndex(변수) / setSlideIndex(index 번호를 업데이트해주는 함수) => useState
  3. 3초마다 다음 사진으로 바뀜 => timer
  4. < > 인디케이터를 클릭해도 사진이 바뀜
*/

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '그릴드 연어 스테이크'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1619096534329-564c333a95b3?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '프레쉬 베이글 샌드위치'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1627308595228-9d0497edbe74?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: '프루티 넛츠 그릭요거트'
    }
  ]
  console.log(slides)
  slides.map((img) => {
    console.log('img', img)
  })
function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slideIndex)

  useEffect(() => {
    const timer = setInterval(() => {
      //초기변수 slideIndex = 0이 저장
      //setSlideIndex라는 함수를 실행하면 매개변수명 currentIndex에 0이 전달돼서 실행
      setSlideIndex((currentIndex) => {
        //console.log("currentIndex:", currentIndex);
        return (currentIndex +1) % slides.length;
      });
    }, 3000);
    return () => clearInterval(timer); //화면을 다른 페이지로 이동
  }, []);

  const prevSlider = () => setSlideIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length);
  /* 
    currentIndex => currentIndex - 1 + 3 / 3
        0               0    - 1 + 3 / 3 = 2
        2               2    - 1 + 3 / 3 = 1
        1               1    - 1 + 3 / 3 = 0
  */

  const nextSlider = () => setSlideIndex((currentIndex) => (currentIndex + 1) % slides.length);
  /* 
    currentIndex => currentIndex + 1 / 3
        0               0    + 1 / 3 = 1
        1               1    + 1 / 3 = 2
        2               2    + 1 / 3 = 0
  */

  return (
    <div className="hero-slide">
      <img src={slides[slideIndex].image} alt={slides[slideIndex].alt} />

      <button
        className="slide-btn prev"
        onClick={prevSlider}
        aria-label='이전 이미지'>
          <ChevronLeft size={44} color="rgba(255,255,255,0.7)"/>
      </button>
      <button
        className="slide-btn next"
        onClick={nextSlider}
        aria-label='다음 이미지'>
          <ChevronRight size={44} color="rgba(255,255,255,0.7)"/>
      </button>

      <div className="slide-dots">
        {
          slides.map((slide, index) => (
            <button
              key={index}
              className={index === slideIndex ? 'on' : ''}
              onClick={() => setSlideIndex(index)}
              aria-label={`${index + 1}번 이미지`}></button>
          ))
        }
      </div>
    </div>

  )
}

export default HeroSlider