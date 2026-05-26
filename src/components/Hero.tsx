import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

interface HeroProps {
    lang: Locale;
    dict: {
        hero: {
            title: string;
            subtitle: string;
            description: string;
            cta_primary: string;
            cta_secondary: string;
        };
    };
}

export function Hero({ lang, dict }: HeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                {/* Decorative Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container-lg">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-primary mb-8">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        <span className="text-sm font-medium">
                            {lang === "th" ? "ได้รับความไว้วางใจจาก 50+ องค์กรในประเทศไทย" : "Trusted by 50+ companies in Thailand"}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold font-heading leading-[1.15] tracking-tight">
                        <span className="text-primary">{dict.hero.title}</span>
                        <br />
                        <span className="text-gradient">
                            {dict.hero.subtitle}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
                        {dict.hero.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link
                            href={`/${lang}/contact`}
                            className="btn btn-gold text-base group cursor-pointer"
                        >
                            {dict.hero.cta_primary}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href={`/${lang}/services`}
                            className="btn btn-outline text-base cursor-pointer"
                        >
                            {dict.hero.cta_secondary}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Element - Right Side */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 -z-10">
                <div className="relative w-full h-full">
                    {/* Abstract shapes */}
                    <div className="absolute top-10 right-20 w-32 h-32 border-4 border-primary/20 rounded-2xl rotate-12" />
                    <div className="absolute top-32 right-40 w-24 h-24 bg-gold/20 rounded-full" />
                    <div className="absolute bottom-20 right-16 w-40 h-40 border-4 border-gold/30 rounded-3xl -rotate-6" />
                    <div className="absolute bottom-40 right-48 w-16 h-16 bg-primary/10 rounded-xl rotate-45" />
                </div>
            </div>
        </section>
    );
}
