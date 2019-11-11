const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const port = 3000;

const app = express();

app.use(bodyParser.json());
// app.use(cors);

const posts = require('../routes/api/posts');

app.use('/api/posts', posts);

app.listen(port, () => {
    console.log('Server started at port:', port);
});