import { Locale, getDictionary } from "@/lib/i18n";
import {
    Heart, Award, Users, Shield, ArrowRight, Target, Sparkles, Compass
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "เกี่ยวกับ Valcot Partners",
    description: "เติบโตจากประสบการณ์จริง ขับเคลื่อนด้วยความสำเร็จของลูกค้า — พาร์ทเนอร์ HR ที่ธุรกิจในไทยไว้วางใจ",
};

const valueIcons = [Heart, Award, Users, Shield];

export default async function AboutPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const values = dict.aboutPage.values.map((v: any, idx: number) => ({
        ...v,
        icon: valueIcons[idx],
    }));
    const storyParagraphs = dict.aboutPage.storyParagraphs ?? [
        dict.aboutPage.storyP1,
        dict.aboutPage.storyP2,
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a1628] via-primary to-primary-dark" />
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-primary-light/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                <div className="container-lg relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-gold" />
                            <span className="text-sm font-medium text-white/80">{dict.aboutPage.badge}</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold font-heading leading-tight text-white">
                            {dict.aboutPage.heroTitle}
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
                            {dict.aboutPage.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className="py-10 bg-white border-b border-border">
                <div className="container-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {dict.aboutPage.stats.map((stat: any, idx: number) => {
                            const statValues = ["10+", "50+", "5,000+", "99%"];
                            return (
                                <div key={idx} className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold font-heading text-gold">{statValues[idx]}</div>
                                    <div className="mt-1 text-sm text-muted">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="section">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-6">
                            {dict.aboutPage.storyTitle}
                        </h2>
                        <div className="space-y-6 text-muted leading-relaxed text-lg">
                            {storyParagraphs.map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "32px 32px",
                    }}
                />
                <div className="container-lg relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm p-8">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/10 mb-6">
                                <Compass className="w-7 h-7 text-gold" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                                {dict.aboutPage.visionTitle}
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                {dict.aboutPage.visionText}
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm p-8">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 border border-white/10 mb-6">
                                <Target className="w-7 h-7 text-gold" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                                {dict.aboutPage.missionTitle}
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                {dict.aboutPage.missionText}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section bg-white">
                <div className="container-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading text-primary">
                            {dict.aboutPage.coreValuesTitle}
                        </h2>
                        <div className="mt-4 w-20 h-1 bg-gold mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <div key={idx} className="text-center p-8 rounded-2xl border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-300">
                                    <value.icon className="w-8 h-8 text-gold group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold font-heading text-primary mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary-dark to-[#0a1628]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px]" />
                <div className="container-lg relative text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white max-w-3xl mx-auto leading-tight">
                        {dict.aboutPage.ctaTitle}
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
                        {dict.aboutPage.ctaSubtitle}
                    </p>
                    <div className="mt-8">
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-xl text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] hover:-translate-y-0.5 cursor-pointer group"
                        >
                            {dict.aboutPage.ctaButton}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
