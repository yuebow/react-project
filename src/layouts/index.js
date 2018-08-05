import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import Footer from '../components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header />
    {children()}
    {/* {data.allContentfulLinks.edges.map(edge => (
      <div>{edge.node.title}</div>
    ))} */}
    <Footer links={data.allContentfulLinks.edges}>
      Copyright <a href="/privcacy">Privacy</a>
    </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allContentfulLinks(sort: { fields: [createdAt], order: ASC}) {
      edges {
        node {
          title 
          url
        }
      }
    }
  }
`
