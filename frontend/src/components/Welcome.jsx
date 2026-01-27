import React, { useState } from 'react';

const Welcome = ({ onStart, onAdmin }) => {
    const [showWelcome, setShowWelcome] = useState(false);

    const styles = {
        bgRed: { backgroundColor: '#e70000' },
        bgYellow: { backgroundColor: '#ffdc19' },
        textRed: { color: '#FF0000' },

        // Splash Screen-க்கான பிரத்யேக எழுத்து ஸ்டைல் (பெட்டி இல்லாமல்)
        splashTitle: {
            fontSize: '2.2rem',
            fontWeight: '800',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #FF0000 0%, #a30000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Arial Black', sans-serif",
            lineHeight: '1.2',
            marginBottom: '5px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        },
        splashTagline: {
            color: '#e70000',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            margin: '0',
            textTransform: 'uppercase'
        },

        // பழைய Welcome Page-க்கான பெட்டி ஸ்டைல் (அப்படியே இருக்கும்)
        nameContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '10px 30px',
            borderRadius: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '2px solid white',
            marginBottom: '5px',
            display: 'inline-block'
        },
        tvkGradientText: {
            fontSize: '1.5rem',
            fontWeight: '700',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #FF0000 0%, #FFD700 50%, #FF0000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Arial Black', sans-serif",
            lineHeight: '1.1',
            marginBottom: '5px'
        },
        taglineText: {
            color: '#e70000',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            margin: '0'
        },

        // Unique & Stylish Button
        enterBtn: {
            background: 'linear-gradient(145deg, #FF0000, #b30000)',
            color: 'white',
            padding: '15px 45px',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            border: 'none',
            boxShadow: '0 10px 25px rgba(231, 0, 0, 0.4)',
            letterSpacing: '1px',
            cursor: 'pointer',
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderBottom: '5px solid #800000'
        },

        fullRedCard: {
            backgroundColor: '#FF0000',
            borderRadius: '10px',
            padding: '9px 20px',
            maxWidth: '550px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            border: '3px solid white'
        },
        rectImage: {
            width: '160px',
            height: 'auto',
            marginBottom: '8px'
        },
        logoCircle: {
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            border: '3px solid white',
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
            overflow: 'hidden',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        profileImg: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    };

    if (!showWelcome) {
        return (
            <div className="vh-100 w-100 d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden" style={styles.bgYellow}>
                {/* Background Ornament */}
                <div className="position-absolute top-0 start-0 translate-middle p-5 rounded-circle opacity-25" style={{ ...styles.bgRed, width: '300px', height: '300px' }}></div>

                <div className="z-1 text-center px-3 d-flex flex-column align-items-center">
                    {/* 1. முதலில் படம் */}
                    <img
                        src="/logo tvk.jpeg"
                        alt="Logo"
                        className="animate__animated animate__zoomIn shadow-lg mb-4"
                        style={{ width: '200px', height: '200px', borderRadius: '50%', border: '6px solid white' }}
                    />

                    {/* 2. பெட்டி இல்லாமல் நேரடியாக பெயர் மற்றும் வாசகம் */}
                    <div className="animate__animated animate__fadeInUp">
                        <h1 style={styles.splashTitle}>தமிழக வெற்றிக் கழகம்</h1>
                        <p style={styles.splashTagline}>பிறப்பொக்கும் எல்லா உயிர்க்கும்</p>
                    </div>

                    {/* 3. தொகுதி விவரம் */}
                    <p className="fw-bold text-dark mt-4 mb-2 shadow-sm" style={{ fontSize: '1.3rem', letterSpacing: '1px' }}>
                        திருக்கோவிலூர் சட்டமன்றத் தொகுதி
                    </p>

                    {/* 4. Unique Button */}
                    <button
                        style={styles.enterBtn}
                        onClick={() => setShowWelcome(true)}
                        // animate__shakeX என்பது இடவலமாக அதிரும், animate__infinite என்பது தொடர்ந்து நடக்கும்
                        className="animate__animated animate__shakeX animate__infinite animate__slow"
                    >
                        உள்ளே நுழையவும்
                        <i className="bi bi-arrow-right-circle-fill ms-2"></i>
                    </button>
                </div>

                <div className="position-absolute bottom-0 mb-4 fw-bold opacity-50" style={{ color: '#FF0000', letterSpacing: '5px', fontSize: '0.7rem' }}>
                    T V K • T H I R U K O I L U R
                </div>
            </div>
        );
    }

    // மெயின் Welcome Screen (மாற்றங்கள் இன்றி அப்படியே)
    return (
        <div className="vh-100 w-100 d-flex flex-column align-items-center justify-content-center position-relative overflow-hidden" style={styles.bgYellow}>
            <div className="position-absolute top-0 start-0 translate-middle p-5 rounded-circle opacity-25" style={{ ...styles.bgRed, width: '250px', height: '250px' }}></div>
            <div className="position-absolute bottom-0 end-0 p-5 rounded-circle opacity-25" style={{ ...styles.bgRed, width: '200px', height: '200px', marginRight: '-70px', marginBottom: '-70px' }}></div>

            <div className="z-1 text-center px-3 mt-auto w-100">
                <div className="mb-4 mt-5 d-flex flex-column align-items-center">
                    <img src="/leaders.png" alt="TVK Banner" style={styles.rectImage} />
                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <div style={styles.logoCircle}>
                            <img src="/tvk1.jpg" alt="TVK Profile 1" style={styles.profileImg} />
                        </div>
                        <div style={styles.logoCircle}>
                            <img src="/banna1.jpeg" alt="TVK Profile 2" style={styles.profileImg} />
                        </div>
                         <div style={styles.logoCircle}>
                            <img src="/bharai anna.png" alt="TVK Profile 2" style={styles.profileImg} />
                        </div>
                    </div>
                </div>

                <div style={styles.nameContainer} className="animate__animated animate__zoomIn">
                    <h1 style={styles.tvkGradientText}>தமிழக வெற்றிக் கழகம்</h1>
                    <p style={styles.taglineText}>பிறப்பொக்கும் எல்லா உயிர்க்கும்</p>
                </div>

                <p className="fw-bold text-dark mb-4 tracking-widest" style={{ fontSize: '1rem', opacity: '0.8' }}>
                    திருக்கோவிலூர் சட்டமன்றத் தொகுதி
                </p>

                <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                    <button onClick={onStart} className="btn btn-md px-3 py-2 rounded-pill fw-bold shadow border-0 bg-white text-danger d-flex align-items-center gap-2">
                        <i className="bi bi-people-fill"></i>
                        <span>நிர்வாகிகள் பதிவு</span>
                    </button>
                    <button onClick={onAdmin} className="btn btn-md px-3 py-2 rounded-pill fw-bold shadow border-0 text-white d-flex align-items-center gap-2" style={{ backgroundColor: '#FF0000' }}>
                        <i className="bi bi-shield-lock-fill"></i>
                        <span>Admin Login</span>
                    </button>
                </div>
            </div>

            <div className="mt-auto mb-5 z-1">
                <div style={styles.fullRedCard} className="text-center mx-3">
                    <h6 className="fw-bold mb-1 text-white">திரு. விஜய் R. பரணிபாலாஜி, <span style={{ fontSize: '0.75rem' }}>B.A., LL.B.,</span></h6>
                    <p className="mb-0 fw-bold" style={{ fontSize: '0.7rem', color: '#FFD700', lineHeight: '1.3' }}>
                        மேற்கு மண்டல ஒழுங்கு நடவடிக்கை குழு உறுப்பினர் & <br />
                        மாவட்டக் கழகச் செயலாளர் (கிழக்கு), கள்ளக்குறிச்சி
                    </p>
                </div>
            </div>

            <div className="mb-4 fw-bold opacity-50" style={{ ...styles.textRed, letterSpacing: '4px', fontSize: '0.6rem' }}>
                T H I R U K O I L U R • D I V I S I O N
            </div>
        </div>
    );
};

export default Welcome;