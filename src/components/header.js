import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import logo from '../images/logo_border.svg';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${(isHome) => (isHome ? '70vh' : '20vh')};
  .header-logo {
    height: 150px;
  }
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;
const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: sans-serif;
      a {
        font-size: 1.2rem;
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #524763;
        }
      }
    }
  }
`;

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      // if (this.props.location.pathname === '/') { // needed when not on github pages
      if (this.props.location.pathname === '/gatsby-blog-netlify') {
        this.wrapper.animate([
          { height: '20vh' },
          { height: '70vh' },
        ], {
            duration: 300,
            fill: 'forwards',
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1
          });
      } else {
        this.wrapper.animate([
          { height: '70vh' },
          { height: '20vh' }
        ], {
            duration: 300,
            fill: 'forwards',
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1
          });
      }
    }
  }
  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
        <HeaderContainer>
          <Link to="/">
            <img src={logo} alt="Gatsbyjs logo" className="header-logo" />
          </Link>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          opacity: 0.3
        }}
          sizes={data.background.sizes} />
      </HeaderWrapper>
    )
  }
};