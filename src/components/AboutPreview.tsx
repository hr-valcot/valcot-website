import { Locale } from "@/lib/i18n";
import { Landmark, Scale, Target, Workflow } from "lucide-react";

interface AboutPreviewProps {
    lang: Locale;
    dict: {
        aboutPreview: {
            heading: string;
            body: string[];
            visionTitle: string;
            visionText: string;
            missionTitle: string;
            missionText: string;
        };
    };
}

const supportAreas = [
    { label: "HR", icon: Workflow },
    { label: "Legal", icon: Scale },
    { label: "Finance", icon: Landmark },
    { label: "Operations", icon: Target },
];

export function AboutPreview({ dict }: AboutPreviewProps) {
    return (
        <section className="section bg-white" id="about">
            <div className="container-lg">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary">
                            {dict.aboutPreview.heading}
                        </h2>
                        <div className="mt-5 w-20 h-1 bg-gold rounded-full" />
                        <div className="mt-8 space-y-5 text-muted leading-relaxed text-base sm:text-lg">
                            {dict.aboutPreview.body.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {supportAreas.map((area) => (
                                <div
                                    key={area.label}
                                    className="rounded-lg border border-border bg-white p-4"
                                >
                                    <area.icon className="w-5 h-5 text-gold mb-3" />
                                    <div className="text-sm font-semibold text-primary">
                                        {area.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold font-heading text-primary">
                                    {dict.aboutPreview.visionTitle}
                                </h3>
                                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                                    {dict.aboutPreview.visionText}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-border">
                                <h3 className="text-xl font-semibold font-heading text-primary">
                                    {dict.aboutPreview.missionTitle}
                                </h3>
                                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                                    {dict.aboutPreview.missionText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
