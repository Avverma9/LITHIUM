const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/second-one', function (req, res) {
    res.send('My second ever api!')
})
router.get('/third-one', function (req, res) {
    res.send('My third ever api!')
})

module.exports = router;