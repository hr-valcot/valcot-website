import { Locale, getDictionary } from "@/lib/i18n";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { Services } from "@/components/Services";
import { WhyValcot } from "@/components/WhyValcot";
import { StatsSection } from "@/components/StatsSection";
import { ClientLogos } from "@/components/ClientLogos";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <>
            <Hero lang={lang} dict={dict} />
            <StatsSection lang={lang} dict={dict} />
            <AboutPreview lang={lang} dict={dict} />
            <WhyValcot lang={lang} dict={dict} />
            <Services lang={lang} dict={dict} />
            {/* <ClientLogos lang={lang} dict={dict} /> */}
            <FAQ lang={lang} dict={dict} />
            <ContactCTA lang={lang} dict={dict} />
        </>
    );
}
