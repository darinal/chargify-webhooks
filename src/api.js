const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        'action': 'get'
    });
});

router.post('/', (req, res) => {
    res.json({
        'action': 'post'
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);