import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Roboto } from 'next/font/google';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';
import { Toaster } from '@/components/ui/toaster';

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
});

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.meghaenterprises.in'),
    title: {
        default: 'Megha Enterprises | Premier Electrical, Solar & Fabrication Solutions',
        template: '%s | Megha Enterprises'
    },
    description: 'Leading manufacturer and service provider for High Voltage Electrical Components (11kV-132kV), Solar Plant Installations, and Industrial Fabrication in Aurangabad. ISO 9001:2015 Certified experts in HT/LT lines and metal structural engineering.',
    keywords: [
        'Electricals',
        'Fabrication',
        'Solar Plant Installation',
        'High Voltage Isolators',
        'Air Break Switches',
        'Transmission Line Materials',
        'Aurangabad Engineering',
        'Solar EPC',
        'Structural Fabrication',
        'Megha Enterprises',
        'Sheet Metal Work',
        'HT Line Erection',
        'Electrical Contractors Maharashtra',
        'Solar Energy Solutions',
        'Industrial Fabrication Aurangabad'
    ],
    authors: [{ name: 'Megha Enterprises' }],
    creator: 'Megha Enterprises',
    publisher: 'Megha Enterprises',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/megha_logo.png',
        shortcut: '/megha_logo.png',
        apple: '/megha_logo.png',
    },
    openGraph: {
        title: 'Megha Enterprises | Electrical, Solar & Fabrication Excellence',
        description: 'ISO 9001:2015 Certified manufacturer of premium high voltage electrical components and solar solutions. Serving state boards and private contractors since 2004.',
        url: 'https://www.meghaenterprises.in',
        siteName: 'Megha Enterprises',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: '/megha_logo.png',
                width: 800,
                height: 600,
                alt: 'Megha Enterprises Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Megha Enterprises | Electrical & Solar Solutions',
        description: 'Reliable HT/LT line components, Solar Power Plants, and precision engineering from Aurangabad, Maharashtra.',
        images: ['/megha_logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification-code', // Placeholder, user can update
    },
};

import { PremiumUX } from '@/components/premium-ux';
import { ScrollProgress } from '@/components/scroll-progress';
import { PagePreloader } from '@/components/page-preloader';
import { GoogleAnalytics } from '@/components/google-analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Fallback favicon to ensure mobile browser tabs use logo */}
                <link rel="icon" href="/megha_logo.png" />
            </head>
            <body className={`${openSans.variable} ${roboto.variable} font-sans min-h-screen flex flex-col relative transition-colors duration-300 bg-white text-slate-900 overflow-x-hidden`}>
                <GoogleAnalytics GA_MEASUREMENT_ID="G-8ESDRSPCJF" />
                <PagePreloader />
                <ScrollProgress />
                <Providers>
                    <SmoothScroll>
                        <Header />
                        <PremiumUX />
                        <main className="flex-1 overflow-x-hidden">{children}</main>
                        <Footer />
                        <Chatbot />
                        <Toaster />
                    </SmoothScroll>
                </Providers>
            </body>
        </html>
    );
}
