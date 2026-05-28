import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Valcot Partners — Business Support Solutions ครบวงจร | HR, Legal, Accounting",
        template: "%s | Valcot Partners",
    },
    description: "บริการสนับสนุนธุรกิจครบวงจร HR Outsourcing, Payroll, กฎหมาย, บัญชี-ภาษี, อีเวนต์ และการเดินทาง พร้อมทีมผู้เชี่ยวชาญที่เข้าใจบริบทธุรกิจไทย",
    keywords: ["Business Support Solutions", "HR Outsourcing", "Payroll", "Recruitment", "Legal", "Accounting", "Tax", "Event Organizer", "Tour Operator", "Thailand", "EOR", "Work Permit", "Visa", "BOI", "PDPA"],
    authors: [{ name: "Valcot Partners" }],
    metadataBase: new URL("https://valcotpartners.com"),
    alternates: {
        canonical: "/",
        languages: {
            "th": "/th",
            "en": "/en",
        },
    },
    icons: {
        icon: "/images/logos.svg",
        apple: "/images/logos.svg",
    },
    openGraph: {
        type: "website",
        locale: "th_TH",
        alternateLocale: "en_US",
        siteName: "Valcot Partners",
        title: "Valcot Partners — Business Support Solutions ครบวงจร | HR, Legal, Accounting",
        description: "บริการสนับสนุนธุรกิจครบวงจร HR Outsourcing, Payroll, กฎหมาย, บัญชี-ภาษี, อีเวนต์ และการเดินทาง พร้อมทีมผู้เชี่ยวชาญที่เข้าใจบริบทธุรกิจไทย",
        url: "https://valcotpartners.com",
    },
    twitter: {
        card: "summary_large_image",
        title: "Valcot Partners — Business Support Solutions ครบวงจร | HR, Legal, Accounting",
        description: "บริการสนับสนุนธุรกิจครบวงจร HR Outsourcing, Payroll, กฎหมาย, บัญชี-ภาษี, อีเวนต์ และการเดินทาง",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://valcotpartners.com/#organization",
            "name": "Valcot Partners",
            "url": "https://valcotpartners.com",
            "logo": "https://valcotpartners.com/images/logos.svg",
            "email": "info@valcotpartners.com",
            "telephone": "0975955664",
            "sameAs": [
                "https://linkedin.com/company/valcotpartners",
                "https://facebook.com/valcotpartners",
                "https://line.me/R/ti/p/@389eefpd"
            ],
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://valcotpartners.com/#localbusiness",
            "name": "Valcot Partners",
            "description": "บริการสนับสนุนธุรกิจครบวงจร HR Outsourcing, Payroll, กฎหมาย, บัญชี-ภาษี, อีเวนต์ และการเดินทาง สำหรับองค์กรในประเทศไทย",
            "url": "https://valcotpartners.com",
            "email": "info@valcotpartners.com",
            "telephone": "0975955664",
            "taxID": "0105568205565",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 Empire Tower, Unit 2701-02, 2712-14 (TT 23), 27th Floor, South Sathorn Road",
                "addressRegion": "Sathon",
                "addressLocality": "Bangkok",
                "postalCode": "10120",
                "addressCountry": "TH",
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$",
        },
        {
            "@type": "WebSite",
            "@id": "https://valcotpartners.com/#website",
            "url": "https://valcotpartners.com",
            "name": "Valcot Partners",
            "publisher": { "@id": "https://valcotpartners.com/#organization" },
            "inLanguage": ["th", "en"],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen flex flex-col antialiased">
                {children}
            </body>
        </html>
    );
}
