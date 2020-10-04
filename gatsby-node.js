
const path = require('path')
exports.createPages = async ({graphql, actions}) => {

    const {createPage } = actions;

    const result = await graphql(`
    {
    allContentfulBlogTest {
        nodes {
          title
        }
      }
    }
    `);

    console.log('result ', result);

    result.data.allContentfulBlogTest.nodes.forEach((data) => {

        console.log('data ', data);
    
        createPage ( {

            path: `/blogSubject/${data.title}`,
            component: path.resolve('./src/templates/blogTitles.tsx'),
            context: {
              data : data
            }
        })


    })
}