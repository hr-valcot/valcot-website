import { Locale, getDictionary } from "@/lib/i18n";
import { ContactCTA } from "@/components/ContactCTA";
import { CheckCircle, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Multinational Companies",
    description: "Scalable HR, Payroll, and Compliance solutions for multinational companies operating in Thailand.",
};

export default async function MultinationalPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const painPoints = dict.industriesPages.multinational.painPoints;
    const solutions = dict.industriesPages.multinational.solutions;

    return (
        <>
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 rounded-full mb-4">
                            <Globe className="w-4 h-4 text-gold" />
                            <span className="text-sm font-medium text-gold-dark">{dict.industriesPages.badge}</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-primary">
                            {dict.industriesPages.multinational.title}
                        </h1>
                        <p className="mt-4 text-xl text-muted max-w-2xl">
                            {dict.industriesPages.multinational.subtitle}
                        </p>
                        <div className="mt-4 w-20 h-1 bg-gold rounded-full" />
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-primary mb-6">
                                {dict.industriesPages.challenges}
                            </h2>
                            <ul className="space-y-4">
                                {painPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-muted">
                                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 text-xs font-bold">{idx + 1}</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-primary mb-6">
                                {dict.industriesPages.howValcotHelps}
                            </h2>
                            <ul className="space-y-4">
                                {solutions.map((sol, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-muted">
                                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                                        <span>{sol}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA lang={lang} dict={dict} />
        </>
    );
}
