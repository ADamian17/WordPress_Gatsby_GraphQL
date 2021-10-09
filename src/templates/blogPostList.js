import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';

const Pagination = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const PaginationItemWrapper = styled.div`
  min-width: 25px;
  height: 25px;
  border: 1px solid #eee;
  background-color: ${({ isCurrentPage }) => isCurrentPage ? '#eee' : '#fff' };

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationItem = styled(Link)`
  text-decoration: none;
`;

export default ({pageContext}) => (
  <Layout>
    {
      pageContext.posts.map((post) => (
        <div>
          <h3 dangerouslySetInnerHTML={{__html: post.node.title }} />
          <small>
            {
              post.node.date
            }
          </small>
          <p dangerouslySetInnerHTML={{__html: post.node.excerpt}} />

          <div>
            <Link to={`/posts/${post.node.slug}`}>Read More</Link>
          </div>
        </div>
      ))
    }
    <Pagination>
      {
        [...Array(pageContext.pages).keys()].map((page, idx) => (
          <PaginationItemWrapper key={page} isCurrentPage={idx + 1 === pageContext.currentPage}>
            <PaginationItem to={idx === 0 ? '/blogs' : `/blogs/${idx + 1}`}>{page + 1}</PaginationItem>
          </PaginationItemWrapper>
        ))
      }
    </Pagination>
  </Layout>
);