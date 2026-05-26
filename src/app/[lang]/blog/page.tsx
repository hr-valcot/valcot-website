import { Locale, getDictionary } from "@/lib/i18n";
import { ContactCTA } from "@/components/ContactCTA";
import { BookOpen, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "บทความ",
    description: "บทความ HR, คู่มือกฎหมายแรงงาน, อัพเดตข่าวสารจาก Valcot Partners",
};

export default async function BlogPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const originalDates = ["2025-03-15", "2025-03-01", "2025-02-15", "2025-02-01"];
    const articles = dict.blogPage.articles.map((article: any, idx: number) => ({
        ...article,
        date: originalDates[idx],
    }));

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/5" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-primary">
                            {dict.blogPage.heroTitle}
                        </h1>
                        <p className="mt-4 text-xl text-muted max-w-2xl">
                            {dict.blogPage.heroSubtitle}
                        </p>
                        <div className="mt-4 w-20 h-1 bg-gold rounded-full" />
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="section bg-white">
                <div className="container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.map((article, idx) => (
                            <article key={idx} className="card border border-border hover:border-gold/30 group cursor-pointer">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-2 py-1 text-xs font-medium bg-gold/10 text-gold-dark rounded-full">
                                        {article.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-muted">
                                        <Calendar className="w-3 h-3" />
                                        {article.date}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold font-heading text-primary group-hover:text-gold transition-colors mb-3">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-muted leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <div className="mt-4 text-sm font-medium text-gold">
                                    {dict.blogPage.readMore}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA lang={lang} dict={dict} />
        </>
    );
}
