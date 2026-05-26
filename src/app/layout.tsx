import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Valcot Partners | HR Outsourcing & Payroll ครบวงจรในประเทศไทย",
        template: "%s | Valcot Partners",
    },
    description: "Valcot Partners บริการ HR Outsourcing, Payroll, สรรหาบุคลากร และที่ปรึกษาด้านกฎหมายครบวงจรสำหรับธุรกิจในประเทศไทย ปรึกษาฟรีวันนี้",
    keywords: ["HR Outsourcing", "Payroll", "Recruitment", "Legal", "Accounting", "Thailand", "EOR", "Work Permit", "Visa", "BOI", "PDPA"],
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
        title: "Valcot Partners | HR Outsourcing & Payroll ครบวงจรในประเทศไทย",
        description: "Valcot Partners บริการ HR Outsourcing, Payroll, สรรหาบุคลากร และที่ปรึกษาด้านกฎหมายครบวงจรสำหรับธุรกิจในประเทศไทย",
        url: "https://valcotpartners.com",
    },
    twitter: {
        card: "summary_large_image",
        title: "Valcot Partners | HR Outsourcing & Payroll ครบวงจรในประเทศไทย",
        description: "Valcot Partners บริการ HR Outsourcing, Payroll, สรรหาบุคลากร และที่ปรึกษาด้านกฎหมายครบวงจร",
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
            "sameAs": [
                "https://linkedin.com/company/valcotpartners",
                "https://facebook.com/valcotpartners"
            ],
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://valcotpartners.com/#localbusiness",
            "name": "Valcot Partners",
            "description": "บริการ HR Outsourcing, Payroll, สรรหาบุคลากร และที่ปรึกษาด้านกฎหมายครบวงจรสำหรับธุรกิจในประเทศไทย",
            "url": "https://valcotpartners.com",
            "email": "info@valcotpartners.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangkok",
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

