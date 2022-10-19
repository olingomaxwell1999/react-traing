import React from 'react'
import Card from '../Card/Card'
import Sasha from '../../Assets/sasha.jpg'
import Ronda from '../../Assets/ronda.jpg'
import Charlotte from '../../Assets/charlotte.jpg'
import Fined from '../../Assets/fined.jpg'
import Seth from '../../Assets/seth.jpg'
import Braun from '../../Assets/braun.jpg'
import Roman from '../../Assets/roman.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Gallery() {

    let wrestlers = [
        {
            img: Sasha  ,
            name: 'Sasha Banks',
            gender: 'female',
            age: 30
        },
        {
            img: Ronda ,
            name: 'Ronda Rousey',
            gender: 'female',
            age: 35
        },
        {
            img: Charlotte,
            name: 'Charlotte Flair',
            gender: 'female',
            age: 36
        },
        {
            img: Braun,
            name: 'Braun Stroman',
            gender: 'male',
            age: 39
        },
        {
            img: Seth,
            name: 'Seth Rollings',
            gender: 'male',
            age: 36
        },
        {
            img: Fined,
            name: 'The Fined',
            gender: 'male',
            age: 35
        },
        {
            img: Roman,
            name: 'Roman Reigns',
            gender: 'male',
            age: 37
        }
    ]
    
    const Div = styled.div`
        min-height:100vh;
        width:100%;
        padding: 20px 30px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        overflow: hidden;
        margin-bottom: 30px;
    `

    // const name = 'sasha banks'

    return (
      <Div>
            {
                wrestlers.map((wrestler, i) => (
                    <Card key={i} img={wrestler.img} name={wrestler.name} age={wrestler.age}/>
                ))
            } 
            
            <button className="btn">
                <Link to='/about'>Hooks</Link>
            </button>
      </Div>
  )
}

export default Gallery