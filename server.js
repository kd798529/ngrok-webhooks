const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const server = express();
server.use(bp.json());
server.use(cors());
const port = '5000';

server.get('/', (req, res) => {
    res.json('Welcome it Works!');
})

server.post('/', (req, res) => {
    console.log(req.json);
    res.json(req.body);
})

server.listen(port, () => {
    console.log('Server is listening on ', port);
})