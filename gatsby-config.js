const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    plugins: [

        'gatsby-plugin-typescript',

        {
            resolve : 'gatsby-source-contentful',

            options: {
                spaceId: process.env.CONTENTFUL_SPACEID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
};