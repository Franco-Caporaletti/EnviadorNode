const express = require('express');
const app = express();
const path = require('path');

//visualizar datos del form
app.use(express.urlencoded({extended: false}));

//entiende JSON
app.use(express.json());

//rutas definidas
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});