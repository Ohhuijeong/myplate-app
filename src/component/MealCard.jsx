import React from 'react'

function MealCard({item}) {
  return (
    <article className="card">
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-text">
        <h3>{item.title}</h3>
        <div className="info">
          <span>{item.calorie}kcal</span>
          <span>{item.tags.join('/')}</span>
        </div>
        <p className="text">{item.desc}</p>
      </div>
    </article>
  )
}

export default MealCard