import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'

function Gallery() {
    
    const Div = styled.div`
        min-height:100vh;
        width:100%;
        padding: 20px 30px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        overflow: hidden;
    `

  return (
      <Div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </Div>
  )
}

export default Gallery