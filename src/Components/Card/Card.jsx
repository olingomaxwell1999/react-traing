import React from 'react'

import Sasha from '../../Assets/sasha.jpg'

import styled from 'styled-components'

function Card() {
    const Container = styled.img`
        height: 200px;
        width: 200px;
        object-fit: cover;
        border: 10px solid blue;
        border-radius: 10px;
    `
  return (
      <div>
          <Container src={Sasha} alt='sasha banks' />
    </div>
  )
}

export default Card