const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
   const iletiler = await loadIletilerCollection();
   res.send(await iletiler.find({}).toArray());
 });
// router.get('/', (req, res) => {
//     res.send('HELLO');
//  });

//ileti ekle (ADD)


//ileti sil (DELETE)

async function loadIletilerCollection(){
    const client = await mongodb.MongoClient.connect
    (
        'mongodb+srv://brkslmn:brkslmn66@cluster0-vdbgv.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

    );
    return client.db('deneme').collection('iletiler');
}


module.exports = router;
