const sassRule = require('./sass');

sassRule.use.unshift({loader : 'style-loader'});

module.exports = sassRule;
