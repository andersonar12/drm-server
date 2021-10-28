const { Router } = require('express');
const getLiscenseController = require('./get-liscense.controller');

const router = Router();

router.route('/').post(getLiscenseController);

module.exports = router;