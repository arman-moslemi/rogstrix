require('babel-register');
 
const router = require('./src/utils/main.routes').default;
// const Sitemap = require('./').default;
const Sitemap = require('react-router-sitemap').default;

 
(
    new Sitemap(router)
        .build('https://rogstrix.com')
        // .build('http://localhost:3000/')
        .save('./sitemaps.xml')
);
