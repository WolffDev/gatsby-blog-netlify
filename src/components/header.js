import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/gatsby.svg';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  overflot: hidden;
  position: relative;
  height: 70vh;
  a {
    color: #fff;
  }
  img {
    height: 100px;
  }
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link to="/">
          <img src={logo} alt="Gatsbyjs logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img style={{
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '100%'
    }}
      sizes={data.background.sizes} />
  </HeaderWrapper>
)

export default Header
