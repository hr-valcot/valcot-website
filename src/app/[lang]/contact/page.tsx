import { Locale, getDictionary } from "@/lib/i18n";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ติดต่อเรา | Valcot Partners",
    description: "ติดต่อ Valcot Partners สำหรับบริการ HR, Payroll, สรรหาบุคลากร, กฎหมาย และบัญชี ปรึกษาฟรีวันนี้",
};

export default async function ContactPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const serviceOptions = [
        { value: "hr-outsourcing", label: dict.contact.form.serviceOptions.hrOutsourcing },
        { value: "payroll", label: dict.contact.form.serviceOptions.payroll },
        { value: "recruitment", label: dict.contact.form.serviceOptions.recruitment },
        { value: "legal", label: dict.contact.form.serviceOptions.legal },
        { value: "accounting", label: dict.contact.form.serviceOptions.accounting },
        { value: "event-organizer", label: dict.contact.form.serviceOptions.eventOrganizer },
        { value: "tour-operator", label: dict.contact.form.serviceOptions.tourOperator },
        { value: "addon-services", label: dict.contact.form.serviceOptions.addonServices },
        { value: "other", label: dict.contact.form.serviceOptions.other },
    ];

    const employeeOptions = dict.contactPage.employeeOptions.map((label: string) => ({
        value: label,
        label,
    }));

    const inputClass = "w-full px-4 py-3.5 rounded-xl border border-border bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm";
    const labelClass = "block text-sm font-medium text-primary mb-2";

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a1628] via-primary to-primary-dark" />
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                <div className="container-lg relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full mb-6">
                            <Sparkles className="w-4 h-4 text-gold" />
                            <span className="text-sm font-medium text-white/80">{dict.contactPage.responseBadge}</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold font-heading leading-tight text-white">
                            {dict.contactPage.heroTitle}
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
                            {dict.contactPage.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section bg-white">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Form — 3 cols */}
                        <div className="lg:col-span-3">
                            <div className="p-8 sm:p-10 rounded-2xl border border-border bg-background">
                                <h2 className="text-2xl font-bold font-heading text-primary mb-8">
                                    {dict.contactPage.formTitle}
                                </h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClass} htmlFor="contact-name">
                                                {dict.contactPage.name} *
                                            </label>
                                            <input id="contact-name" type="text" required className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass} htmlFor="contact-email">
                                                {dict.contactPage.email} *
                                            </label>
                                            <input id="contact-email" type="email" required className={inputClass} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClass} htmlFor="contact-phone">
                                                {dict.contactPage.phone}
                                            </label>
                                            <input id="contact-phone" type="tel" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className={labelClass} htmlFor="contact-company">
                                                {dict.contactPage.company}
                                            </label>
                                            <input id="contact-company" type="text" className={inputClass} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelClass} htmlFor="contact-employees">
                                                {dict.contactPage.employees}
                                            </label>
                                            <select id="contact-employees" className={`${inputClass} cursor-pointer`}>
                                                <option value="">{dict.contactPage.employeePlaceholder}</option>
                                                {employeeOptions.map((opt) => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClass} htmlFor="contact-service">
                                                {dict.contactPage.service}
                                            </label>
                                            <select id="contact-service" className={`${inputClass} cursor-pointer`}>
                                                <option value="">{dict.contactPage.selectPlaceholder}</option>
                                                {serviceOptions.map((opt) => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClass} htmlFor="contact-message">
                                            {dict.contactPage.message} *
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={5}
                                            required
                                            className={`${inputClass} resize-none`}
                                            placeholder={dict.contactPage.messagePlaceholder}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.3)] cursor-pointer text-base"
                                    >
                                        <Send className="w-5 h-5" />
                                        {dict.contactPage.submit}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info — 2 cols */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Info Cards */}
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${dict.topBar.email}`}
                                    className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted uppercase tracking-wider">{dict.contactPage.email}</p>
                                        <p className="text-primary font-semibold mt-1">{dict.topBar.email}</p>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${dict.topBar.phone.replace(/\s/g, "")}`}
                                    className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                                        <Phone className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted uppercase tracking-wider">{dict.contactPage.phone}</p>
                                        <p className="text-primary font-semibold mt-1">{dict.topBar.phone}</p>
                                    </div>
                                </a>

                                <a
                                    href={dict.topBar.lineUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                                        <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted uppercase tracking-wider">Line Official</p>
                                        <p className="text-primary font-semibold mt-1">{dict.topBar.line}</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-5 rounded-2xl border border-border">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted uppercase tracking-wider">{dict.contactPage.officeAddress}</p>
                                        <p className="text-primary font-semibold mt-1 leading-relaxed">{dict.topBar.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 rounded-2xl border border-border">
                                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted uppercase tracking-wider">{dict.contactPage.businessHoursLabel}</p>
                                        <p className="text-primary font-semibold mt-1">
                                            {dict.contactPage.businessHoursText}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="w-full h-56 rounded-2xl overflow-hidden border border-border">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248066.87830702045!2d100.35982562578126!3d13.724726199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Valcot Partners Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
