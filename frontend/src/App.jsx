import React, { useState } from 'react';
import Welcome from './components/Welcome';
import RegistrationForm from './components/RegistrationForm';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin'; 

function App() {
  const [view, setView] = useState('welcome');

  return (
    <div className="container-fluid p-0">
      
      {/* Welcome Page */}
      {view === 'welcome' && (
        <Welcome 
          onStart={() => setView('form')} 
          onAdmin={() => setView('admin-login')} 
        />
      )}
      
      {/* Registration Form with Back Button Logic */}
      {view === 'form' && (
        <RegistrationForm 
          onSuccess={() => setView('thanks')} 
          onBack={() => setView('welcome')} 
        />
      )}
      
      {/* Admin Login */}
      {view === 'admin-login' && (
        <AdminLogin 
          onLoginSuccess={() => setView('admin-dashboard')} 
          onBack={() => setView('welcome')} 
        />
      )}
      
      {/* Admin Dashboard */}
      {view === 'admin-dashboard' && (
        <AdminDashboard onBack={() => setView('welcome')} />
      )}
      
      {/* Success Page */}
      {view === 'thanks' && (
        <div className="vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ backgroundColor: '#FFD700' }}>
          <div className="position-absolute top-0 start-0 translate-middle p-5 rounded-circle opacity-25" style={{ backgroundColor: '#FF0000', width: '300px', height: '300px' }}></div>
          <div className="position-absolute bottom-0 end-0 p-5 rounded-circle opacity-25" style={{ backgroundColor: '#FF0000', width: '250px', height: '250px', marginRight: '-50px', marginBottom: '-50px' }}></div>

          <div className="z-1 text-center px-4" style={{ maxWidth: '500px' }}>
            <div className="bg-white p-5 shadow-lg animate__animated animate__zoomIn" style={{ borderRadius: '40px', borderBottom: '10px solid #FF0000' }}>
              <div className="d-inline-flex align-items-center justify-content-center mb-4 shadow" style={{ width: '100px', height: '110px', backgroundColor: '#FF0000', borderRadius: '20%', overflow: 'hidden' }}>
                <img src="/bharai anna.png" alt="Success" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h1 className="fw-black mb-2" style={{ color: '#FF0000', fontSize: '2.5rem' }}>மிக்க நன்றி!</h1>
              <div className="mb-4">
                <p className="h5 fw-bold text-dark mb-1">பதிவு வெற்றிகரமாக முடிந்தது.</p>
                <p className="text-muted small">தங்கள் விவரங்கள் பாதுகாப்பாக சேமிக்கப்பட்டது.</p>
              </div>
              <button onClick={() => setView('welcome')} className="btn btn-lg w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#FF0000', color: 'white', border: 'none' }}>
                <i className="bi bi-house-door-fill"></i> முகப்புப் பக்கம் (Home)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;