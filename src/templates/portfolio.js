import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';

const FeaturedImg = styled.figure`
  width: 350px;
  height: 350px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default ({ pageContext }) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
    <strong>
      WebSite Url:
    </strong>

    <a href={pageContext.acf.portfolio_url} target="_blank" rel="noreferrer">
      {pageContext.acf.portfolio_url}
    </a>
    <FeaturedImg>
      <img src={pageContext.featured_media.source_url} alt="thumbnail" />
    </FeaturedImg>
    <main dangerouslySetInnerHTML={{ __html: pageContext.excerpt }} />
  </Layout>
)
