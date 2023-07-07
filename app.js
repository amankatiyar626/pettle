const express = require('express');
const app = express();
const user = require('./routes/user');

var cors = require('cors');
app.use(cors());



const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/user',user);

app.listen(3000, console.log('connected 3000'));





