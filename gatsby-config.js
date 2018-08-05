module.exports = {
  siteMetadata: {
    title: 'Design+Code 3',
    description: 'site',
    keywords: 'react, designers'
  },
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'z961tpt9va30',
        accessToken: '4cd8e3019388650aeb03c509e43f234fbf3ea5c65df4f100ff93feb5d7db7a61'
      }
    }
  ],
}

