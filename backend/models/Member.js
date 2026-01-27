const mongoose = require('mongoose'); 

const MemberSchema = new mongoose.Schema({
    // இருப்பிட விவரங்கள்
    taluka: { type: String, required: true },
    village: { type: String, required: true },
    
    // பதவி விவரங்கள்
    posting: { type: String, required: true },
    subPosting: { type: String, required: true },
    
    oldBooth: { type: String, default: "" },      // BLA-க்காக
    newBooth: { type: String, default: "" },      // BLA-க்காக

    // தனிப்பட்ட விவரங்கள் (புதிதாக சேர்க்கப்பட்டவை)
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    dob: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    education: { type: String, required: true },
    occupation: { type: String, required: true },
    community: { type: String, required: true },
    
    // அடையாள விவரங்கள்
    phone: { type: String, required: true },
    aadhar: { type: String, required: true },
    voterId: { type: String, required: true },
    
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Member', MemberSchema);