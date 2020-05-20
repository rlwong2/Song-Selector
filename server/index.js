const app = require('./server.js');

var port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Running on port ${port}`);
})

module.exports = server;