const express = require('express');

const app = express();

const port = process.env.NODEJS_LOCAL_PORT || 8005;

app.route('/').get((req, res) => {
    res.send('hello tony');
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Worker: process ${process.pid} is up on port ${port}`);
});