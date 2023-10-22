require('babel-register');
 
const router = require('./main.routes').default;
// const Sitemap = require('./').default;
const Sitemap = require('react-router-sitemap').default;
const filterConfig = {
	isValid: false,
	rules: [
		/\/auth/,
		/\*/,
	],
};
const paramsConfig = {
	'/Subproduct/:Subproduct': [
		{ projectName: 'monitor' },
		{ projectName: 'CPU' },
		Subproduct
	],

};
(
    new Sitemap(router)
    .filterPaths(filterConfig)
    .applyParams(paramsConfig)
        .build('https://rogstrix.com')
        // .build('http://localhost:3000/')
        .save('./sitemaps.xml', '/static/')
);
