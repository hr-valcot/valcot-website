import { Locale, getDictionary } from "@/lib/i18n";
import { ContactCTA } from "@/components/ContactCTA";
import { Users, CreditCard, UserSearch, Scale, Calculator, ArrowRight, CheckCircle, Building2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Services",
    description: "Comprehensive HR, Payroll, Recruitment, Legal, and Accounting services for businesses in Thailand.",
};

const serviceConfig = [
    { key: "hrOutsourcing", slug: "hr-outsourcing", icon: Users, color: "bg-primary/10 text-primary" },
    { key: "payroll", slug: "payroll", icon: CreditCard, color: "bg-gold/10 text-gold-dark" },
    { key: "recruitment", slug: "recruitment", icon: UserSearch, color: "bg-emerald-100 text-emerald-600" },
    { key: "legal", slug: "legal", icon: Scale, color: "bg-violet-100 text-violet-600" },
    { key: "accounting", slug: "accounting", icon: Calculator, color: "bg-blue-100 text-blue-600" },
] as const;

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const serviceData: Record<string, { title: string; description: string; items: string[] }> = {
        hrOutsourcing: dict.services.hrOutsourcing,
        payroll: dict.services.payroll,
        recruitment: dict.services.recruitment,
        legal: dict.services.legal,
        accounting: dict.services.accounting,
    };

    type Addon = { title: string; desc: string; comingSoon?: boolean };
    const addons: Addon[] = [
        ...dict.servicesPages.global.addons.slice(0, 3),
        {
            ...dict.servicesPages.global.addons[3],
            comingSoon: true,
        }
    ];

    return (
        <>
            {/* Premium Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50/80 to-transparent" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-2xl" />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>
                
                <div className="container-lg relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6 mx-auto">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                            {dict.servicesPages.global.enterpriseSolutions}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-primary leading-tight">
                        {dict.services.title}
                    </h1>
                    <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto" />
                    <p className="mt-8 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                        {dict.servicesPages.global.subtitle}
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="section bg-white">
                <div className="container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceConfig.map((config) => {
                            const service = serviceData[config.key];
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
                                        <h2 className="text-lg font-semibold font-heading text-primary flex-1">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-sm text-muted mb-4">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                                                <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 pt-4 border-t border-border flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-sm">{dict.services.learnMore}</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="section">
                <div className="container-lg">
                    <h2 className="text-3xl font-bold font-heading text-primary text-center mb-12">
                        {dict.servicesPages.global.optionalAddons}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {addons.map((addon, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border transition-colors ${addon.comingSoon
                                    ? "border-dashed border-border bg-muted/20"
                                    : "border-border hover:border-gold bg-white"
                                    }`}
                            >
                                <h3 className="font-semibold text-primary">{addon.title}</h3>
                                <p className={`text-sm mt-1 ${addon.comingSoon ? "text-gold" : "text-muted"}`}>
                                    {addon.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Scope Disclaimer */}
                    <div className="mt-12 p-6 bg-gold/5 rounded-2xl border-l-4 border-gold max-w-3xl mx-auto">
                        <p className="text-sm text-muted">
                            {dict.servicesPages.global.disclaimer}
                        </p>
                    </div>
                </div>
            </section>

            <ContactCTA lang={lang} dict={dict} />
        </>
    );
}
