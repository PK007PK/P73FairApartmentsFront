// const pagePath = ``;
const indexName = `Pages`;
const pageQuery = `{
  pages: allSanityBlogPosts {
    edges {
      node {
        name
        lead
        id
        richText {
            children {
              text
            }
        }
        slug {
          current
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({
    node: {
        id,
        name,
        lead,
        slug: { current },
    },
}) {
    return {
        objectID: id,
        name,
        lead,
        slug: current,
    };
}

const queries = [
    {
        query: pageQuery,
        transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
        indexName,
    },
];

module.exports = queries;
