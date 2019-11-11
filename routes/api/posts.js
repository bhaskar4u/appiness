const express = require('express');

const mongodb = require('mongodb');


const router = express.Router();

async function loadposts() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://cares4pet:sahni121@cluster0-qamfm.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return client.db('appi').collection('categ')
}

router.get('/', async (req, res) => {
    const posts = await loadposts();
    return res.send(await posts.find({}).toArray());

})

router.post('/', async (req, res) => {
    const posts = await loadposts();
    posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(200).send()
});

router.delete('/:id', async (req, res) => {
    const posts = await loadposts();
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send()
});

module.exports = router;