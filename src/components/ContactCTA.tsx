import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";

interface ContactCTAProps {
    lang: Locale;
    dict: {
        contact: {
            title: string;
            subtitle: string;
            cta: string;
        };
        topBar: {
            phone: string;
            email: string;
        };
    };
    ctaLabel?: string;
}

export function ContactCTA({ lang, dict, ctaLabel }: ContactCTAProps) {
    return (
        <section className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-primary" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            {/* Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="container-lg relative">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold text-primary mb-8">
                        <MessageCircle className="w-8 h-8" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                        {dict.contact.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                        {dict.contact.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-primary font-semibold rounded-xl hover:bg-gold-light transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            {ctaLabel ?? dict.contact.cta}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Contact Options */}
                    <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <a
                            href={`mailto:${dict.topBar.email}`}
                            className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors cursor-pointer"
                        >
                            <Mail className="w-5 h-5" />
                            <span>{dict.topBar.email}</span>
                        </a>
                        <a
                            href={`tel:${dict.topBar.phone.replace(/\s/g, "")}`}
                            className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors cursor-pointer"
                        >
                            <Phone className="w-5 h-5" />
                            <span>{dict.topBar.phone}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
