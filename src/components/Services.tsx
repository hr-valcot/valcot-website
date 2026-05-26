import { Locale } from "@/lib/i18n";
import { Users, CreditCard, UserSearch, Scale, Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicesProps {
    lang: Locale;
    dict: {
        services: {
            title: string;
            subtitle: string;
            viewAll: string;
            learnMore: string;
            hrOutsourcing: {
                title: string;
                description: string;
                items: string[];
            };
            payroll: {
                title: string;
                description: string;
                items: string[];
            };
            recruitment: {
                title: string;
                description: string;
                items: string[];
            };
            legal: {
                title: string;
                description: string;
                items: string[];
            };
            accounting: {
                title: string;
                description: string;
                items: string[];
            };
        };
    };
}

const serviceConfig = [
    { key: "hrOutsourcing", slug: "hr-outsourcing", icon: Users, color: "bg-primary/10 text-primary" },
    { key: "payroll", slug: "payroll", icon: CreditCard, color: "bg-gold/10 text-gold-dark" },
    { key: "recruitment", slug: "recruitment", icon: UserSearch, color: "bg-emerald-100 text-emerald-600" },
    { key: "legal", slug: "legal", icon: Scale, color: "bg-violet-100 text-violet-600" },
    { key: "accounting", slug: "accounting", icon: Calculator, color: "bg-blue-100 text-blue-600" },
] as const;

export function Services({ lang, dict }: ServicesProps) {
    return (
        <section className="section bg-white" id="services">
            <div className="container-lg">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary">
                        {dict.services.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted">
                        {dict.services.subtitle}
                    </p>
                </div>

                {/* Services Grid - 3+2 layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {serviceConfig.slice(0, 3).map((config) => {
                        const service = dict.services[config.key];
                        const IconComponent = config.icon;
                        return (
                            <Link
                                key={config.key}
                                href={`/${lang}/services/${config.slug}`}
                                className="card group cursor-pointer hover:border-gold/30 border border-transparent"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-3 rounded-xl ${config.color}`}>
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold font-heading text-primary">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-muted text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-border flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sm">{dict.services.learnMore}</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceConfig.slice(3).map((config) => {
                        const service = dict.services[config.key];
                        const IconComponent = config.icon;
                        return (
                            <Link
                                key={config.key}
                                href={`/${lang}/services/${config.slug}`}
                                className="card group cursor-pointer hover:border-gold/30 border border-transparent"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-3 rounded-xl ${config.color}`}>
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold font-heading text-primary">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-muted text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-border flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sm">{dict.services.learnMore}</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href={`/${lang}/services`}
                        className="btn btn-primary cursor-pointer"
                    >
                        {dict.services.viewAll}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
