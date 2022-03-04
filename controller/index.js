const router = require('express').Router();
const apiR = require('./api');
const homeR = require('./home-routes.js');
const dbRoutes = require('./dashboard-routes.js');
router.use('/api', apiR);
router.use('/', homeR);
router.use('/dashboard', dbRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;