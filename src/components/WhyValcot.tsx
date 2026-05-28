import { Locale } from "@/lib/i18n";
import { Award, ShieldCheck, Users, Workflow } from "lucide-react";

interface WhyValcotProps {
    lang: Locale;
    dict: {
        whyValcot: {
            title: string;
            reasons: {
                title: string;
                description: string;
            }[];
        };
    };
}

const icons = [Workflow, ShieldCheck, Award, Users];

export function WhyValcot({ lang, dict }: WhyValcotProps) {
    return (
        <section className="section relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-primary/5" />

            <div className="container-lg">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary">
                        {dict.whyValcot.title}
                    </h2>
                    <div className="mt-4 w-20 h-1 bg-gold mx-auto rounded-full" />
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dict.whyValcot.reasons.map((reason, index) => {
                        const IconComponent = icons[index];
                        return (
                            <div
                                key={index}
                                className="group text-center p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 mb-6">
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold font-heading text-primary mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-muted leading-relaxed text-sm">
                                    {reason.description}
                                </p>
                                <div className="mt-6 w-0 h-0.5 bg-gold mx-auto group-hover:w-12 transition-all duration-300 rounded-full" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
