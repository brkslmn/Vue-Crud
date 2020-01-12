const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.post('/', async (req, res) => {

    const iletiler = await loadIletilerCollection();
    await iletiler.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    
    res.status(201).send();
});

router.delete('/:id' , async (req, res) => {
    const iletiler = await loadIletilerCollection();
    await iletiler.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

router.put('/:id', async (req, res) => {
    let id = {
        _id: mongodb.ObjectID(req.params.id)
      };
      const iletiler = await loadIletilerCollection();
      iletiler.updateOne({_id:  new mongodb.ObjectID(req.params.id)}, {$set:{'text': req.body.text}}, (err, result) => {
      if(err) {
        throw err;
      }
          res.send('Update Başarılı');
        });
    });

router.get('/', async (req, res) => {
   const iletiler = await loadIletilerCollection();
   res.send(await iletiler.find({}).toArray());
 });




async function loadIletilerCollection(){
    const client = await mongodb.MongoClient.connect
    (
        'mongodb+srv://brkslmn:yourpassword@cluster0-vdbgv.mongodb.net/test?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

    );
    return client.db('deneme').collection('iletiler');
}


module.exports = router;
