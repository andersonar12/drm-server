const { Router } = require('express');
const getLicenseController = require('./get-license.controller');

const router = Router();

router.route('/').post(getLicenseController);

module.exports = router;