import React, { useState } from 'react';

const talukaData = {
    "திருக்கோவிலூர் வடக்கு ஒன்றியம்": ["குலதீபமங்கலம்", "குச்சிப்பாளையம்", "தேவியாகரம்", "கச்சிக்குச்சான்", "ஆவியூர்", "வடக்குநெமிலி", "கலர்புரம்", "பிடாரம்பட்டி", "அத்தண்டமருதூர்", "வடமருதூர்", "சுந்தரேசபுரம்", "காட்டுக்காலனி", "மேட்டுக்காலனி", "கத்தாழந்திட்டு", "வில்லிவலம்", "வடமலையனூர்", "காட்டுப்பையூர்", "கொடியூர்", "T.குன்னத்தூர்", "வீரணாம்பட்டு", "எல்ராம்பட்டு", "முதலூர்", "ஆவிகொளப்பாக்கம்"],
    "திருக்கோவிலூர் வடமேற்கு ஒன்றியம்": ["விளந்தை", "கழுமரம்", "கோட்டகம்", "சொரையப்பட்டு", "கொழுந்தராம்பட்டு", "நெடுங்கம்பட்டு", "அத்திப்பாக்கம்", "சடைக்கட்டி"],
    "முகையூர் வடக்கு ஒன்றியம்": ["வசந்தகிருஷ்ணாபுரம்", "அரசக்குப்பம்", "ஆதிச்சனூர்", "வீரப்பாண்டி", "புலிக்கல்", "மதுரா அடுக்கம்", "தண்டரை", "ஒட்டம்பட்டு", "அருணாபுரம்", "கல்லந்தல்", "நாயனூர்", "வெள்ளம்புத்தூர்", "T.தேவனூர்", "புதுநகர்", "அந்திலி", "நெற்குணம்", "ஏமப்பேர்"],
    "முகையூர் கிழக்கு ஒன்றியம்": ["அடுக்கம்", "கண்டாச்சிபுரம்", "செங்கமேடு", "வீரங்கிபுரம்", "T.புதுப்பாளையம்", "சித்தத்தூர்", "மேல்வாலை", "ஓடுவன் குப்பம்", "ஒதியத்தூர்", "திருமல்ராயபுரம்", "கீழ்வாலை", "பில்ராம்பட்டு", "வடகரை தாழனூர்", "திருமலைப்பட்டு", "கடகால்", "காடகனூர்"],
    "முகையூர் மேற்கு ஒன்றியம்": ["ஆடுர் கொளப்பாக்கம்", "கொடுக்கப்பட்டு", "வேலாகுளம்", "கோட்டை மருதூர்", "மணம்பூண்டி", "குடமுருட்டி", "சு.கொல்லூர்", "வி. சித்தாமூர்", "கிங்கிலி வாடி", "ஆலம்பாடி", "சத்திய கண்டனூர்", "முகையூர்", "இருதயபுரம்", "கொடுங்கால்", "பரனூர்", "காக்கா குப்பம்", "மதுரா புத்தகரம்", "தணிக்கலாம் பட்டு", "வி.புத்தூர்"],
    "முகையூர் தெற்கு ஒன்றியம்": [ "காரனை பெருச்சானுர்","அரும்பராம்பட்டு", "சித்தேரிப்பட்டு","சென்னாகுணம்", "புரவடை", "நாதன் காடுவெட்டி", "ஆயந்தூர்", "ஆ.கூடலூர்", "அருளவாடி", "குயவன் காடுவெட்டி", "கொங்கராயனூர்", "பையூர்", "மாறங்கியூர்", "ஆற்காடு", "வீரமடை", "வீரசோழபுரம்", "மேலக் கொண்டூர்", "கீழ்க்கொண்டூர்"],
    "திருவெண்ணைநல்லூர் மேற்கு ஒன்றியம்": ["அருங்குறுக்கை", "தி. கொணலவாடி", "சித்தலிங்கமடம்","எடப்பாளையம்","பல்லரிப்பாளையம்", "சி.மெய்யூர்", "புதுப்பாளையம்", "பெண்ணைவளம்", "அண்டராயநல்லூர்", "பனப்பாக்கம்", "டி.எடையார்", "இளந்துறை", "மணக்குப்பம்"],
    "திருவெண்ணைநல்லூர் வடக்கு ஒன்றியம்": ["மழவராயனூர்", "சின்ன செவலை", "தொட்டி குடிசை", "நாதன் காடுவெட்டி", "பாவந்தூர்", "மேட்டுக்குப்பம்", "சிறு மதுரை", "சந்தப்பேட்டை", "குச்சிப்பாளையம்", "ஏமப்பூர்", "தடுத்தாட்கொண்டூர்", "மழையம்பட்டு", "பக்கிரிதக்கா", "சிறு வானூர்", "ஏனாதி மங்களம்", "எரளூர்", "செம்மார்", "வளையம் பட்டு", "மேலமங்களம்"],
    "அரகண்டநல்லூர் நகரம்": ["வார்டு 1", "வார்டு 2", "வார்டு 3", "வார்டு 4", "வார்டு 5", "வார்டு 6", "வார்டு 7", "வார்டு 8", "வார்டு 9", "வார்டு 10", "வார்டு 11", "வார்டு 12", "வார்டு 13"],
    "திருவெண்ணைநல்லூர் நகரம்": ["வார்டு 1", "வார்டு 2", "வார்டு 3", "வார்டு 4", "வார்டு 5", "வார்டு 6", "வார்டு 7", "வார்டு 8", "வார்டு 9", "வார்டு 10", "வார்டு 11", "வார்டு 12", "வார்டு 13", "வார்டு 14", "வார்டு 15"],
    "திருக்கோவிலூர் நகரம்": ["வார்டு 1", "வார்டு 2", "வார்டு 3", "வார்டு 4", "வார்டு 5", "வார்டு 6", "வார்டு 7", "வார்டு 8", "வார்டு 9", "வார்டு 10", "வார்டு 11", "வார்டு 12", "வார்டு 13", "வார்டு 14", "வார்டு 15", "வார்டு 16", "வார்டு 17", "வார்டு 18", "வார்டு 19", "வார்டு 20", "வார்டு 21", "வார்டு 22", "வார்டு 23", "வார்டு 24", "வார்டு 25", "வார்டு 26", "வார்டு 27"]
};

