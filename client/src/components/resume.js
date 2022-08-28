import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'


export default function Resume(cardAr) {

  const[posts, setPosts]=useState([]);
  useEffect(()=>{
    fetch('/resumeItem')
    .then((response)=>response.json())
    .then((data)=>{
      setPosts(data)
      return;
    })
    .catch((err)=>{
      console.log(err);
    });
  },[])
  
    cardAr = [];
    for(var i=0;i<posts.length;i++){
      var cardObj = 
      <Card className='resumeCard'>
        <Card.Body>
          <Card.Title>{posts[i].jobTitle}</Card.Title>
          <Card.Text>
            {posts[i].jobDur}
            <br/>
            <br/>
            {posts[i].jobDesc}
          </Card.Text>
        </Card.Body>
      </Card>
      cardAr.push(cardObj)
    }

  return (
    cardAr

    

  )
}
