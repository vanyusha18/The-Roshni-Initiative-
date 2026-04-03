import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-roshni-sand min-h-screen py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h1 className="text-5xl md:text-6xl font-heading text-roshni-ink text-center mb-16">Get in Touch</h1>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
                        <h2 className="text-3xl font-heading text-roshni-ink mb-8">Send us a message</h2>
                        <form className="space-y-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">Full Name</label>
                                <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-roshni-teal focus:ring-2 focus:ring-roshni-teal/20 outline-none transition-all" placeholder="Your name" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">Email Address</label>
                                <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-roshni-teal focus:ring-2 focus:ring-roshni-teal/20 outline-none transition-all" placeholder="your@email.com" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">Message</label>
                                <textarea rows="4" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-roshni-teal focus:ring-2 focus:ring-roshni-teal/20 outline-none transition-all" placeholder="How can we help?" required></textarea>
                            </div>
                            <button type="button" className="w-full bg-roshni-teal text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-roshni-ink transition-colors shadow-lg shadow-roshni-teal/30 flex justify-center items-center gap-3">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-roshni-ink text-white p-10 rounded-3xl shadow-xl">
                            <h3 className="text-3xl font-heading mb-8 text-roshni-amber">Our Headquarters</h3>
                            <div className="space-y-6">
                                <p className="text-roshni-sand text-lg flex items-start gap-4">
                                    <MapPin className="text-roshni-teal flex-shrink-0 mt-1" />
                                    <span>24/7 Digital Hub, Block A,<br />Bangalore, India 560001</span>
                                </p>
                                <p className="text-roshni-sand text-lg flex items-center gap-4">
                                    <Phone className="text-roshni-teal flex-shrink-0" />
                                    +91 98765 43210
                                </p>
                                <p className="text-roshni-sand text-lg flex items-center gap-4">
                                    <Mail className="text-roshni-teal flex-shrink-0" />
                                    hello@roshni.org
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-[350px] bg-gray-200 rounded-3xl overflow-hidden shadow-xl border border-gray-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.228965882654!2d77.58550181514755!3d12.984180486095932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Roshni HQ Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
