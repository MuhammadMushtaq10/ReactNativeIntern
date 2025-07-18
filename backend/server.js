const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

dotenv.config();

//middleware
app.use(cors());
app.use(express.json());

// app.get('/' , (req,res) => {
//     res.send("API is running...")
// })
app.use('/api/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started at port${PORT}`);
});
