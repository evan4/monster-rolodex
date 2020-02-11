import React from 'react'
import './028 card-list.styles.css';

import Card from '../card/Card'

export default function CardList(props) {
  return (
    <div className="card-list">
   { props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
    </div>
  )
}
