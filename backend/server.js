import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import urlApiRoutes from 'file:///D:/url-shortner/backend/routes/urlRoutes.js';
import urlRedirectRoutes from 'file:///D:/url-shortner/backend/routes/urlRedirectRoutes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Mount API routes under /api
app.use('/api', urlApiRoutes);

// Mount redirect route at root /
app.use('/', urlRedirectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



