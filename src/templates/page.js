import React from 'react';

import Layout from '../components/Layout/Layout';

export default ({pageContext}) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
    <section dangerouslySetInnerHTML={{__html: pageContext.content}}/>
  </Layout>
);
