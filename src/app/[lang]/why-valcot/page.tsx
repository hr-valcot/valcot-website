import { Locale, getDictionary } from "@/lib/i18n";
import { ContactCTA } from "@/components/ContactCTA";
import { CheckCircle, Shield, Award, Users, Headphones, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ทำไมต้อง Valcot",
    description: "เหตุผลที่ธุรกิจไว้วางใจ Valcot Partners ในการดูแลงาน HR, Payroll และ Compliance",
};

export default async function WhyValcotPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const reasonIcons = [Shield, Users, Target, Headphones, Award, CheckCircle];
    const reasons = dict.whyValcotPage.reasons.map((r: any, idx: number) => ({
        ...r,
        icon: reasonIcons[idx] || Shield,
    }));

    const values = dict.whyValcotPage.values;

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-primary">
                            {dict.whyValcotPage.heroTitle}
                        </h1>
                        <p className="mt-4 text-xl text-muted max-w-2xl">
                            {dict.whyValcotPage.heroSubtitle}
                        </p>
                        <div className="mt-4 w-20 h-1 bg-gold rounded-full" />
                    </div>
                </div>
            </section>

            {/* Reasons */}
            <section className="section bg-white">
                <div className="container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="card border border-border hover:border-gold/30 group">
                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                                    <reason.icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-semibold font-heading text-primary mb-2">{reason.title}</h3>
                                <p className="text-sm text-muted">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section">
                <div className="container-lg">
                    <h2 className="text-3xl font-bold font-heading text-primary text-center mb-12">
                        {dict.whyValcotPage.valuesTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <div key={idx} className="text-center p-6 rounded-2xl bg-white shadow-sm border border-border">
                                <h3 className="text-lg font-semibold font-heading text-primary mb-2">{value.title}</h3>
                                <p className="text-sm text-muted">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA lang={lang} dict={dict} />
        </>
    );
}
