import React from 'react'
import './TopicBox.css'

export default function TopicBox(props) {
    
  return (
    <div>
      <div className='topicBox'>
        <span>my food is{props.food} and the price is {props.price}</span>
        {props.children}

      </div>
    </div>
  )
}