const postingData = {
    "கிளை 1": ["செயலாளர்", "இணை செயலாளர்", "பொருளாளர்", "துணை செயலாளர் 1", "துணை செயலாளர் 2", "செயற்குழு உறுப்பினர் 1", "செயற்குழு உறுப்பினர் 2", "செயற்குழு உறுப்பினர் 3", "செயற்குழு உறுப்பினர் 4", "செயற்குழு உறுப்பினர் 5", "செயற்குழு உறுப்பினர் 6", "செயற்குழு உறுப்பினர் 7", "செயற்குழு உறுப்பினர் 8", "செயற்குழு உறுப்பினர் 9", "செயற்குழு உறுப்பினர் 10", "IT WING", "BLA 1", "BLA 2", "BLA 3", "BLA 4", "BLA 5", "BLA 6", "BST 1", "BST 2", "BST 3", "BST 4", "BST 5"],
    "கிளை 2": ["செயலாளர்", "இணை செயலாளர்", "பொருளாளர்", "துணை செயலாளர் 1", "துணை செயலாளர் 2", "செயற்குழு உறுப்பினர் 1", "செயற்குழு உறுப்பினர் 2", "செயற்குழு உறுப்பினர் 3", "செயற்குழு உறுப்பினர் 4", "செயற்குழு உறுப்பினர் 5", "செயற்குழு உறுப்பினர் 6", "செயற்குழு உறுப்பினர் 7", "செயற்குழு உறுப்பினர் 8", "செயற்குழு உறுப்பினர் 9", "செயற்குழு உறுப்பினர் 10", "IT WING", "BLA 1", "BLA 2", "BLA 3", "BLA 4", "BLA 5", "BLA 6", "BST 1", "BST 2", "BST 3", "BST 4", "BST 5"],
    "கிளை 3": ["செயலாளர்", "இணை செயலாளர்", "பொருளாளர்", "துணை செயலாளர் 1", "துணை செயலாளர் 2", "செயற்குழு உறுப்பினர் 1", "செயற்குழு உறுப்பினர் 2", "செயற்குழு உறுப்பினர் 3", "செயற்குழு உறுப்பினர் 4", "செயற்குழு உறுப்பினர் 5", "செயற்குழு உறுப்பினர் 6", "செயற்குழு உறுப்பினர் 7", "செயற்குழு உறுப்பினர் 8", "செயற்குழு உறுப்பினர் 9", "செயற்குழு உறுப்பினர் 10", "IT WING", "BLA 1", "BLA 2", "BLA 3", "BLA 4", "BLA 5", "BLA 6", "BST 1", "BST 2", "BST 3", "BST 4", "BST 5"],
    "வார்டு": ["செயலாளர்", "இணை செயலாளர்", "பொருளாளர்", "துணை செயலாளர் 1", "துணை செயலாளர் 2", "செயற்குழு உறுப்பினர் 1", "செயற்குழு உறுப்பினர் 2", "செயற்குழு உறுப்பினர் 3", "செயற்குழு உறுப்பினர் 4", "செயற்குழு உறுப்பினர் 5", "செயற்குழு உறுப்பினர் 6", "செயற்குழு உறுப்பினர் 7", "செயற்குழு உறுப்பினர் 8", "செயற்குழு உறுப்பினர் 9", "செயற்குழு உறுப்பினர் 10", "BLA 1", "BLA 2", "BLA 3", "BLA 4", "BLA 5", "BLA 6"],
};

