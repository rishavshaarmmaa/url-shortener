import express from 'express';
import shortid from 'shortid';
import Url from '../models/Url.js';

const router = express.Router();

// POST /api/shorten - create short URL
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = shortid.generate();
  try {
    let url = new Url({ longUrl, shortCode });
    await url.save();
    res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/urls - get all URLs
router.get('/urls', async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.json(urls);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;





