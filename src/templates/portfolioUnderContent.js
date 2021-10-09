import React from 'react';

import Layout from '../components/Layout/Layout';
import PortfolioItems from '../components/PortfolioItems';

export default ({pageContext}) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
    <section dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    <PortfolioItems />
  </Layout>
);
