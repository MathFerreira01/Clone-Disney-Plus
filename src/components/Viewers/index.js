import React from 'react'

import {Container, Wrap} from './styles'

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt=""/>
      </Wrap>
    </Container>
  )
}

export default Viewers
