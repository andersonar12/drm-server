const express = require('express');
const cors = require('cors');
const liscenseRoutes = require('./get-liscense.route');

const app = express();

app.use(cors('*'));

const port = process.env.PORT || 3000;

/* Rutas*/
app.use("/drm/liscense", liscenseRoutes);

app.listen(port, () => {
    console.log(`Listen in Port ${port}`);
});