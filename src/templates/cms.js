import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlockProcessor from '../components/BlockProcessor'

class CmsPage extends Component {
    render() {
        const {directusPage: {blocks}} = this.props.data;
        return (
            <div>
                <BlockProcessor blocks={blocks} />
            </div>
        )
    }
}

CmsPage.PropTypes = {
    data: PropTypes.object.isRequired
}

export default CmsPage;

export const pageQuery = graphql`
    query contactPageQuery($slug: String!){
        directusPage(slug: {eq: $slug}) {
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
`;