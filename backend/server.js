// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const Member = require('./models/Member');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://tvkthirukovilur_db_user:yPpG5E7k3gIx1CHV@cluster0.yk5q4lb.mongodb.net/';

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ Connection Error:", err));

// பதிவு செய்யும் வசதி
app.post("/api/register", async (req, res) => {
  try {
    // Terminal-ல் என்ன டேட்டா வருகிறது என்று பாருங்கள்
    console.log("📥 Incoming Data:", req.body); 

    // புதிய டேட்டாவை சேமிக்கிறோம்
    const newMember = new Member(req.body);
    const savedMember = await newMember.save();
    
    console.log("💾 Saved Successfully:", savedMember._id);
    res.status(201).json({ message: "Success", id: savedMember._id });
  } catch (err) {
    // ஒருவேளை சேமிப்பதில் பிழை இருந்தால் இங்கே காட்டும்
    console.error("❌ Mongoose Save Error:", err.message); 
    res.status(400).json({ error: err.message });
  }
});

// தகவல்களைப் பெறும் வசதி
app.get('/api/members', async (req, res) => {
    try {
        const members = await Member.find().sort({ createdAt: -1 });
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));