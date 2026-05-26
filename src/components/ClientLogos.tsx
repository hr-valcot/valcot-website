"use client";

import { Locale } from "@/lib/i18n";

interface ClientLogosProps {
    lang: Locale;
    dict: {
        clientLogos: {
            title: string;
        };
    };
}

const logos = [
    { name: "TechCorp", initials: "TC" },
    { name: "Global Foods", initials: "GF" },
    { name: "Metro Group", initials: "MG" },
    { name: "Alpha Industries", initials: "AI" },
    { name: "Summit Holdings", initials: "SH" },
    { name: "Pacific Trading", initials: "PT" },
    { name: "Nova Systems", initials: "NS" },
    { name: "Eastern Logistics", initials: "EL" },
    { name: "Prime Manufacturing", initials: "PM" },
    { name: "Apex Solutions", initials: "AS" },
];

export function ClientLogos({ lang, dict }: ClientLogosProps) {
    return (
        <section className="section bg-white overflow-hidden">
            <div className="container-lg">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-primary text-center mb-12">
                    {dict.clientLogos.title}
                </h2>
            </div>

            {/* Scrolling Logo Strip */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="flex animate-scroll">
                    {/* Duplicate logos for seamless loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-8 group cursor-pointer"
                        >
                            <div className="w-32 h-16 rounded-xl bg-gray-100 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-md group-hover:bg-white border border-transparent group-hover:border-gold/20">
                                <div className="text-center">
                                    <span className="text-lg font-bold text-primary/60 group-hover:text-primary font-heading transition-colors duration-500">
                                        {logo.initials}
                                    </span>
                                    <span className="block text-[10px] text-muted/50 group-hover:text-muted transition-colors duration-500">
                                        {logo.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
