import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { NewsSection } from '@/components/sections/news';
import { ContactSection } from '@/components/sections/contact';
// Removed: ControlSection (Modern aesthetic not needed)

import { ProductsSection } from '@/components/sections/products';
import { StatsSection } from '@/components/sections/stats'; // Now behaves as Trust Section
import { ProjectsList } from '@/components/sections/projects-list';

// WhatsApp Widget
// import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
    return (
        <div className="flex flex-col bg-white">
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "IndustrialBusiness", // or LocalBusiness / Organization
                        "name": "Megha Enterprises",
                        "image": "https://www.meghaenterprises.in/megha_logo.png",
                        "description": "Leading manufacturer of High Voltage Isolators (11kV-132kV), Solar Plant Installations, and Industrial Fabrication in Aurangabad.",
                        "url": "https://www.meghaenterprises.in",
                        "telephone": "+919325147803",
                        "email": "info@meghaenterprises.in",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Plot C-26, MIDC Waluj",
                            "addressLocality": "Chhatrapati Sambhajinagar (Aurangabad)",
                            "addressRegion": "Maharashtra",
                            "postalCode": "431136",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "19.8340", // Approx coordinates for Waluj, Aurangabad
                            "longitude": "75.2530"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday"
                            ],
                            "opens": "09:00",
                            "closes": "18:00"
                        },
                        "sameAs": [
                            "https://www.facebook.com/p/Megha-Engineering-Aurangabad-100047026466226",
                            "https://www.instagram.com/meghaenterprisesc26/",
                            "https://www.linkedin.com/company/megha-enterprises"
                        ]
                    })
                }}
            />
            <HeroSection />
            <StatsSection /> {/* Why Choose Us + Certifications */}
            <ProductsSection /> {/* Grid + Tabs */}

            <AboutSection /> {/* Should be updated to be more 'Our Story' later if needed, but keeping for content */}
            <ServicesSection />

            <NewsSection />
            <ContactSection />


        </div>
    );
}