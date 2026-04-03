import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Registration failed');

      localStorage.setItem('roshni_token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex-grow bg-roshni-sand flex items-center justify-center p-6 py-20 relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-roshni-amber/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-roshni-teal/10 rounded-full blur-3xl"></div>

      <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl shadow-roshni-ink/5 max-w-lg w-full relative z-10 border border-gray-100">
        <h2 className="text-4xl font-heading text-roshni-ink mb-2">Join the Movement</h2>
        <p className="text-gray-500 font-sans mb-8">Create your volunteer passport</p>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-6 text-sm">{error}</div>}

        <form onSubmit={step === 3 ? handleRegister : handleNext} className="space-y-6">
          <div className="min-h-[100px]">
            {step === 1 && (
              <div className="animate-fade-in transition-all">
                <label className="block text-roshni-ink font-sans font-bold mb-3 uppercase tracking-wider text-sm">What's your name?</label>
                <input autoFocus type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded focus:bg-white focus:border-roshni-teal focus:ring-2 focus:ring-roshni-teal/20 outline-none transition-all text-lg" placeholder="Priya Sharma" />
              </div>
            )}
            {step === 2 && (
              <div className="animate-fade-in transition-all">
                <label className="block text-roshni-ink font-sans font-bold mb-3 uppercase tracking-wider text-sm">Your Email Address</label>
                <input autoFocus type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded focus:bg-white focus:border-roshni-teal focus:ring-2 focus:ring-roshni-teal/20 outline-none transition-all text-lg" placeholder="priya@example.com" />
              </div>
            )}
            {step === 3 && (
              <div className="animate-fade-in transition-all">
                <label className="block text-roshni-ink font-sans font-bold mb-3 uppercase tracking-wider text-sm">Create a Password</label>
                <input autoFocus type="password" required value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded focus:bg-white focus:border-roshni-teal focus:ring-2 focus:ring-roshni-teal/20 outline-none transition-all text-lg" placeholder="••••••••" />
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
            <div className="flex gap-2">
              <span className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-roshni-teal' : 'bg-gray-200'}`}></span>
              <span className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-roshni-teal' : 'bg-gray-200'}`}></span>
              <span className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-roshni-teal' : 'bg-gray-200'}`}></span>
            </div>
            <button type="submit" className="bg-roshni-teal text-white px-8 py-3 rounded-md font-bold font-sans tracking-wider hover:-translate-y-0.5 hover:shadow-lg hover:shadow-roshni-teal/40 transition-all">
              {step === 3 ? 'Get Passport' : 'Next →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
