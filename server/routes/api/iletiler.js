const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('HELLO');
});

//ileti ekle (ADD)


//ileti sil (DELETE)



module.exports = router;
