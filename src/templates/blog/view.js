import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StructureProcessor from '../../components/StructureProcessor'

class BlogView extends Component {
    render() {
        const {directusPage: {structures}} = this.props.data;
        return (
            <div>
                <StructureProcessor structures={structures} />
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
            structures {
                id
                type {
                    id
                    columns_per_row
                    blocks_per_column
                }
                full_width
                blocks {
                    id
                    type {
                        type
                    }
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
    }
`
