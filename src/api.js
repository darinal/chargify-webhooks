const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router()

app.get('/api/actions', (req, res) => {
    res.json({
        'hello': 'world'
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);