import React from 'react'
import'./029 card.styles.css'

export default function Card(props) {
  return (
    <div className="card-container">
      <h2>{props.monster.name}</h2>
      <p>
        <a href={`mailto:${props.monster.email}`}>{props.monster.email}</a>
      </p>
    </div>
  )
}
