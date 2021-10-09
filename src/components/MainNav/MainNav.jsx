import React from 'react';

/* == styles == */
import {
  MainNavbar,
  NavItem,
  NavTitle,
  Logo
} from './MainNav.styles';

const MainNav = ({ navItems, siteMetaData, logo }) => (
  <MainNavbar>
    <NavTitle>
      <Logo>
        <img src={logo.source_url} alt="logo" />
      </Logo>
      <div>
        <h3>{siteMetaData.name}</h3>
        <h5>{siteMetaData.description}</h5>
      </div>
    </NavTitle>
    {
      navItems.map(navItem => <NavItem key={navItem.object_id} to={`/${navItem.object_slug}`}>{navItem.title}</NavItem>)
    }
  </MainNavbar>
)

export default MainNav;
