'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative min-h-[600px] w-full bg-gray-900 border-b-8 border-[#0056b3] flex flex-col justify-center">
            {/* Background Video liquid */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/hero-section.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 py-12 md:py-0 w-full flex flex-col justify-center flex-grow">
                <div className="max-w-3xl text-white mt-12 md:mt-0">
                    <div className="inline-block bg-[#0056b3] px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                        ISO 9001:2015 Certified
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight drop-shadow-xl">
                        Premier Electrical, Solar & <br />
                        <span className="text-yellow-400">Fabrication Solutions</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light border-l-4 border-[#0056b3] pl-4 drop-shadow-md max-w-2xl">
                        Leading manufacturer of High-Voltage Isolators, Industrial Fabrication, and Solar Infrastructure since 2011. ISO 9001:2015 Certified experts delivering reliability across India.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/#contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#0056b3] hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2">
                                Get a Quote <ArrowRight size={18} />
                            </button>
                        </Link>
                        <Link href="/products" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                                View Products
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Trust Badges Strip (Integrated into bottom of Hero) */}
            <div className="relative md:absolute md:bottom-0 md:right-0 z-10 w-full md:w-auto bg-transparent border-t md:border-t-0 md:border-l border-white/20 p-0 md:p-6">
                <div className="max-w-[1920px] mx-auto px-6 md:px-0 py-6 md:py-0 flex flex-wrap md:flex-nowrap justify-around md:justify-end gap-6 md:gap-8">
                    <div className="flex items-center gap-3">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white">2011</div>
                            <div className="text-[10px] md:text-xs font-bold text-gray-300 uppercase">Established</div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px bg-white/20 h-10"></div>
                    <div className="flex items-center gap-3">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white">3000+</div>
                            <div className="text-[10px] md:text-xs font-bold text-gray-300 uppercase">Supply Conn.</div>
                        </div>
                    </div>
                    <div className="hidden md:block w-px bg-white/20 h-10"></div>
                    <div className="flex items-center gap-3">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                            <div className="text-[10px] md:text-xs font-bold text-gray-300 uppercase">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
