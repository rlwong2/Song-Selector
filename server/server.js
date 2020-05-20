const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/status', function(req, res){
    res.send({"message": "It's alive"});
});

app.get('/songs', function(req, res) {
    const data = {
        data: {
            hits: [
                {
                    objectID: '1',
                    title: 'How Great is Our God',
                },
                {
                    objectID: '2',
                    title: 'Way Maker',
                }
            ]
        }
    }
    res.send(data)
})

module.exports = app;