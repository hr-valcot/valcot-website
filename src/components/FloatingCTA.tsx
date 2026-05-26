"use client";

import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { MessageCircle } from "lucide-react";

interface FloatingCTAProps {
    lang: Locale;
    dict: {
        floatingCta: {
            text: string;
        };
    };
}

export function FloatingCTA({ lang, dict }: FloatingCTAProps) {
    return (
        <Link
            href={`/${lang}/contact`}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 bg-gold text-primary font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300 group animate-bounce-once"
            aria-label={dict.floatingCta.text}
        >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-sm">{dict.floatingCta.text}</span>
        </Link>
    );
}
