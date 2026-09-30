import React, { useState, useEffect } from 'react'
import HeroSlider from '../component/HeroSlider'
import MealCard from '../component/MealCard'

function Home() {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}db.json`)
    .then((response) => response.json())
    .then((data) => {
      const meals = data.meals || [];
      //or 연산자로 넘겨받은 데이터가 있으면 data.meals 사용 / 없으면 [] 사용

      const recommendedMeals = meals.filter(
        (meal) => meal.recommended === true)
      const firstFour = recommendedMeals.slice(0, 4);
      setRecs(firstFour);
    }).catch((error) => console.log('db.json 로드 실패', error))
  }, [])
  return (
    <div className='contents'>
      <HeroSlider />

      <section>
        <div className="intro-text">
          <h1>
            <span>오늘의 식사,건강하게 시작하세요</span>
            <span>MYPLATE와 함께 만드는 <strong>건강한 식습관</strong></span>
          </h1>

          <p className="text">
            매일 무엇을 먹을지 고민되나요? <br />
            MY PLATE는 건강한 식단을 쉽게 찾고 관리할 수 있도록 도와주는 <br />식단 관리 서비스입니다 <br />
              나에게 맞는 메뉴를 찾아보고, 더 건강한 식습관을 만들어보세요.
          </p>
        </div>

        <div className="recomArea">
          <h2>오늘의 PICK</h2>
          <div className="card-grid">
            {
              recs.map((item) => <MealCard key={item.id} item={item}/>)
            }
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home