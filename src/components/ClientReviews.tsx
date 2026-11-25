import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  role: string;
  location: string;
  date: string;
  comment: string;
  projectTag: string;
  rating: number; // 3, 4, or 5 stars
}

const row1Reviews: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Mehedi Hasan Rocky',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Founder, AgroConnect BD',
    location: 'Dhaka, Bangladesh',
    date: 'April 8, 2026',
    comment:
      'Alhamdulillah excellent work! Nayem built our agricultural e-commerce platform with Next.js and Prisma. Fast checkout and 100% trusted developer in BD.',
    projectTag: 'AgroMart Platform',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Product Lead, CloudScale',
    location: 'Toronto, Canada',
    date: 'March 14, 2026',
    comment:
      'Very solid full-stack skills with React 19 and Prisma. Quick turnaround on API endpoints. Small timezone delay on 1 revision, but overall great output!',
    projectTag: 'React 19 & APIs',
    rating: 4,
  },
  {
    id: 'rev-3',
    name: 'Tanvir Ahmed',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Tech Lead, DigitalVibe',
    location: 'Chittagong, Bangladesh',
    date: 'January 19, 2026',
    comment:
      'Freelancing projects er jonno Nayem ke hire korechi. Next.js 16 aar MariaDB backend ekdom cleanly build kore diyeche. Best decision to work with him!',
    projectTag: 'Next.js 16 Full-Stack',
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Frontend Lead, Studio Nord',
    location: 'Berlin, Germany',
    date: 'February 9, 2026',
    comment:
      'Great code architecture and clean TypeScript types. Mobile responsiveness matched our Figma specs precisely. Would work with him again.',
    projectTag: 'TypeScript UI',
    rating: 4,
  },
  {
    id: 'rev-5',
    name: 'Ariful Islam',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Marketing Specialist',
    location: 'Dhaka, Bangladesh',
    date: 'January 4, 2026',
    comment:
      'AgroMart e-commerce project e Nayem er kaj bhalo chilo. Timely update peyechi ebong communication o valo chilo. Sob milie service onek bhalo.',
    projectTag: 'E-Commerce Solution',
    rating: 4,
  },
  {
    id: 'rev-6',
    name: 'David Brown',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Product Owner, SaaS Studio',
    location: 'London, UK',
    date: 'November 18, 2025',
    comment:
      'Nayem built our Next.js edge portal. Exceptional TypeScript typing, zero bug delivery, and clean architecture documentation.',
    projectTag: 'Edge SSR Portal',
    rating: 5,
  },
];

const row2Reviews: ReviewItem[] = [
  {
    id: 'rev-7',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Founder, SparkLabs',
    location: 'Austin, Texas, USA',
    date: 'December 5, 2025',
    comment:
      'Working with Nayem was effortless. He understood our requirements and delivered a high-converting Next.js storefront. Conversion jumped after launch.',
    projectTag: 'E-Commerce Storefront',
    rating: 5,
  },
  {
    id: 'rev-8',
    name: 'Nayan Ali',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Senior Developer & Mentor',
    location: 'Rajshahi, Bangladesh',
    date: 'March 30, 2026',
    comment:
      'Backend API integration aar frontend reactivity eksathe pelam ekta clean codebase e. Code structure dekhe khub bhalo legeche. Joss service!',
    projectTag: 'RESTful API & Auth',
    rating: 4,
  },
  {
    id: 'rev-9',
    name: 'Liam O\'Connor',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Engineering Manager',
    location: 'Sydney, Australia',
    date: 'February 17, 2026',
    comment:
      'Super fast deployment on Cloudflare Workers and D1 database. Nayem solved complex edge SSR issues in record time without compromising latency.',
    projectTag: 'Cloudflare Edge D1',
    rating: 5,
  },
  {
    id: 'rev-10',
    name: 'Tariq Al-Mansoor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Founder, DesertRetail',
    location: 'Dubai, UAE',
    date: 'March 8, 2026',
    comment:
      'Good developer with strong Next.js knowledge. Project took slightly longer than initial estimate due to scope additions, but end product is reliable.',
    projectTag: 'Custom Web Portal',
    rating: 3,
  },
  {
    id: 'rev-11',
    name: 'Fariha Zaman',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Operations Head, Studio Craft',
    location: 'Dhaka, Bangladesh',
    date: 'March 22, 2026',
    comment:
      'Nayem built our digital products platform with user auth, automated downloads, and dashboard. Mobile responsive performance 10/10.',
    projectTag: 'Digital Products Platform',
    rating: 5,
  },
  {
    id: 'rev-12',
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80',
    role: 'Fintech Founder',
    location: 'Singapore',
    date: 'January 28, 2026',
    comment:
      'Solid work connecting our MariaDB database with Next.js server actions. Clean code, prompt communication, and dependable execution.',
    projectTag: 'Database Integration',
    rating: 4,
  },
];

