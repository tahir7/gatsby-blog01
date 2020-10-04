import { graphql } from 'gatsby'
import React from 'react'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({data}) => {
    console.log(data);
    return(

        <div>
            <h1> Test Blog </h1>
            {data.allContentfulBlogTest.edges[0].node.title}
            
            {/* <div> {documentToReactComponents(data.allContentfulBlogTest.edges[0].node.title) }</div> */}
            
        </div>
    )
}

export const query = graphql`
query {

    allContentfulBlogTest {
        nodes {
          id
        }
        edges {
          node {
            title
            publicationDate
            content {
              content
            }
          }
        }
      }
}`