const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.send('api works');
});

module.exports = router;