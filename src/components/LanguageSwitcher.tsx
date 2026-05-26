"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
    currentLang: Locale;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Default to /th if pathname is somehow null
    const path = pathname || `/${currentLang}`;

    // Helper to generate a new path with the selected locale
    const getTargetPath = (targetLang: Locale) => {
        if (!path) return `/${targetLang}`;
        
        // Ensure path starts with a slash
        const normalizedPath = path.startsWith("/") ? path : `/${path}`;
        
        // Split path to isolate the first segment, which is the current locale
        const segments = normalizedPath.split("/");
        
        // If the first segment is a known locale, replace it
        if (locales.includes(segments[1] as Locale)) {
            segments[1] = targetLang;
            return segments.join("/");
        }
        
        // Otherwise, prepend the new locale (fallback)
        return `/${targetLang}${normalizedPath === "/" ? "" : normalizedPath}`;
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span className="text-base">{localeFlags[currentLang]}</span>
                <span className="text-sm font-medium tracking-wide uppercase">{currentLang}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="py-1">
                        {locales.map((locale) => {
                            const isSelected = locale === currentLang;
                            return (
                                <Link
                                    key={locale}
                                    href={getTargetPath(locale)}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                        isSelected 
                                            ? "bg-primary/5 text-primary font-semibold" 
                                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                                    }`}
                                >
                                    <span className="text-lg">{localeFlags[locale]}</span>
                                    <span>{localeNames[locale]}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
