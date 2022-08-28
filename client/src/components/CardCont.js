import React, { useEffect, useState } from 'react'
import { getProjects } from '../utils/projects.js'
import CardBody from './card.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardImg from '../assets/_1030312.JPG'


export default function CardCont(cardAr) {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    let mounted = true;
    getProjects()
    .then(items=>{
      if(mounted){
        setPosts(items); 
      }
    })
  })
  // useEffect(()=>{
  //   fetch('../server/getProjects')
  //   .then((response)=>response.json())
  //   .then((data)=>{
      
  //     console.log(data[0].projectName);
  //     setPosts(data)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   });
  // },[])

  cardAr = [];
  for(var i=0;i<posts.length;i++){
    console.log(posts[i].projectName)
    var cardObj=<Card className='projCard' >
    <Card.Img variant="top" src={cardImg} />
    <Card.Body>
      <Card.Title>{posts[i].projectName}</Card.Title>
      <Card.Text>
       {posts[i].projectDesc}
      </Card.Text>
      <Button variant="primary" href={posts[i].projectLink}>GitHub</Button>
    </Card.Body>
  </Card>
    cardAr.push(cardObj)
   
    
  }
  console.log(`Card Array ${cardAr}`);
  return (
   cardAr
  )
}
