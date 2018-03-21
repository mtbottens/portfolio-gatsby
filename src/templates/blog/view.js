import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlockProcessor from '../../components/BlockProcessor'

class BlogView extends Component {
    render() {
        const {directusPage: {blocks}} = this.props.data;
        return (
            <div>
                <BlockProcessor blocks={blocks} />
            </div>
        )
    }
}

BlogView.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogView

export const pageQuery = graphql`
    query blogViewQuery($slug: String!){
        directusPage(slug: {eq: $slug}) {
            created_at
            blocks {
                id
                type
                text_content {
                    childMarkdownRemark {
                        html
                    }
                }
                image_content {
                    childImageSharp {
                        sizes {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
`
