"use client";

import { useState } from "react";
import { Locale } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

interface FAQProps {
    lang: Locale;
    dict: {
        faq: {
            title: string;
            items: {
                question: string;
                answer: string;
            }[];
        };
    };
}

export function FAQ({ lang, dict }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section bg-white" id="faq">
            <div className="container-lg">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary">
                        {dict.faq.title}
                    </h2>
                    <div className="mt-4 w-20 h-1 bg-gold mx-auto rounded-full" />
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto">
                    {dict.faq.items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-border last:border-b-0"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full py-6 flex items-start justify-between gap-4 text-left cursor-pointer group"
                                >
                                    <span className="text-lg font-medium text-primary group-hover:text-gold transition-colors">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-muted leading-relaxed pl-0">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
