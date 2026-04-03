import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VolunteerPassport() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('roshni_token');
    if(!token) {
      setError("Please register first to view your passport.");
      return;
    }
    
    fetch('http://localhost:5000/api/auth/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => {
      if(!res.ok) throw new Error("Could not fetch profile");
      return res.json();
    })
    .then(data => setUser(data))
    .catch(err => setError(err.message));
  }, []);

  const milestones = ['Registered', 'Verified', 'First Visit', '100 Students', 'Mentor'];

  if (error) return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-2xl text-roshni-ink font-heading mb-4">{error}</h2>
      <button onClick={() => navigate('/register')} className="px-6 py-2 bg-roshni-teal text-white rounded hover:bg-opacity-90">Go to Registration</button>
    </div>
  );
  if (!user) return <div className="text-center py-20 animate-pulse tracking-widest text-roshni-ink">Loading Passport...</div>;

  const currentIdx = milestones.indexOf(user.passportStatus);

  return (
    <div className="min-h-screen bg-roshni-sand p-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden shadow-roshni-ink/10">
        <div className="bg-gradient-to-r from-roshni-teal to-roshni-green p-10 text-white relative">
          <div className="absolute top-0 right-0 p-10 opacity-20 transform rotate-12 scale-150">
             {/* A decorative visa stamp icon representation */}
             <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>
          </div>
          <h2 className="text-4xl font-heading mb-2 relative z-10">Impact Passport</h2>
          <p className="text-white/80 font-sans tracking-wider uppercase text-sm relative z-10">Volunteer ID: {user._id.slice(-8).toUpperCase()}</p>
        </div>
        
        <div className="p-10 pb-20">
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-sans text-roshni-ink mb-2">Welcome to the field, {user.name}</h3>
            <p className="text-roshni-ink/70 text-lg">You have transformed the lives of <span className="font-bold text-roshni-green">{user.studentsTaught}</span> students so far.</p>
          </div>

          {/* Timeline UI */}
          <div className="relative">
            <div className="hidden md:block absolute top-[28px] left-8 right-8 h-1 bg-gray-200 z-0"></div>
            <div className="hidden md:block absolute top-[28px] left-8 h-1 bg-roshni-green z-0 transition-all duration-1000 ease-out" style={{ width: `calc(${(currentIdx / (milestones.length - 1)) * 100}% - 2rem)` }}></div>
            
            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
              {milestones.map((ms, idx) => {
                const isCompleted = idx <= currentIdx;
                const isCurrent = idx === currentIdx;
                
                return (
                  <div key={ms} className="flex md:flex-col items-center gap-4 md:gap-4 group z-10 relative bg-white md:bg-transparent">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 border-4 border-white ${isCurrent ? 'scale-110 ring-4 ring-roshni-green/30 bg-roshni-amber text-roshni-ink' : ''} ${isCompleted && !isCurrent ? 'bg-roshni-green text-white' : ''} ${!isCompleted ? 'bg-gray-100 text-gray-400' : ''}`}>
                      {isCompleted && !isCurrent ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : <span className="font-bold font-sans text-xl">{idx + 1}</span>}
                    </div>
                    <span className={`font-sans font-semibold tracking-wide md:text-center ${isCompleted ? 'text-roshni-ink' : 'text-gray-400'} ${isCurrent ? 'text-roshni-green' : ''}`}>
                      {ms}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
