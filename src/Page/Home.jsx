import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'



export default function Home() {
  return (
    <div>
      
        
        
        <TopicBox food="kottu" price="Rs300">
            <span>this is a description</span>
            </TopicBox>
        <TopicBox food="rise" price="Rs678" />
        <TopicBox food="roti" price="Rs456"/>
        
       
      
    </div>
  )
}
