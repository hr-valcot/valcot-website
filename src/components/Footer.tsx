import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/i18n";
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageCircle, FileText } from "lucide-react";

interface FooterProps {
    lang: Locale;
    dict: {
        nav: {
            home: string;
            about: string;
            services: string;
            whyValcot: string;
            industries: string;
            blog: string;
            contact: string;
            serviceItems: {
                hrOutsourcing: string;
                payroll: string;
                recruitment: string;
                legal: string;
                accounting: string;
                eventOrganizer: string;
                tourOperator: string;
                addonServices: string;
            };
        };
        topBar: {
            phone: string;
            email: string;
            line: string;
            lineUrl: string;
            address: string;
            taxId: string;
            businessHours: string;
        };
        footer: {
            tagline: string;
            description: string;
            cta: string;
            copyright: string;
        };
    };
}

const serviceRoutes = [
    { key: "hrOutsourcing", href: "services/hr-outsourcing" },
    { key: "payroll", href: "services/payroll" },
    { key: "recruitment", href: "services/recruitment" },
    { key: "legal", href: "services/legal" },
    { key: "accounting", href: "services/accounting" },
    { key: "eventOrganizer", href: "contact" },
    { key: "tourOperator", href: "contact" },
    { key: "addonServices", href: "contact" },
] as const;

export function Footer({ lang, dict }: FooterProps) {
    const linkClass = "text-white/60 hover:text-gold transition-colors duration-200 text-sm";
    const phoneHref = dict.topBar.phone.replace(/[^\d+]/g, "");
    const taxIdLabel = lang === "th" ? "เลขประจำตัวผู้เสียภาษี" : "Tax ID";

    return (
        <footer className="bg-[#0a1628] text-white">
            <div className="container-lg py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div>
                        <Link href={`/${lang}`} className="inline-block cursor-pointer">
                            <Image
                                src="/images/logos.svg"
                                alt="Valcot Partners"
                                width={160}
                                height={44}
                                className="h-11 w-auto brightness-0 invert"
                                style={{ width: "auto" }}
                            />
                        </Link>
                        <p className="mt-4 text-gold text-sm font-semibold leading-relaxed max-w-xs">
                            {dict.footer.tagline}
                        </p>
                        <p className="mt-3 text-white/50 text-sm leading-relaxed max-w-xs">
                            {dict.footer.description}
                        </p>
                        <Link
                            href={`/${lang}/contact`}
                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-gold-light"
                        >
                            {dict.footer.cta}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        {/* Social Icons */}
                        <div className="flex gap-3 mt-5">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold transition-colors" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold transition-colors" aria-label="Facebook">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href={dict.topBar.lineUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold transition-colors" aria-label="Line">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-base font-semibold font-heading mb-5 text-white">
                            {lang === "th" ? "บริการ" : "Services"}
                        </h3>
                        <ul className="space-y-3">
                            {serviceRoutes.map((route) => (
                                <li key={route.key}>
                                    <Link href={`/${lang}/${route.href}`} className={linkClass}>
                                        {dict.nav.serviceItems[route.key]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className="text-base font-semibold font-heading mb-5 text-white">
                            {lang === "th" ? "บริษัท" : "Company"}
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href={`/${lang}/about`} className={linkClass}>{lang === "th" ? "เกี่ยวกับเรา" : "About Us"}</Link></li>
                            <li><Link href={`/${lang}/why-valcot`} className={linkClass}>{lang === "th" ? "ทำไมต้อง Valcot" : "Why Valcot"}</Link></li>
                            <li><Link href={`/${lang}/blog`} className={linkClass}>{lang === "th" ? "บทความ" : "Blog"}</Link></li>
                            <li><Link href={`/${lang}/contact`} className={linkClass}>{lang === "th" ? "ติดต่อเรา" : "Contact"}</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-base font-semibold font-heading mb-5 text-white">
                            {lang === "th" ? "ติดต่อ" : "Contact"}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <a href={`tel:${phoneHref}`} className={linkClass}>
                                    {dict.topBar.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <a href={`mailto:${dict.topBar.email}`} className={linkClass}>
                                    {dict.topBar.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MessageCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <a href={dict.topBar.lineUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    {dict.topBar.line}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm leading-relaxed">{dict.topBar.address}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm">
                                    {taxIdLabel}: {dict.topBar.taxId}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 text-sm">
                                    {dict.topBar.businessHours}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-white/40 text-sm">
                            {dict.footer.copyright}
                        </p>
                        <div className="flex gap-6">
                            <Link href={`/${lang}`} className="text-white/40 hover:text-gold text-sm transition-colors">
                                {lang === "th" ? "นโยบายความเป็นส่วนตัว" : "Privacy Policy"}
                            </Link>
                            <Link href={`/${lang}`} className="text-white/40 hover:text-gold text-sm transition-colors">
                                {lang === "th" ? "ข้อกำหนดการใช้บริการ" : "Terms of Service"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
