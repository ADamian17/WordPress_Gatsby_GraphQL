import React from 'react';
import styled from 'styled-components'

import { Link } from 'gatsby';

const PortfolioCard = styled.article`
  padding: 20px;
  border: 1px solid #e6e1e1;
  display: grid;
  grid-template-rows: max-content;
  gap: 10px;
`;

const PortfolioImage = styled.figure`
  height: 250px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PortfolioItem = ({ portfolio }) => (
  <PortfolioCard>
    <h2 dangerouslySetInnerHTML={{ __html: portfolio.title }} />
    <PortfolioImage>
      <img src={portfolio.featured_media.source_url} alt="thumbnail" />
    </PortfolioImage>
    <main dangerouslySetInnerHTML={{ __html: portfolio.excerpt }} />
    <Link to={`/portfolio/${portfolio.slug}`}>Read More</Link>
  </PortfolioCard>
)

export default PortfolioItem;
