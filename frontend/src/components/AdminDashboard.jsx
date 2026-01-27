import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

export default function AdminDashboard({ onBack }) {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/members')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setMembers(data);
                else setMembers([]);
            })
            .catch(err => console.error("Admin Fetch Error:", err));
    }, []);

    // Helper to convert the local logo to Base64 for Word compatibility
    const getBase64Image = async (url) => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            console.error("Image error:", error);
            return null;
        }
    };

    const generateWordFile = async (data, title) => {
        if (!data || data.length === 0) return alert("தகவல்கள் எதுவும் இல்லை!");
        
        // Ensure this path matches your public folder exactly
        const logoBase64 = await getBase64Image('/top_iamage-removebg-preview.png');

        let tableHTML = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'>
            <style>
                body { font-family: 'Arial Unicode MS', 'Latha', sans-serif; }
                .header-section { text-align: center; margin-bottom: 20px; }
                .title-red { color: #FF0000; font-size: 15pt; font-weight: bold; margin-bottom: 0px; }
                .sub-title { font-size: 8pt; font-weight: bold; margin-top: 0px; }
                .incharge-name { font-size: 10pt; font-weight: bold; margin-top: 10px; margin-bottom: 0px; }
                .incharge-post { color: #b22222; font-size: 7pt; font-weight: bold; margin-top: 0px; }
                table { border-collapse: collapse; width: 100%; margin-top: 2px; }
                th, td { border: 1px solid #000; padding: 5px; text-align: center; font-size: 6pt; }
                th { background-color: #ff5353; color: white; }
            </style>
            </head>
            <body>
                <div class="header-section">
                    ${logoBase64 ? `<img src="${logoBase64}" width="250" style="width:450pt; height:auto; display:block; margin: 0 auto;"/>` : ''}
                    <div class="title-red">தமிழக வெற்றிக் கழகம்</div>
                    <div class="sub-title">திருக்கோவிலூர் சட்டமன்றத் தொகுதி</div>
                    
                    <div class="incharge-name">திரு. விஜய் R. பரணிபாலாஜி, B.A., LL.B.,</div>
                    <div class="incharge-post">
                        மேற்கு மண்டல ஒழுங்கு நடவடிக்கை குழு உறுப்பினர் & <br/>
                        மாவட்டக் கழகச் செயலாளர் (கிழக்கு), கள்ளக்குறிச்சி
                    </div>
                   
                    <h5 style="text-align:center; ">${title}</h5>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>வ.எண்</th>
                            <th>பெயர்</th>
                            <th>தந்தை பெயர்</th>
                            <th>பிறந்த தேதி</th>
                            <th>இரத்த வகை</th>
                            <th>கல்வி</th>
                            <th>தொழில்</th>
                            <th>பதவி</th>
                            <th>துணை பதவி</th>
                            <th>தொலைபேசி</th>
                            <th>ஆதார்</th>
                            <th>வாக்காளர் ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map((m, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${m.name || "-"}</td>
                                <td>${m.fatherName || "-"}</td>
                                <td>${m.dob || "-"}</td>
                                <td>${m.bloodGroup || "-"}</td>
                                <td>${m.education || "-"}</td>
                                <td>${m.occupation || "-"}</td>
                                <td>${m.posting || "-"}</td>
                                <td>${m.subPosting || "-"}</td>
                                <td>${m.phone || "-"}</td>
                                <td>${m.aadhar || "-"}</td>
                                <td>${m.voterId || "-"}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </body>
            </html>
        `;

        const blob = new Blob(['\ufeff' + tableHTML], { type: 'application/msword' });
        saveAs(blob, `${title}_Report.doc`);
    };

    const groupedData = (members || []).reduce((acc, member) => {
        const tKey = member.taluka || "Unknown";
        const vKey = member.village || "Unknown";
        if (!acc[tKey]) acc[tKey] = {};
        if (!acc[tKey][vKey]) acc[tKey][vKey] = [];
        acc[tKey][vKey].push(member);
        return acc;
    }, {});

    return (
        <div className="min-vh-100 w-100 pb-5" style={{ backgroundColor: '#FFD700' }}>
            <div className="container-fluid pt-4 px-2">

                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded shadow bg-danger border border-white">
                    <h5 className="text-white fw-bold mb-0">நிர்வாகப் பலகை (Admin Panel)</h5>
                    <div className="d-flex gap-2">
                        <button onClick={() => generateWordFile(members, "முழு உறுப்பினர்கள் பட்டியல்")} className="btn btn-dark btn-sm rounded-pill px-3 fw-bold">
                            Full Report Download
                        </button>
                        <button onClick={onBack} className="btn btn-light btn-sm rounded-pill px-4 text-danger fw-bold">Back</button>
                    </div>
                </div>

                {/* Main Data View */}
                {Object.keys(groupedData).map((taluka) => (
                    <div key={taluka} className="mb-5 bg-white rounded-4 p-3 shadow border-bottom border-danger border-5">
                        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                            <h5 className="text-danger fw-bold">தாலுகா: {taluka}</h5>
                            <button 
                                onClick={() => {
                                    const allTalukaMembers = Object.values(groupedData[taluka]).flat();
                                    generateWordFile(allTalukaMembers, `தாலுகா: ${taluka}`);
                                }}
                                className="btn btn-outline-danger btn-sm rounded-pill fw-bold">
                                Download {taluka}
                            </button>
                        </div>

                        {Object.keys(groupedData[taluka]).map((village) => (
                            <div key={village} className="mb-4 border rounded overflow-hidden shadow-sm">
                                <div className="bg-dark text-white p-2 d-flex justify-content-between align-items-center">
                                    <span className="fw-bold">கிராமம் / வார்டு: {village}</span>
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="badge bg-warning text-dark">{groupedData[taluka][village].length} நபர்</span>
                                        <button 
                                            onClick={() => generateWordFile(groupedData[taluka][village], `கிராமம்: ${village}`)}
                                            className="btn btn-light btn-sm fw-bold px-3">
                                            Download
                                        </button>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-sm align-middle text-center mb-0">
                                        <thead className="table-secondary small fw-bold" style={{ fontSize: '10px' }}>
                                            <tr>
                                                <th>பெயர்</th>
                                                <th>தந்தை பெயர்</th>
                                                <th>பிறந்த தேதி</th>
                                                <th>இரத்த வகை</th>
                                                <th>கல்வி</th>
                                                <th>தொழில்</th>
                                                <th>சமூக உட்பிரிவு</th>
                                                <th>பதவி</th>
                                                <th>துணை பதவி</th>
                                                <th>தொலைபேசி</th>
                                                <th>ஆதார்</th>
                                                <th>வாக்காளர் ID</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ fontSize: '10px' }}>
                                            {groupedData[taluka][village].map((m, idx) => (
                                                <tr key={idx}>
                                                    <td className="fw-bold">{m.name}</td>
                                                    <td>{m.fatherName || "-"}</td>
                                                    <td>{m.dob || "-"}</td>
                                                    <td className="text-danger fw-bold">{m.bloodGroup || "-"}</td>
                                                    <td>{m.education || "-"}</td>
                                                    <td>{m.occupation || "-"}</td>
                                                    <td>{m.community || "-"}</td>
                                                    <td><span className="badge bg-danger">{m.posting}</span></td>
                                                    <td>{m.subPosting}</td>
                                                    <td className="fw-bold">{m.phone}</td>
                                                    <td>{m.aadhar}</td>
                                                    <td className="fw-bold text-success">{m.voterId}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}