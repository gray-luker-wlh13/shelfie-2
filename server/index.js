require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const ctrl = require('./controller');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env


app.get('/api/inventory', ctrl.getInventory);
app.delete('/api/inventory/:id', ctrl.delete);
app.post('/api/product', ctrl.createProduct);

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(`db connected`)
})





app.listen(SERVER_PORT, () => console.log(`Killin' it on port ${SERVER_PORT}`));