/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainNav from "../MainNav"

/* == styles == */
import GlobalStyles from "../GlobalsStyles/GlobalsStyles"
import { LayoutWrapper } from "./Layout.styles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <MainNav />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </>
  )
}

export default Layout
