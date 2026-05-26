import { Locale, getDictionary } from "@/lib/i18n";
import {
    Scale, ArrowRight, Building2, FileText, Globe2, 
    ShieldCheck, Stamp, BookOpenCheck, CheckCircle2, Lock
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal & Compliance | Valcot Partners",
    description: "บริการด้านกฎหมายสำหรับธุรกิจในไทย Work Permit, Visa, BOI, PDPA โดยทีมผู้เชี่ยวชาญ",
};

export default async function LegalPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const coverageItems = [
        { icon: Globe2, text: dict.servicesPages.legal.coverageItems[0] },
        { icon: Building2, text: dict.servicesPages.legal.coverageItems[1] },
        { icon: Stamp, text: dict.servicesPages.legal.coverageItems[2] },
        { icon: ShieldCheck, text: dict.servicesPages.legal.coverageItems[3] },
        { icon: FileText, text: dict.servicesPages.legal.coverageItems[4] },
        { icon: BookOpenCheck, text: dict.servicesPages.legal.coverageItems[5] },
    ];

    const highlights = dict.servicesPages.legal.highlights;

    return (
        <div className="bg-[#FAFAFA]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100/80 to-transparent" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-2xl" />
                </div>

                <div className="container-lg relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-6">
                                <Scale className="w-4 h-4 text-slate-700" />
                                <span className="text-sm font-semibold text-slate-800 tracking-wide uppercase">
                                    {dict.servicesPages.legal.badge}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-heading leading-tight text-primary">
                                {dict.servicesPages.legal.heroTitle1}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                                    {dict.servicesPages.legal.heroTitle2}
                                </span>
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
                                {dict.servicesPages.legal.heroSubtitle}
                            </p>
                            
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${lang}/contact`}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                                >
                                    {dict.servicesPages.legal.getConsultation}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Premium Abstract Right Side */}
                        <div className="relative hidden lg:block h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0F172A] rounded-3xl shadow-2xl overflow-hidden shadow-primary/20">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                <div className="absolute top-0 right-0 w-80 h-80 bg-gold rounded-full filter blur-[120px] opacity-20"></div>
                                
                                {/* Floating Law Cards */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-6 bg-white border border-border rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform cursor-pointer z-10">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center relative">
                                            <Stamp className="w-8 h-8 text-primary" />
                                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-center font-bold text-primary mb-2 text-lg">Work Permit</h3>
                                    <p className="text-center text-sm text-green-600 font-medium bg-green-50 rounded-full py-1">Approved & Active</p>
                                    
                                    <div className="mt-6 flex justify-between items-center text-xs text-muted border-t border-border/50 pt-4">
                                        <span>Issued: 12/2026</span>
                                        <span>Exp: 12/2027</span>
                                    </div>
                                </div>

                                <div className="absolute top-16 left-10 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transform hover:-translate-y-1 transition-transform cursor-pointer">
                                    <ShieldCheck className="w-8 h-8 text-gold" />
                                </div>
                                <div className="absolute bottom-16 right-10 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transform hover:-translate-y-1 transition-transform cursor-pointer">
                                    <Lock className="w-8 h-8 text-white/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Strip */}
            <section className="py-16 bg-white border-b border-border">
                <div className="container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-transparent md:divide-border">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="text-center px-4">
                                <div className="text-4xl font-bold font-heading text-primary mb-2 tracking-tight">{item.value}</div>
                                <div className="text-base text-muted font-medium">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bento Grid Services */}
            <section className="section bg-[#FAFAFA]">
                <div className="container-lg">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary">
                            {dict.servicesPages.legal.coverageTitle}
                        </h2>
                        <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-gold var-gold-light rounded-full mx-auto" />
                        <p className="mt-6 text-lg text-muted">
                            {dict.servicesPages.legal.coverageSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coverageItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-8 rounded-2xl bg-white border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-gold transition-all duration-300">
                                    <item.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    {item.text}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {dict.servicesPages.legal.coverageDesc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="py-24 relative overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[100px] -translate-y-1/2"></div>
                </div>

                <div className="container-lg relative z-10">
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-10 sm:p-14 rounded-3xl text-center shadow-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight mb-6">
                            {dict.servicesPages.legal.ctaTitle}
                        </h2>
                        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                            {dict.servicesPages.legal.ctaSubtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-xl text-lg transition-all duration-300 shadow-[0_0_40px_rgba(201,162,39,0.3)] hover:shadow-[0_0_60px_rgba(201,162,39,0.5)] hover:-translate-y-1"
                            >
                                {dict.servicesPages.legal.ctaButton}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        
                        <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold" />
                                <span>{dict.servicesPages.legal.check1}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold" />
                                <span>{dict.servicesPages.legal.check2}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
