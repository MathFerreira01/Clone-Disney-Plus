import React from 'react'

import {Container, Content, Wrap} from './styles'

function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Wrap>
                <img src="https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg" alt=""/>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies
