"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { Locale, locales, localeNames, localeFlags } from "@/lib/i18n";

interface NavbarProps {
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
            cta: string;
            serviceItems: {
                hrOutsourcing: string;
                payroll: string;
                recruitment: string;
                legal: string;
                accounting: string;
            };
            industryItems: {
                sme: string;
                representative: string;
                multinational: string;
            };
        };
    };
}

const serviceRoutes = [
    { key: "hrOutsourcing", slug: "hr-outsourcing" },
    { key: "payroll", slug: "payroll" },
    { key: "recruitment", slug: "recruitment" },
    { key: "legal", slug: "legal" },
    { key: "accounting", slug: "accounting" },
] as const;

const industryRoutes = [
    { key: "sme", slug: "sme-startups" },
    { key: "representative", slug: "representative-offices" },
    { key: "multinational", slug: "multinational" },
] as const;

export function Navbar({ lang, dict }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const pathname = usePathname();
    const path = pathname || `/${lang}`;
    const getTargetPath = (targetLang: Locale) => {
        if (!path) return `/${targetLang}`;
        const normalizedPath = path.startsWith("/") ? path : `/${path}`;
        const segments = normalizedPath.split("/");
        if (locales.includes(segments[1] as Locale)) {
            segments[1] = targetLang;
            return segments.join("/");
        }
        return `/${targetLang}${normalizedPath === "/" ? "" : normalizedPath}`;
    };

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const toggleMobileDropdown = (name: string) => {
        setMobileDropdown(mobileDropdown === name ? null : name);
    };

    const navLinkClass =
        "text-primary/80 hover:text-primary font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-gold after:transition-all after:duration-300";

    const dropdownBtnClass =
        "flex items-center gap-1 text-primary/80 hover:text-primary font-medium transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-gold after:transition-all after:duration-300";

    return (
        <header className="sticky top-0 left-0 right-0 z-50">
            <nav className="glass shadow-lg border-b border-white/10">
                <div ref={navRef} className="container-lg flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link
                        href={`/${lang}`}
                        className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
                    >
                        <Image
                            src="/images/logos.svg"
                            alt="Valcot Partners"
                            width={200}
                            height={56}
                            className="h-14 w-auto"
                            style={{ width: "auto" }}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link href={`/${lang}`} className={navLinkClass}>
                            {dict.nav.home}
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown("services")}
                                className={dropdownBtnClass}
                            >
                                {dict.nav.services}
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openDropdown === "services" && (
                                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden">
                                    <Link
                                        href={`/${lang}/services`}
                                        onClick={() => setOpenDropdown(null)}
                                        className="block px-4 py-3 text-sm font-semibold text-primary hover:bg-gold/10 transition-colors border-b border-border"
                                    >
                                        {dict.nav.services} — {lang === "th" ? "ทั้งหมด" : "All"}
                                    </Link>
                                    {serviceRoutes.map((route) => (
                                        <Link
                                            key={route.key}
                                            href={`/${lang}/services/${route.slug}`}
                                            onClick={() => setOpenDropdown(null)}
                                            className="block px-4 py-3 text-sm text-primary/70 hover:text-primary hover:bg-gold/5 transition-colors"
                                        >
                                            {dict.nav.serviceItems[route.key]}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Why Valcot */}
                        <Link href={`/${lang}/why-valcot`} className={navLinkClass}>
                            {dict.nav.whyValcot}
                        </Link>

                        {/* Industries Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown("industries")}
                                className={dropdownBtnClass}
                            >
                                {dict.nav.industries}
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "industries" ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openDropdown === "industries" && (
                                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden">
                                    {industryRoutes.map((route) => (
                                        <Link
                                            key={route.key}
                                            href={`/${lang}/industries/${route.slug}`}
                                            onClick={() => setOpenDropdown(null)}
                                            className="block px-4 py-3 text-sm text-primary/70 hover:text-primary hover:bg-gold/5 transition-colors"
                                        >
                                            {dict.nav.industryItems[route.key]}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Blog */}
                        <Link href={`/${lang}/blog`} className={navLinkClass}>
                            {dict.nav.blog}
                        </Link>

                        {/* Contact */}
                        <Link href={`/${lang}/contact`} className={navLinkClass}>
                            {dict.nav.contact}
                        </Link>
                    </div>

                    {/* Right side - CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href={`/${lang}/contact`}
                            className="btn btn-gold text-sm cursor-pointer"
                        >
                            {dict.nav.cta}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 hover:bg-primary/5 rounded-lg transition-colors cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-primary" />
                        ) : (
                            <Menu className="w-6 h-6 text-primary" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-border bg-white">
                        <div className="container-lg py-4 flex flex-col gap-1">
                            <Link
                                href={`/${lang}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-3 text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
                            >
                                {dict.nav.home}
                            </Link>

                            {/* Mobile Services Collapsible */}
                            <div>
                                <button
                                    onClick={() => toggleMobileDropdown("services")}
                                    className="w-full px-4 py-3 flex items-center justify-between text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors cursor-pointer"
                                >
                                    {dict.nav.services}
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "services" ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {mobileDropdown === "services" && (
                                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-gold/30 pl-4">
                                        <Link
                                            href={`/${lang}/services`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-3 py-2 text-sm font-semibold text-primary hover:bg-gold/10 rounded-lg transition-colors"
                                        >
                                            {lang === "th" ? "ดูทั้งหมด" : "View All"}
                                        </Link>
                                        {serviceRoutes.map((route) => (
                                            <Link
                                                key={route.key}
                                                href={`/${lang}/services/${route.slug}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="px-3 py-2 text-sm text-primary/70 hover:text-primary hover:bg-gold/5 rounded-lg transition-colors"
                                            >
                                                {dict.nav.serviceItems[route.key]}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Why Valcot */}
                            <Link
                                href={`/${lang}/why-valcot`}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-3 text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
                            >
                                {dict.nav.whyValcot}
                            </Link>

                            {/* Mobile Industries Collapsible */}
                            <div>
                                <button
                                    onClick={() => toggleMobileDropdown("industries")}
                                    className="w-full px-4 py-3 flex items-center justify-between text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors cursor-pointer"
                                >
                                    {dict.nav.industries}
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === "industries" ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {mobileDropdown === "industries" && (
                                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-gold/30 pl-4">
                                        {industryRoutes.map((route) => (
                                            <Link
                                                key={route.key}
                                                href={`/${lang}/industries/${route.slug}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="px-3 py-2 text-sm text-primary/70 hover:text-primary hover:bg-gold/5 rounded-lg transition-colors"
                                            >
                                                {dict.nav.industryItems[route.key]}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Blog */}
                            <Link
                                href={`/${lang}/blog`}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-3 text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
                            >
                                {dict.nav.blog}
                            </Link>

                            {/* Contact */}
                            <Link
                                href={`/${lang}/contact`}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-3 text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
                            >
                                {dict.nav.contact}
                            </Link>

                            {/* Mobile Language Toggle */}
                            <div className="mt-2 pt-2 border-t border-border flex flex-col gap-2 px-4">
                                <span className="text-xs text-primary/50 font-medium uppercase tracking-wider mb-1">
                                    {lang === 'th' ? 'เปลี่ยนภาษา' : 'Change Language'}
                                </span>
                                <div className="grid grid-cols-2 gap-2">
                                    {locales.map((locale) => {
                                        const isSelected = locale === lang;
                                        return (
                                            <Link
                                                key={locale}
                                                href={getTargetPath(locale)}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`px-3 py-2 flex items-center gap-2 text-sm rounded-lg font-medium transition-colors ${
                                                    isSelected
                                                        ? "bg-gold text-primary"
                                                        : "bg-primary/5 text-primary/70 hover:bg-primary/10"
                                                }`}
                                            >
                                                <span className="text-base">{localeFlags[locale]}</span>
                                                {localeNames[locale]}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
