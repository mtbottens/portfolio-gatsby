import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

class BlogPost extends Component {
    render() {
        const { title, featured_image, content } = this.props.data.directusBlog
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '0.5rem'
                }}>
                    {title}
                </h1>
                <div>
                  <Img sizes={featured_image.childImageSharp.sizes}/>
                    <img src={featured_image.featured_image}/>
                </div>
                <hr />
                <div dangerouslySetInnerHTML={{__html:content.childMarkdownRemark.html}} />
            </div>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!){
        directusBlog(slug: {eq: $slug}) {
            title
            featured_image {
              childImageSharp {
                sizes(maxWidth: 700) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            content {
                childMarkdownRemark {
                  html
                }
            }
        }
    }
`
