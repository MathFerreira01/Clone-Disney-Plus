import React from 'react'
import ImgSlider from '../ImgSlider'
import Movies from '../Movies'
import Viewers from '../Viewers'

import {Container} from './styles'

function Home() {
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home
