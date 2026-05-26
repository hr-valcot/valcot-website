import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valcot.co.th";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        "",
        "/about",
        "/services",
        "/services/hr-outsourcing",
        "/services/payroll",
        "/services/recruitment",
        "/services/legal",
        "/services/accounting",
        "/why-valcot",
        "/industries/sme-startups",
        "/industries/representative-offices",
        "/industries/multinational",
        "/blog",
        "/contact",
    ];

    const routes: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        for (const page of pages) {
            routes.push({
                url: `${baseUrl}/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: page === "" ? 1 : 0.8,
            });
        }
    }

    return routes;
}