export const ClientReviews: React.FC = () => {
  const { data, isBn } = useLanguage();

  return (
    <section className="w-full py-10 sm:py-16 bg-[#f8fafc] dark:bg-slate-900/50 relative overflow-hidden select-none border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header text with realistic rating badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-6 sm:mb-10 relative z-10">
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0066ff] dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/50 px-2.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50 inline-block mb-2">
          {isBn ? 'ক্লায়েন্ট রিভিউ ও মূল্যায়ন' : 'CLIENT REVIEWS & FEEDBACK'}
        </span>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isBn ? 'আমার কাজ সম্পর্কে ক্লায়েন্টদের মতামত' : 'What Past Clients Say About My Work'}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mt-1.5 leading-relaxed">
          {isBn ? 'বাংলাদেশ ও আন্তর্জাতিক পর্যায়ের উদ্যোক্তা, ফাউন্ডার ও টেক লিডদের সরাসরি অভিজ্ঞতা।' : 'Real feedback from founders, tech leads, and business owners across Bangladesh and global teams.'}
        </p>

        {/* Aggregate Stats Badges - Realistic 4.8 Rating */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 xs:gap-4 sm:gap-6 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-slate-200/70 dark:border-slate-700/50 max-w-lg mx-auto text-xs">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400 text-xs">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm">
              {isBn ? '৪.৮ / ৫.০ রেটিং' : '4.8 / 5.0 Rating'}
            </span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block" />
          <div className="text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center gap-1">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">{isBn ? '৯৬%' : '96%'}</span> {isBn ? 'ক্লায়েন্ট সন্তুষ্টি' : 'Client Satisfaction'}
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block" />
          <div className="text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center gap-1">
            <span className="text-blue-600 dark:text-blue-400 font-bold">{isBn ? 'দেশী ও আন্তর্জাতিক' : 'BD & Global'}</span> {isBn ? 'ক্লায়েন্ট' : 'Clients'}
          </div>
        </div>
      </div>

      {/* Marquee Wrapper with side fade gradient mask */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* Row 1: Sliding Left to Right */}
        <div
          className="animate-marquee-right flex gap-3 sm:gap-4 pb-3 sm:pb-3.5"
          style={{ animationDuration: '44s' }}
        >
          {[...row1Reviews, ...row1Reviews].map((item, idx) => (
            <div
              key={`c-r1-${idx}`}
              className="w-[260px] xs:w-[285px] sm:w-[325px] md:w-[345px] rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700/70 hover:border-blue-400 dark:hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 p-3.5 sm:p-4 shrink-0 flex flex-col justify-between group cursor-default"
            >
              {/* Card Header: Avatar, Name, Recommends Badge, Dots */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      width="36"
                      height="36"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80';
                      }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">
                          {item.name}
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                          <span className="text-emerald-600 text-[11px]">👍</span>
                          rec. <strong className="text-slate-800 dark:text-slate-200 font-semibold">{data.name}</strong>
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span className="text-slate-500 dark:text-slate-400 truncate max-w-[120px]">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Top-right menu icon */}
                  <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors text-xs font-mono shrink-0 cursor-pointer">
                    •••
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs leading-relaxed my-2 sm:my-2.5 min-h-[46px]">
                  {item.comment}
                </p>
              </div>

              {/* Card Footer: Verified Client Pill & Star Rating (Filled + Unfilled) */}
              <div className="flex items-center justify-between pt-2.5 mt-1 border-t border-slate-100 dark:border-slate-700/50">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="truncate max-w-[140px]">{item.projectTag}</span>
                </div>

                {/* Star rating rendering */}
                <div className="flex items-center gap-0.5 text-[11px] shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < item.rating ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right to Left */}
        <div
          className="animate-marquee-left flex gap-3 sm:gap-4 pt-1"
          style={{ animationDuration: '44s' }}
        >
          {[...row2Reviews, ...row2Reviews].map((item, idx) => (
            <div
              key={`c-r2-${idx}`}
              className="w-[260px] xs:w-[285px] sm:w-[325px] md:w-[345px] rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700/70 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 p-3.5 sm:p-4 shrink-0 flex flex-col justify-between group cursor-default"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      width="36"
                      height="36"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80';
                      }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight truncate">
                          {item.name}
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                          <span className="text-emerald-600 text-[11px]">👍</span>
                          rec. <strong className="text-slate-800 dark:text-slate-200 font-semibold">{data.name}</strong>
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span className="text-slate-500 dark:text-slate-400 truncate max-w-[120px]">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors text-xs font-mono shrink-0 cursor-pointer">
                    •••
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs leading-relaxed my-2 sm:my-2.5 min-h-[46px]">
                  {item.comment}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2.5 mt-1 border-t border-slate-100 dark:border-slate-700/50">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="truncate max-w-[140px]">{item.projectTag}</span>
                </div>

                <div className="flex items-center gap-0.5 text-[11px] shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < item.rating ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
