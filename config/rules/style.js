const path           = require('path');
const AssetFunctions = require('node-sass-asset-functions');
const sassRule       = require('./sass');

sassRule.use.unshift({loader : 'style-loader'});

module.exports = sassRule;
