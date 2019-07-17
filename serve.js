// require the module as normal
var browserSync = require("browser-sync");

// Start the server
browserSync({
    port: 8080,
    files: ['**/*.css', '**/*.js', '**/*.html', './index.html'],
    watch: true,
    server: './',
    watchEvents: [
        'change',
        'add',
        'unlink'
    ],
    https: 'true'
});
