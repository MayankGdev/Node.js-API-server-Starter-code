const router = require('express').Router();

const {myfun} = require('../controllers/myController');

router.get('/', myfun);

module.exports = router;
