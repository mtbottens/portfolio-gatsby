import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class BlogIndex extends Component {
    render() {
        const {allDirectusPage: {edges: pages}} = this.props.data;
        return (
            <div>
                {pages.map(page => page.node).map(page => 
                    <div key={page.id}>
                        <Link to={'/blog/' + page.slug}>{'blog/' + page.slug}</Link>
                        <div dangerouslySetInnerHTML={{__html: page.excerpt.childMarkdownRemark.html}} />
                        <p>{page.created_at}</p>
                    </div>
                )}
            </div>
        )
    }
}

BlogIndex.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogIndex

export const pageQuery = graphql`
    query blogIndexQuery($path: String!){
        allDirectusPage(
            filter: {
                page_type: {
                    data: {
                        path: {
                            eq: $path
                        }
                    }
                }
            },
            sort: {
                order: DESC,
                fields: [created_at]
            }
        ) {
            edges {
                node {
                    id
                    slug
                    created_at
                    excerpt {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
`