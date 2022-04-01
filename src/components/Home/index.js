import React from 'react'
import ImgSlider from '../ImgSlider'
import Viewers from '../Viewers'

import {Container} from './styles'

function Home() {
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
    </Container>
  )
}

export default Home
