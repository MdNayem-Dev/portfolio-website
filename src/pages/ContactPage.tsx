import React, { useState, useRef } from 'react';
import {
  MapPin,
  Code2,
  Clock,
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useVanillaTilt } from '../hooks/useVanillaTilt';

export const ContactPage: React.FC = () => {
  const { data, t, isBn } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const isLocked = useRef(false);

  useVanillaTilt();

  const officialEmail = "contact@mdnayem.dev";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked.current || isSubmitting) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert(isBn ? 'দয়া করে সবগুলো প্রয়োজনীয় তথ্য পূরণ করুন।' : 'Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    isLocked.current = true;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      isLocked.current = false;
    }, 900);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen min-h-[100dvh] w-full max-w-full overflow-x-hidden">
      {/* Header Banner */}
      <div className="bg-[#edf5fd] dark:bg-slate-900/60 py-10 sm:py-16 px-4 sm:px-6 text-center border-b border-slate-100 dark:border-slate-800 transition-colors">
        <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
          {t('contact.title')}
        </h1>
        <div className="w-16 sm:w-20 h-1 bg-[#0066ff] dark:bg-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <div
              className="tilt-card bento-card p-6 sm:p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm"
              data-tilt
              data-tilt-max="5"
              data-tilt-scale="1.01"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <Check size={32} />
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {t('contact.successTitle')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-6">
                    {t('contact.successDesc')}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 text-left max-w-md mx-auto mb-6 text-xs text-slate-600 dark:text-slate-300 space-y-2 border border-slate-200/80 dark:border-slate-700/60">
                    <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
                      {isBn ? 'প্রেরিত তথ্যের বিবরণ' : 'Submission Details'}
                    </h5>
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {isBn ? 'নাম: ' : 'Name: '}
                      </span>
                      {formData.name}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        {isBn ? 'ইমেইল: ' : 'Email: '}
                      </span>
                      {formData.email}
                    </div>
                    {formData.phone && (
                      <div>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {isBn ? 'ফোন: ' : 'Phone: '}
                        </span>
                        {formData.phone}
                      </div>
                    )}
                    {formData.subject && (
                      <div>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {isBn ? 'বিষয়: ' : 'Subject: '}
                        </span>
                        {formData.subject}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="press-3d px-6 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-900 dark:hover:bg-slate-100 cursor-pointer shadow-xs"
                  >
                    {t('contact.sendAnother')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 sm:mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2">
                      {t('contact.badge')}
                    </span>
                    <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
                      {t('contact.subtitle')}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                          {t('contact.nameLabel')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.namePlaceholder')}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                          {t('contact.emailLabel')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.emailPlaceholder')}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                          {t('contact.phoneLabel')}
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('contact.phonePlaceholder')}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                          {t('contact.subjectLabel')}
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder={t('contact.subjectPlaceholder')}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        {t('contact.messageLabel')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.messagePlaceholder')}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="press-3d w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl text-sm font-bold tracking-wide hover:bg-slate-900 dark:hover:bg-slate-100 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>{t('contact.sending')}</span>
                      ) : (
                        <>
                          <span>{t('contact.sendButton')}</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Contact Information Card */}
            <div
              className="tilt-card bento-card p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm"
              data-tilt
              data-tilt-max="6"
              data-tilt-scale="1.01"
            >
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-6">
                {isBn ? 'ডেভেলপার তথ্য' : 'Developer Information'}
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">
                      {t('contact.locationLabel')}
                    </h5>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">{data.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">
                      {isBn ? 'প্রধান দক্ষতা' : 'Primary Specialization'}
                    </h5>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                      {isBn ? 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট (Next.js ও React)' : 'Full-Stack Web Development (Next.js & React)'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">
                      {isBn ? 'রেসপন্স সময়' : 'Response Time'}
                    </h5>
                    <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                      {isBn ? 'সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হয়' : 'Usually replies within 24 hours'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Mail size={16} className="text-red-500 shrink-0" />
                      <span className="font-mono text-xs text-slate-800 dark:text-slate-200 truncate">
                        {officialEmail}
                      </span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="press-3d text-xs font-bold px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 shrink-0 ml-2 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-600 dark:text-emerald-400">{t('contact.copied')}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>{t('contact.copyEmail')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Cards */}
            <div
              className="tilt-card bento-card p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm"
              data-tilt
              data-tilt-max="6"
              data-tilt-scale="1.01"
            >
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-4">
                {isBn ? 'সরাসরি যোগাযোগ' : 'Connect Directly'}
              </h3>

              <div className="space-y-2.5">
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 transition flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-sm">
                      <i className="fab fa-github" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        GitHub Profile
                      </h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">github.com/MdNayem-Dev</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50/60 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-800 transition flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center text-xs">
                      <i className="fab fa-linkedin-in" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        LinkedIn Profile
                      </h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">linkedin.com/in/md-nayem-dev</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={data.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-200 dark:hover:border-emerald-800 transition flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center text-xs">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        WhatsApp Chat
                      </h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {isBn ? 'তাৎক্ষণিক সরাসরি বার্তা' : 'Instant direct messaging'}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href={data.socials.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-red-50/60 dark:hover:bg-red-950/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-red-200 dark:hover:border-red-800 transition flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EA4335] text-white flex items-center justify-center text-xs">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {isBn ? 'সরাসরি ইমেইল' : 'Direct Email'}
                      </h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">contact@mdnayem.dev</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
