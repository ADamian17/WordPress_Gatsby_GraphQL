import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PortfolioItem from './PortfolioItem';
import { PortfolioItemsWrapper } from './PortfolioItems.styles';

const PortfolioItemsContainer = () => {

  const query = graphql`
    {
      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            slug
            content
            excerpt
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `;

  const { allWordpressWpPortfolio } = useStaticQuery(query)

  return (
    <PortfolioItemsWrapper>
      {
        allWordpressWpPortfolio.edges.map(portfolio => <PortfolioItem key={portfolio.node.id} portfolio={portfolio.node} />)
      }
    </PortfolioItemsWrapper>
  )

};

export default PortfolioItemsContainer;