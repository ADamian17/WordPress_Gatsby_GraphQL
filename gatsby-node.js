const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
 
// Implement the Gatsby API 'createPages'. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanet: true }) // creacte a redirect route
  return new Promise((resolve, reject) => {
    // The 'graphql' function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
 
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
 
        // Create Page pages.
        const pageTemplate =  path.resolve("./src/templates/page.js")
        const portfolioTemplate = path.resolve("./src/templates/portfolioUnderContent.js")

        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash( edge.node.template === 'portfolio_under_content.php' ? (
              portfolioTemplate
              ) : (
                pageTemplate
            )),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====
 
      // ==== PORTFOLIO (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
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
                    acf {
                      portfolio_url
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const portfolioTemplate = path.resolve("./src/templates/portfolio.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpPortfolio.edges, edge => {
            createPage({
              path: `/portfolio/${edge.node.slug}/`,
              component: slash(portfolioTemplate),
              context: edge.node,
            })
          })
        })
      })
    // ==== END PORTFOLIO ====
    // ==== POST ====
    .then(() => {
      graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                wordpress_id
                slug
                title
                content
                excerpt
                date(formatString: "Do MMM YYYY HH:mm")
              }
            }
          }
        }
      `)
      .then((result) => {
        if(result.errors) {
          console.log(result.errors);
          reject(result.errors)
        }
        
        const posts = result.data.allWordpressPost.edges;
        const postOffset = 2;
        const pages = Math.ceil(posts.length / postOffset) 
        const postTemplate = path.resolve('./src/templates/blogPostList.js');
  
        _.chunk(posts, postOffset).forEach((page, idx) => {
          createPage({
            component: slash(postTemplate),
            path: idx === 0 ? '/blogs' : `/blogs/${idx + 1}`,
            context: {
              posts: page,
              pages,
              currentPage: idx + 1
            }
          });
        });

        const pageTemplate =  path.resolve("./src/templates/page.js");

        _.each(posts, (post) => {
          createPage({
            path: `/posts/${post.node.slug}`,
            component: slash(pageTemplate),
            context: post.node
          })
        });
        
        resolve();
      });
      // ==== POST ====
    });
  })
}