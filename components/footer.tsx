'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube, Instagram, ExternalLink } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1d21] text-gray-400 text-sm border-t-4 border-[#0056b3]">
            {/* Main Footer Content */}
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Company Profile */}
                    <div className="space-y-6">
                        <h3 className="text-white text-lg font-bold uppercase tracking-wider border-b border-gray-700 pb-2">About Us</h3>
                        <p className="leading-relaxed">
                            Megha Engineering & Enterprises has been a pioneer in power infrastructure manufacturing since <span className="text-white font-bold">2011</span>. We specialize in high-voltage switchgear, transmission line materials, and custom fabrication.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="https://www.facebook.com/p/Megha-Engineering-Aurangabad-100047026466226" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-[#0056b3] text-white transition-colors"><Facebook size={18} /></a>
                            <a href="https://www.instagram.com/meghaenterprisesc26/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-[#E4405F] text-white transition-colors"><Instagram size={18} /></a>
                            <a href="https://www.linkedin.com/company/megha-enterprises" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-[#0077b5] text-white transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white text-lg font-bold uppercase tracking-wider border-b border-gray-700 pb-2">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2">» Our Story</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors flex items-center gap-2">» Product Catalog</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors flex items-center gap-2">» Careers</Link></li>
                            <li><Link href="/downloads" className="hover:text-white transition-colors flex items-center gap-2">» Brochure Download</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors flex items-center gap-2">» FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services / Products */}
                    <div className="space-y-6">
                        <h3 className="text-white text-lg font-bold uppercase tracking-wider border-b border-gray-700 pb-2">Our Solutions</h3>
                        <ul className="space-y-3">
                            <li className="hover:text-white transition-colors">» Electrical Contractors</li>
                            <li className="hover:text-white transition-colors">» HT/LT Line Erection</li>
                            <li className="hover:text-white transition-colors">» Substation Maintenance</li>
                            <li className="hover:text-white transition-colors">» Solar Plant Installation</li>
                            <li className="hover:text-white transition-colors">» Structural Fabrication</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Map */}
                    <div className="space-y-6">
                        <h3 className="text-white text-lg font-bold uppercase tracking-wider border-b border-gray-700 pb-2">Reach Us</h3>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="flex-shrink-0 text-[#0056b3] mt-1" size={18} />
                                <p>
                                    Plot No. C-26, MIDC Waluj,<br />
                                    Chhatrapati Sambhajinagar (Aurangabad),<br />
                                    Maharashtra - 431136, India
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#0056b3] mt-1"><Phone size={16} /></span>
                                <span className="text-gray-400 text-sm">+91 93251 47803/05/07</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-[#0056b3] mt-1"><Mail size={16} /></span>
                                <span className="text-gray-400 text-sm">info@meghaenterprises.in</span>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7563530879616!2d75.239585!3d19.8359105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b0b5c2e26bb%3A0xa3c753039e4c299!2sMEGHA%20ENGINEERING!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="220"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg mt-4"
                        />

                    </div>
                </div>

            </div>

            {/* Bottom Copyright Bar */}
            <div className="bg-black py-4 border-t border-gray-800">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p>&copy; {currentYear} Megha Enterprises. All Rights Reserved.</p>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <p>Designed by <a href="https://himanshu-jha.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0056b3] transition-colors font-bold underline underline-offset-4 decoration-[#0056b3]">Himanshu Jha</a></p>
                    </div>
                    <div className="flex items-center gap-6 mt-2 md:mt-0">
                        <span>W3C Valid XHTML</span>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
