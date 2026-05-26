import { Locale, getDictionary } from "@/lib/i18n";
import {
    Search, ArrowRight, UserCheck, Briefcase, FileSignature, 
    Target, Building2, TrendingUp, CheckCircle2, Award, Users
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recruitment Services | Valcot Partners",
    description: "บริการสรรหาบุคลากรในประเทศไทย หาคนที่ใช่สำหรับธุรกิจคุณ Headhunting, Mass Recruitment, Executive Search",
};

export default async function RecruitmentPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const recruitmentModels = [
        {
            icon: Target,
            ...dict.servicesPages.recruitment.recruitmentModels[0]
        },
        {
            icon: UserCheck,
            ...dict.servicesPages.recruitment.recruitmentModels[1]
        },
        {
            icon: Users,
            ...dict.servicesPages.recruitment.recruitmentModels[2]
        },
        {
            icon: FileSignature,
            ...dict.servicesPages.recruitment.recruitmentModels[3]
        }
    ];

    const highlights = dict.servicesPages.recruitment.highlights;

    const processSteps = dict.servicesPages.recruitment.processSteps;

    return (
        <div className="bg-[#FAFAFA]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent" />
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-2xl" />
                </div>

                <div className="container-lg relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
                                <Search className="w-4 h-4 text-indigo-600" />
                                <span className="text-sm font-semibold text-indigo-800 tracking-wide uppercase">
                                    {dict.servicesPages.recruitment.badge}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold font-heading leading-tight text-primary">
                                {dict.servicesPages.recruitment.heroTitle1}
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                                    {dict.servicesPages.recruitment.heroTitle2}
                                </span>
                            </h1>
                            <p className="mt-6 text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
                                {dict.servicesPages.recruitment.heroSubtitle}
                            </p>
                            
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href={`/${lang}/contact`}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                                >
                                    {dict.servicesPages.recruitment.getConsultation}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Premium Abstract Right Side */}
                        <div className="relative hidden lg:block h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#0F172A] rounded-3xl shadow-2xl overflow-hidden shadow-primary/20">
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold rounded-full filter blur-[100px] opacity-30"></div>
                                
                                {/* Floating Candidate Cards */}
                                <div className="absolute top-12 left-10 p-5 bg-white border border-border rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform cursor-pointer w-64 z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-white shadow-sm">
                                            <Award className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md border border-blue-100">Senior roles</span>
                                    </div>
                                    <h3 className="font-bold text-primary text-sm mb-1">{dict.servicesPages.recruitment.candidateShortlist}</h3>
                                    <p className="text-muted text-xs mb-4">Marketing Director • 10+ yrs exp.</p>
                                    <div className="flex gap-2">
                                        <div className="h-2 w-1/3 bg-gold rounded-full"></div>
                                        <div className="h-2 w-1/4 bg-blue-200 rounded-full"></div>
                                        <div className="h-2 w-1/5 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="absolute bottom-16 right-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform hover:-translate-y-1 transition-transform cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                            <UserCheck className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Match Rate: 98%</p>
                                            <p className="text-white/60 text-xs">Cultural fit & Skills aligned</p>
                                        </div>
                                    </div>
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
                            {dict.servicesPages.recruitment.targetAudienceTitle}
                        </h2>
                        <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-gold var-gold-light rounded-full mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {recruitmentModels.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-8 rounded-2xl bg-white border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6"
                            >
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center group-hover:-translate-y-1 group-hover:bg-gold transition-all duration-300">
                                    <item.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="py-24 bg-white border-t border-border">
                <div className="container-lg">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-heading text-primary">
                            {dict.servicesPages.recruitment.coverageTitle}
                        </h2>
                        <div className="mt-4 w-16 h-1 bg-gold mx-auto rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-border z-0"></div>
                        
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="relative z-10 text-center">
                                <div className="w-14 h-14 mx-auto bg-primary text-gold rounded-full flex items-center justify-center font-bold text-xl border-4 border-white shadow-md mb-6">
                                    {step.step}
                                </div>
                                <h3 className="font-semibold text-primary text-lg mb-2">{step.title}</h3>
                                <p className="text-sm text-muted">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="py-24 relative overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[100px] -translate-y-1/2"></div>
                </div>

                <div className="container-lg relative z-10">
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-10 sm:p-14 rounded-3xl text-center shadow-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight mb-6">
                            {dict.servicesPages.recruitment.ctaTitle}
                        </h2>
                        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                            {dict.servicesPages.recruitment.ctaSubtitle}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-xl text-lg transition-all duration-300 shadow-[0_0_40px_rgba(201,162,39,0.3)] hover:shadow-[0_0_60px_rgba(201,162,39,0.5)] hover:-translate-y-1"
                            >
                                {dict.servicesPages.recruitment.ctaButton}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        
                        <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold" />
                                <span>{dict.servicesPages.recruitment.check1}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold" />
                                <span>{dict.servicesPages.recruitment.check2}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
