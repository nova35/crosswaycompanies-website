const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' }
        };
    }
}