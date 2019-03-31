const express = require('express');
const postMessage = require('./controllers/postMessage');
const request = require('request');
const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

postMessage(app , request , urlencodedParser);

const PORT = 3000 || process.env.PORT;

app.listen(PORT , () => {
    console.log('Server is running on PORT 3000...');
});