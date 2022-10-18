import React from 'react'

import styled from 'styled-components'

///Imports 

function Card({img,name,age}) {
  //write js here
    const Container = styled.img`
        height: 200px;
        width: 200px;
        object-fit: cover;
        border: 10px solid blue;
        border-radius: 10px;
    `
    const Title = styled.h1`
        font-size: 30px;
        color: blue;
    `
  
    const Age = styled.h3`
        font-size: 20px;
        color: blue;
    `
  return (
    //Html and Css
      <div>
      <Container src={img} alt={name} />
      
      <Title>{ name}</Title>

      <Age>{ age}</Age>
    </div>
  )
}

export default Card