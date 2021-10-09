import styled from 'styled-components';
import { Link } from 'gatsby';

export const MainNavbar = styled.nav`
  background-color: rgb(3, 27, 77);
  height: 60px;
  padding: 0 20vw;

  display: flex;
  align-items: center;
  gap: 20px;

  color: #fff;
`;

export const NavTitle = styled.div`
  color: var(--default-color-white);

  display: flex;
  gap: 12px;
  margin-right: auto;
`;

export const NavItem = styled(Link)`
  color: var(--default-color-white);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  } 
`;

export const Logo = styled.figure`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;