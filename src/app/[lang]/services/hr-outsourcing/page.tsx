import { Locale, getDictionary } from "@/lib/i18n";
import {
    Users, ArrowRight, ShieldCheck, Briefcase, FileSignature, 
    Landmark, HeartHandshake, CheckCircle2, Star, Building2, UserPlus
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HR Outsourcing | Valcot Partners",
    description: "บริการ HR Outsourcing ครบวงจรในประเทศไทย ดูแลพนักงาน สัญญาจ้าง สวัสดิการ และ Employer of Record สำหรับธุรกิจทุกขนาด",
};

export default async function HROutsourcingPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const coverageItems = [
        { icon: Briefcase, text: dict.servicesPages.hrOutsourcing.coverageItems[0] },
        { icon: FileSignature, text: dict.servicesPages.hrOutsourcing.coverageItems[1] },
        { icon: ShieldCheck, text: dict.servicesPages.hrOutsourcing.coverageItems[2] },
        { icon: Users, text: dict.servicesPages.hrOutsourcing.coverageItems[3] },
        { icon: Landmark, text: dict.servicesPages.hrOutsourcing.coverageItems[4] },
        { icon: HeartHandshake, text: dict.servicesPages.hrOutsourcing.coverageItems[5] },
    ];

    const highlights = dict.servicesPages.hrOutsourcing.highlights;

    const targetAudiences = [
        {
            icon: Building2,
            ...dict.servicesPages.hrOutsourcing.targetAudiences[0],
        },
        {
            icon: Users,
            ...dict.servicesPages.hrOutsourcing.targetAudiences[1],
        },
        {
            icon: UserPlus,
            ...dict.servicesPages.hrOutsourcing.targetAudiences[2],
        }
    ];

    return (
        <div className="bg-[#FAFAFA]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-2xl" />
                </div>

                <div className="container-lg relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                                <Users className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">
                                    {dict.servicesPages.hrOutsourcing.badge}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-heading leading-tight text-primary">
                                {dict.servicesPages.hrOutsourcing.heroTitle1}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                                    {dict.servicesPages.hrOutsourcing.heroTitle2}
                                </span>
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
                                {dict.servicesPages.hrOutsourcing.heroSubtitle}
                            </p>
                            
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${lang}/contact`}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                                >
                                    {dict.servicesPages.hrOutsourcing.getConsultation}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Premium Abstract Right Side */}
                        <div className="relative hidden lg:block h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0F172A] rounded-3xl shadow-2xl overflow-hidden shadow-primary/20">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold rounded-full filter blur-[100px] opacity-40"></div>
                                
                                {/* Floating Profile Cards */}
                                <div className="absolute top-16 left-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform hover:-translate-y-1 transition-transform cursor-pointer w-64">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                                            <span className="text-white font-semibold">SK</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Somchai K.</p>
                                            <p className="text-white/60 text-xs text-left">Senior Developer</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/20 rounded-lg p-2">
                                        <span className="text-xs text-white/70">Onboarding</span>
                                        <span className="text-xs font-semibold text-green-400">100%</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 right-10 left-24 p-6 bg-white border border-border rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform cursor-pointer">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <h3 className="font-semibold text-primary">{dict.servicesPages.hrOutsourcing.complianceStatus}</h3>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {[1,2,3].map((i) => (
                                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-blue-${i}00 flex items-center justify-center`}><span className="text-white text-xs font-bold">{i}</span></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-emerald-500 rounded-full"></div>
                                    </div>
                                    <p className="mt-2 text-xs font-medium text-muted">{dict.servicesPages.hrOutsourcing.complianceDesc}</p>
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

            {/* Target Audience */}
            <section className="py-20 bg-white border-b border-border">
                <div className="container-lg">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary">
                            {dict.servicesPages.hrOutsourcing.targetAudienceTitle}
                        </h2>
                        <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-gold var-gold-light rounded-full mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {targetAudiences.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-[#FAFAFA] border border-border">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold font-heading text-primary mb-3">{item.title}</h3>
                                <p className="text-muted leading-relaxed">{item.desc}</p>
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
                            {dict.servicesPages.hrOutsourcing.coverageTitle}
                        </h2>
                        <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-gold var-gold-light rounded-full mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coverageItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-8 rounded-2xl bg-white border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-gold transition-all duration-300">
                                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-3">
                                    {item.text}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {dict.servicesPages.hrOutsourcing.coverageDesc}
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
                            {dict.servicesPages.hrOutsourcing.ctaTitle}
                        </h2>
                        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                            {dict.servicesPages.hrOutsourcing.ctaSubtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-xl text-lg transition-all duration-300 shadow-[0_0_40px_rgba(201,162,39,0.3)] hover:shadow-[0_0_60px_rgba(201,162,39,0.5)] hover:-translate-y-1"
                            >
                                {dict.servicesPages.hrOutsourcing.ctaButton}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold" />
                                <span>{dict.servicesPages.hrOutsourcing.check1}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold" />
                                <span>{dict.servicesPages.hrOutsourcing.check2}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
