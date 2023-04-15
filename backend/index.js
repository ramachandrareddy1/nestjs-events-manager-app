const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const eventModal = require('./eventManagerSchema');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/eventManager');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    app.listen(8000, (err) => {
        if (err) {
            console.log('Error', err);
            process.exit(1)
        } else {
            console.log('Server running on port:8000')
        }
    })
});

app.get('/events', async (req, res) => {
    const events = await eventModal.find({});
    res.json({ events })
})

app.post('/events', async (req, res) => {
    try {
        const newEvent = new eventModal(req.body);
        await newEvent.save()
        res.json({ message:"Request processed successfully!" })
    } catch (err) {
        console.log('Error', err);
        res.json(err);
    }
})

app.get('/events/featured', async (req, res) => {
    const events = await eventModal.find({ isFeatured: true });
    res.json({ events })
})
app.get('/events/:eventId', async (req, res) => {
    const eventId = req.params.eventId;
    const events = await eventModal.findById(eventId);
    res.json({ events })
})



