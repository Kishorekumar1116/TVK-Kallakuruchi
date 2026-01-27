import React, { useState } from 'react';

export default function AdminLogin({ onLoginSuccess, onBack }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    // Inline style for the custom red card (if not already defined in your CSS)
    const styles = {
        fullRedCard: {
            backgroundColor: '#FF0000',
            padding: '15px',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            border: '2px solid white'
        },
        adminPhoto: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '4px solid #FF0000',
            objectFit: 'cover',
            marginBottom: '-50px', // கார்டுக்கு மேலே பாதி தெரியும்படி வைக்க
            position: 'relative',
            zIndex: '2',
            backgroundColor: 'white'
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.email === "admin@tvk" && credentials.password === "tvk123") {
            onLoginSuccess();
        } else {
            setError("தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்!");
        }
    };

    return (
        <div className="vh-100 w-100 position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#FFD700' }}>
            
            {/* Background Decorations */}
            <div className="position-absolute top-0 start-0 translate-middle p-5 rounded-circle opacity-25" style={{ backgroundColor: '#FF0000', width: '250px', height: '250px' }}></div>
            <div className="position-absolute bottom-0 end-0 p-5 rounded-circle opacity-25" style={{ backgroundColor: '#FF0000', width: '200px', height: '200px', marginRight: '-70px', marginBottom: '-70px' }}></div>

            {/* --- புதிய பகுதி: Admin Photo & Detail Card --- */}
            <div className="mt-auto mb-4 z-1 d-flex flex-column align-items-center w-100" style={{ maxWidth: '400px' }}>
                {/* Admin Image */}
                <img 
                    src="/bharai anna.png"  // இங்கே திரு. விஜய் R. பரணிபாலாஜி அவர்களின் புகைப்பட லிங்க்-ஐ போடவும்
                    alt="Admin" 
                    style={styles.adminPhoto}
                    className="shadow"
                />
                
                {/* Name & Designation Card */}
                <div style={styles.fullRedCard} className="text-center mx-3 pt-5 w-100">
                    <h6 className="fw-bold mb-1 text-white">
                        திரு. விஜய் R. பரணிபாலாஜி, <span style={{ fontSize: '0.75rem' }}>B.A., LL.B.,</span>
                    </h6>
                    <p className="mb-0 fw-bold" style={{ fontSize: '0.7rem', color: '#FFD700', lineHeight: '1.3' }}>
                        மேற்கு மண்டல ஒழுங்கு நடவடிக்கை குழு உறுப்பினர் & <br />
                        மாவட்டக் கழகச் செயலாளர் (கிழக்கு), கள்ளக்குறிச்சி
                    </p>
                </div>
            </div>

            {/* Login Card */}
            <div className="z-1 container d-flex justify-content-center mb-auto">
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ maxWidth: '400px', width: '100%' }}>
                    
                    <div className="p-3 text-center text-white" style={{ background: 'linear-gradient(135deg, #FF0000 0%, #cc0000 100%)' }}>
                        <h5 className="fw-bold mb-0">Admin Login</h5>
                        <p className="small opacity-75 mb-0" style={{fontSize: '0.7rem'}}>நிர்வாகி உள்நுழைவு</p>
                    </div>

                    <div className="card-body p-4 bg-white">
                        {error && (
                            <div className="alert alert-danger py-2 small fw-bold text-center border-0 shadow-sm" style={{ borderRadius: '10px' }}>
                                {error}
                            </div>
                        )}
                        
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label small fw-bold text-muted">Login Id</label>
                                <div className="input-group shadow-sm">
                                    <span className="input-group-text bg-white border-end-0"><i className="bi bi-envelope text-danger"></i></span>
                                    <input 
                                        type="email" 
                                        required 
                                        className="form-control border-start-0 ps-0" 
                                        style={{ fontSize: '14px', height: '40px' }}
                                        onChange={(e) => setCredentials({...credentials, email: e.target.value})} 
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label small fw-bold text-muted">Password</label>
                                <div className="input-group shadow-sm">
                                    <span className="input-group-text bg-white border-end-0"><i className="bi bi-key text-danger"></i></span>
                                    <input 
                                        type="password" 
                                        required 
                                        className="form-control border-start-0 ps-0" 
                                        style={{ fontSize: '14px', height: '40px' }}
                                        onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
                                    />
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-danger w-100 fw-bold py-2 shadow-sm rounded-pill mb-2"
                                style={{ backgroundColor: '#FF0000', border: 'none' }}
                            >
                                LOGIN
                            </button>

                            <button 
                                type="button" 
                                onClick={onBack} 
                                className="btn btn-link w-100 text-muted text-decoration-none small fw-bold"
                            >
                                <i className="bi bi-arrow-left me-1"></i> Back to Home
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="position-absolute bottom-0 mb-3 fw-bold opacity-50" style={{ color: '#FF0000', letterSpacing: '4px', fontSize: '0.6rem' }}>
                T V K • S E C U R E • A C C E S S
            </div>
        </div>
    );
}