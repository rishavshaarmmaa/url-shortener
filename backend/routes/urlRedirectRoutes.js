import express from 'express';
import Url from '../models/Url.js';

const router = express.Router();

// GET /:shortCode - redirect to original URL
router.get('/:shortCode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });
    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).send('No URL found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;




