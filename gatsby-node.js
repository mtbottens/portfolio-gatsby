const path = require('path');

const PAGE_TEMPLATE_DIRECTORY = 'src/templates';

const getPageTypeTemplateByNode = (node) => {
    if (!node.is_singleton && node.has_index) {
        return path.resolve(`${PAGE_TEMPLATE_DIRECTORY}/${node.path}/index.js`);
    } else {
        return false;
    }
};

const getPageTemplateByNode = (node) => {
    if (node.page_type.data.is_singleton) {
        return path.resolve(`${PAGE_TEMPLATE_DIRECTORY}/${node.page_type.data.path}.js`);
    } else {
        return path.resolve(`${PAGE_TEMPLATE_DIRECTORY}/${node.page_type.data.path}/view.js`);
    }
};

const getPagePathByNode = (node) => {
    if (node.page_type.data.is_singleton) {
        return `${node.slug}`;
    } else {
        return `${node.page_type.data.path}/${node.slug}`;
    }
};

const gatherPageTypes = ({createPage, graphql}) => {
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allDirectusPageType {
                        edges {
                            node {
                                path
                                has_index
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors);
                }
                result.data.allDirectusPageType.edges.forEach((edge) => {
                    const pageTemplate = getPageTypeTemplateByNode(edge.node);
                    if (pageTemplate) {
                        createPage({
                            path: edge.node.path,
                            component: pageTemplate,
                            context: {
                                path: edge.node.path
                            }
                        });
                    }
                });
            })
        );
    });
};

const createPages = ({createPage, graphql}) => {
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allDirectusPage {
                        edges {
                            node {
                                slug
                                page_type {
                                    data {
                                        path
                                        is_singleton
                                    }
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors);
                }
                result.data.allDirectusPage.edges.forEach((edge) => {
                    createPage({
                        path: getPagePathByNode(edge.node),
                        component: getPageTemplateByNode(edge.node),
                        context: {
                            slug: edge.node.slug
                        }
                    });
                });
            })
        )
    });
}

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return Promise.all([
        gatherPageTypes({graphql, createPage}),
        createPages({graphql, createPage})
    ]);
}
