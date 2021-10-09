import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MainNav from './MainNav';

const MainNavContainer = () => {
  
  const query = graphql`
    {
      wordpressWpApiMenusMenusItems( name: { 
        eq: "main menu" 
      }) {
        items {
          object_id
          object_slug
          title
        }  
      }
      # site meta data
      wordpressSiteMetadata {
        name
        description
      }
      wordpressWpLogo {
      url {
        source_url
        }
      }
    }
  `;

  const { wordpressWpApiMenusMenusItems: { items },  wordpressSiteMetadata, wordpressWpLogo } = useStaticQuery(query)

  return <MainNav navItems={items} siteMetaData={wordpressSiteMetadata} logo={wordpressWpLogo.url} />
};

export default MainNavContainer;