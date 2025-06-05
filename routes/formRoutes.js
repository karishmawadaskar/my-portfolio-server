const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Feedback = require('../models/Feedback');

// Contact form POST
router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving contact" });
  }
});

// Feedback form POST
router.post('/feedback', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: "Feedback saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving feedback" });
  }
});

module.exports = router;
