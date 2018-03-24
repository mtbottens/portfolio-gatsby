import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StructureProcessor from '../components/StructureProcessor'
require("prismjs/themes/prism.css")

class IndexPage extends Component {
    render() {
        const {directusPage: {structures}} = this.props.data;
        return (
            <div>
                <StructureProcessor structures={structures} />
            </div>
        )
    }
}

IndexPage.PropTypes = {
    data: PropTypes.object.isRequired
}

export default IndexPage;

export const pageQuery = graphql`
    query homePageQuery{
        directusPage(slug: {eq: "homepage"}) {
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
`;