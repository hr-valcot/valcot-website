import { Locale, locales, getDictionary } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { FloatingCTA } from "@/components/FloatingCTA";

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <>
            <TopBar lang={lang} dict={dict} />
            <Navbar lang={lang} dict={dict} />
            <main className="flex-1">{children}</main>
            <Footer lang={lang} dict={dict} />
            <FloatingCTA lang={lang} dict={dict} />
        </>
    );
}
