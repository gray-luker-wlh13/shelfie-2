const express = require('express');
const ctrl = require('./controller');

const app = express();
app.use = (express.json());

//massive

//endpoints


app.listen(4221, () => console.log(`Killin' it on port 4221`));