export default function RegistrationForm({ onSuccess, onBack }) {
    const [formData, setFormData] = useState({
        taluka: '', village: '', posting: '', subPosting: '', 
        specification: '', oldBooth: '', newBooth: '',
        name: '', fatherName: '', phone: '', dob: '', bloodGroup: '',
        education: '', occupation: '', community: '',
        aadhar: '', voterId: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const dataToSend = { ...formData };
        if (formData.subPosting !== "IT WING") dataToSend.specification = "";
        if (!formData.subPosting?.startsWith("BLA")) {
            dataToSend.oldBooth = "";
            dataToSend.newBooth = "";
        }

        try {
            const res = await fetch('https://tvk-kallakuruchi.onrender.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend)
            });
            if (res.ok) onSuccess();
            else alert("தரவைச் சேமிப்பதில் பிழை!");
        } catch (err) {
            alert("சர்வர் இணைப்பு தோல்வி!");
        }
    };

    const inputStyle = { borderRadius: '8px', border: '1px solid #ced4da', padding: '10px', fontSize: '14px', background: '#fcfcfc' };

    return (
        <div className="min-vh-100 w-100 py-4" style={{ backgroundColor: '#FFD700' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <button onClick={onBack} className="btn btn-light shadow-sm mb-3 rounded-pill text-danger fw-bold px-3">
                    ← முகப்பு பக்கம்
                </button>

                <div className="card border-0 rounded-4 shadow-lg overflow-hidden">
                    <div className="p-4 text-center text-white bg-danger">
                        <h4 className="fw-bold mb-0">நிர்வாகிகள் பதிவு</h4>
                        <p className="small opacity-75 mt-1">தமிழக வெற்றி கழகம்</p>
                    </div>

                    <form onSubmit={handleSubmit} className="card-body p-4 bg-white">
                        <div className="row g-3">
                            {/* இருப்பிட விவரங்கள் */}
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">தாலுகா *</label>
                                <select required className="form-select" style={inputStyle} value={formData.taluka} onChange={(e) => setFormData({...formData, taluka: e.target.value, village: ''})}>
                                    <option value="">தேர்வு செய்க</option>
                                    {Object.keys(talukaData).map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">கிராமம்/வார்டு *</label>
                                <select required className="form-select" style={inputStyle} disabled={!formData.taluka} value={formData.village} onChange={(e) => setFormData({...formData, village: e.target.value})}>
                                    <option value="">தேர்வு செய்க</option>
                                    {formData.taluka && talukaData[formData.taluka].map(v => <option key={v} value={v}>{v}</option>)}
                                </select>
                            </div>

                            {/* பதவி விவரங்கள் */}
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">பொறுப்பு *</label>
                                <select required className="form-select" style={inputStyle} value={formData.posting} onChange={(e) => setFormData({...formData, posting: e.target.value, subPosting: ''})}>
                                    <option value="">தேர்வு செய்க</option>
                                    {Object.keys(postingData).map(p => <option key={p} value={p}>{p}</option>)}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">பதவி *</label>
                                <select required className="form-select" style={inputStyle} disabled={!formData.posting} value={formData.subPosting} onChange={(e) => setFormData({...formData, subPosting: e.target.value})}>
                                    <option value="">தேர்வு செய்க</option>
                                    {formData.posting && postingData[formData.posting].map(sp => <option key={sp} value={sp}>{sp}</option>)}
                                </select>
                            </div>

                            {formData.subPosting === "IT WING" && (
                                <div className="col-12">
                                    <label className="form-label small fw-bold">சிறப்புத் திறன் (Specification) *</label>
                                    <input required type="text" className="form-control" style={inputStyle} placeholder="எ.கா: Social Media, Graphics" value={formData.specification} onChange={(e) => setFormData({...formData, specification: e.target.value})} />
                                </div>
                            )}

                            {formData.subPosting?.startsWith("BLA") && (
                                <>
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold text-primary">பழைய பூத் எண் *</label>
                                        <input required type="number" className="form-control" style={{...inputStyle, borderColor: '#0d6efd'}} value={formData.oldBooth} onChange={(e) => setFormData({...formData, oldBooth: e.target.value})} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold text-primary">புதிய பூத் எண் *</label>
                                        <input required type="number" className="form-control" style={{...inputStyle, borderColor: '#0d6efd'}} value={formData.newBooth} onChange={(e) => setFormData({...formData, newBooth: e.target.value})} />
                                    </div>
                                </>
                            )}

                            <hr />
                            <h6 className="fw-bold text-danger">தனிப்பட்ட விவரங்கள்</h6>

                            <div className="col-md-6">
                                <label className="form-label small fw-bold">முழு பெயர் *</label>
                                <input required className="form-control" style={inputStyle} placeholder="பெயர்" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">தந்தை பெயர் *</label>
                                <input required className="form-control" style={inputStyle} placeholder="தந்தை பெயர்" onChange={(e) => setFormData({...formData, fatherName: e.target.value})} />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-bold">பிறந்த தேதி *</label>
                                <input required type="date" className="form-control" style={inputStyle} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">இரத்த வகை *</label>
                                <select required className="form-select" style={inputStyle} onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}>
                                    <option value="">தேர்வு செய்க</option>
                                    {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-bold">கல்வித் தகுதி *</label>
                                <input required className="form-control" style={inputStyle} placeholder="எ.கா: B.A, 12th" onChange={(e) => setFormData({...formData, education: e.target.value})} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">தொழில் *</label>
                                <input required className="form-control" style={inputStyle} placeholder="தொழில்" onChange={(e) => setFormData({...formData, occupation: e.target.value})} />
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-bold">சமூக உட்பிரிவு *</label>
                                <input required className="form-control" style={inputStyle} placeholder="சமூக உட்பிரிவு" onChange={(e) => setFormData({...formData, community: e.target.value})} />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-bold">தொலைபேசி எண் *</label>
                                <input required type="tel" maxLength="10" className="form-control" style={inputStyle} placeholder="Mobile Number" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">ஆதார் எண் *</label>
                                <input required type="text" maxLength="12" className="form-control" style={inputStyle} placeholder="12 இலக்க எண்" onChange={(e) => setFormData({...formData, aadhar: e.target.value})} />
                            </div>
                            <div className="col-12">
                                <label className="form-label small fw-bold">வாக்காளர் அடையாள அட்டை எண் *</label>
                                <input required className="form-control" style={inputStyle} placeholder="Voter ID Number" onChange={(e) => setFormData({...formData, voterId: e.target.value})} />
                            </div>

                            <button type="submit" className="btn btn-danger w-100 fw-bold py-3 mt-3 rounded-pill shadow">பதிவு செய்க</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
