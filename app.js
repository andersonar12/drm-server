const express = require('express');
const cors = require('cors');
const licenseRoutes = require('./get-license.route');

const app = express();

app.use(cors('*'));
app.use(express.json());

const port = process.env.PORT || 3000;

/* Rutas*/
app.use("/drm/license", licenseRoutes);

app.listen(port, () => {
    console.log(`Listen in Port ${port}`);
});