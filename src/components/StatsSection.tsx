"use client";

import { Locale } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

interface StatsSectionProps {
    lang: Locale;
    dict: {
        stats: {
            experience: { value: string; label: string };
            clients: { value: string; label: string };
            employees: { value: string; label: string };
            retention: { value: string; label: string };
        };
    };
}

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
    const [display, setDisplay] = useState("0");
    const hasAnimated = useRef(false);

    const numericMatch = value.match(/^([\d,]+)/);
    const suffix = value.replace(/^[\d,]+/, "");

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        if (!numericMatch) {
            setDisplay(value);
            return;
        }

        hasAnimated.current = true;
        const target = parseInt(numericMatch[1].replace(/,/g, ""));
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);

            if (target >= 1000) {
                setDisplay(current.toLocaleString());
            } else {
                setDisplay(current.toString());
            }

            if (step >= steps) {
                clearInterval(timer);
                setDisplay(numericMatch[1]);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span>
            {display}
            {suffix}
        </span>
    );
}

export function StatsSection({ lang, dict }: StatsSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        dict.stats.experience,
        dict.stats.clients,
        dict.stats.employees,
        dict.stats.retention,
    ];

    return (
        <section ref={ref} className="py-16 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="container-lg relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold font-heading">
                                <AnimatedCounter value={stat.value} inView={inView} />
                            </div>
                            <div className="text-sm sm:text-base text-white/70 mt-2 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
