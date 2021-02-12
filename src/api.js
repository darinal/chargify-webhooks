const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

let actions = [];

router.get('/actions', (req, res) => {
    res.json(actions);
});

router.post('/actions', (req, res) => {
    actions = actions.splice(actions.length - 1);
    actions.push(req.body.toString());
    res.json({
        'saved': req.body.toString()
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);