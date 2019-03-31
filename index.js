const express = require('express');
const postMessage = require('./controllers/postMessage');
const request = require('request');
const app = express();
const urlencodedParser = express.urlencoded({ extended: false });
const PORT = 3000 || process.env.PORT;

postMessage(app , request , urlencodedParser , process.env.SLACK_URL);

app.set('view engine' , 'ejs');

app.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}...`);
});