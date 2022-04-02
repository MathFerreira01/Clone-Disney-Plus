import React from 'react'
import { Nav, Logo, NavMenu, UserImg} from './styles'


function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      <NavMenu>
        <a>
            <img src="/images/home-icon.svg" alt="home icon"/>
            <span>HOME</span>
        </a>
        <a>
            <img src="/images/search-icon.svg" alt="home icon"/>
            <span>SEARCH</span>
        </a>
        <a>
            <img src="/images/watchlist-icon.svg" alt="home icon"/>
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src="/images/original-icon.svg" alt="home icon"/>
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src="/images/movie-icon.svg" alt="home icon"/>
            <span>MOVIES</span>
        </a>
        <a>
            <img src="/images/series-icon.svg" alt="home icon"/>
            <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"/>
    </Nav>
  )
}

export default Header
