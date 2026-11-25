export type TranslationKey =
  | 'nav.home'
  | 'nav.about'
  | 'nav.projects'
  | 'nav.contact'
  | 'nav.resume'
  | 'nav.langSwitcher'
  | 'hero.tagline'
  | 'hero.headline'
  | 'hero.subheadline'
  | 'hero.viewProjects'
  | 'hero.downloadCv'
  | 'hero.previewCv'
  | 'hero.aboutMe'
  | 'hero.available'
  | 'hero.experienceYears'
  | 'hero.projectsDone'
  | 'hero.clientRating'
  | 'hero.verified'
  | 'hero.recentWorks'
  | 'section.whatIBring'
  | 'section.whatIBringSub'
  | 'section.selectedWork'
  | 'section.selectedWorkSub'
  | 'section.viewAllProjects'
  | 'section.developerStory'
  | 'section.aboutMeEyebrow'
  | 'section.aboutMeTitle'
  | 'section.aboutP1'
  | 'section.aboutP2'
  | 'section.aboutP3'
  | 'section.aboutQuote'
  | 'section.technicalProficiency'
  | 'section.skillsSub'
  | 'section.philosophy'
  | 'section.philosophySub'
  | 'section.philosophyDesc'
  | 'section.coreStack'
  | 'section.dataArch'
  | 'section.edgeArch'
  | 'section.clientReviews'
  | 'section.clientReviewsSub'
  | 'section.faq'
  | 'section.faqSub'
  | 'section.ctaEyebrow'
  | 'section.ctaTitle'
  | 'section.ctaDesc'
  | 'section.ctaButton'
  | 'section.milestones'
  | 'section.milestonesSub'
  | 'project.viewGithub'
  | 'project.liveDemo'
  | 'project.architecturePillars'
  | 'project.keyHighlights'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.badge'
  | 'contact.nameLabel'
  | 'contact.namePlaceholder'
  | 'contact.emailLabel'
  | 'contact.emailPlaceholder'
  | 'contact.phoneLabel'
  | 'contact.phonePlaceholder'
  | 'contact.subjectLabel'
  | 'contact.subjectPlaceholder'
  | 'contact.messageLabel'
  | 'contact.messagePlaceholder'
  | 'contact.sendButton'
  | 'contact.sending'
  | 'contact.successTitle'
  | 'contact.successDesc'
  | 'contact.sendAnother'
  | 'contact.directContact'
  | 'contact.locationLabel'
  | 'contact.availabilityLabel'
  | 'contact.availableNow'
  | 'contact.copyEmail'
  | 'contact.copied'
  | 'contact.officialEmail'
  | 'footer.brandDesc'
  | 'footer.directory'
  | 'footer.connect'
  | 'footer.systemTelemetry'
  | 'footer.rights';

export const translations: Record<'en' | 'bn', Record<TranslationKey, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.langSwitcher': 'Language',
    'hero.tagline': 'FULL-STACK WEB DEVELOPER',
    'hero.headline': "Hello, I'm Nayem.",
    'hero.subheadline': 'Building Modern Next.js & React Web Applications.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCv': 'Download CV',
    'hero.previewCv': 'Preview CV',
    'hero.aboutMe': 'About Me',
    'hero.available': 'Available for Projects',
    'hero.experienceYears': 'Production Ready',
    'hero.projectsDone': 'Completed Projects',
    'hero.clientRating': 'Positive Rating',
    'hero.verified': 'Verified Developer',
    'hero.recentWorks': 'Featured Works',
    'section.whatIBring': 'WHAT I BRING TO THE TABLE',
    'section.whatIBringSub': 'Core Technical Capabilities & Engineering Strengths',
    'section.selectedWork': 'SELECTED WORK',
    'section.selectedWorkSub': 'Production Web Applications & Engineered Solutions',
    'section.viewAllProjects': 'View All Projects',
    'section.developerStory': 'DEVELOPER STORY',
    'section.aboutMeEyebrow': 'ABOUT ME',
    'section.aboutMeTitle': 'A Developer Who Loves to Build & Solve',
    'section.aboutP1':
      "I'm Md. Nayem Hossain — a full-stack web developer focused on building modern, responsive, and practical web applications using Next.js and React. I genuinely love turning ideas into clean code, and solving real-world business challenges.",
    'section.aboutP2':
      "Over the years I've worked across frontend development, server-side functionality, database integration, authentication, and e-commerce solutions. My recent work includes an agricultural e-commerce platform (AgroMart), a luxury jewellery storefront (LumiFable), and a digital products platform (PulseCut AI).",
    'section.aboutP3':
      "Along the way I've architected edge solutions with Cloudflare Workers & D1, paired with Prisma ORM and MariaDB to ensure lightning-fast performance, rock-solid security, and seamless user experiences across all devices.",
    'section.aboutQuote':
      "Great software is about reliability, clarity, and purpose. That's what drives me every day.",
    'section.technicalProficiency': 'TECHNICAL PROFICIENCY',
    'section.skillsSub': 'Skills, Frameworks & Tooling',
    'section.philosophy': 'PROFESSIONAL SUMMARY',
    'section.philosophySub': 'Full-Stack Engineering Philosophy',
    'section.philosophyDesc':
      'I prioritize clean architectures, strict TypeScript typing, responsive mobile execution, robust database pooling, and seamless edge deployment so applications remain scalable under production loads.',
    'section.coreStack': 'Core Stack',
    'section.dataArch': 'Data Architecture',
    'section.edgeArch': 'Edge Runtime',
    'section.clientReviews': 'CLIENT ENDORSEMENTS',
    'section.clientReviewsSub': 'What Clients & Collaborators Say',
    'section.faq': 'FREQUENTLY ASKED QUESTIONS',
    'section.faqSub': 'Everything You Need to Know',
    'section.ctaEyebrow': 'COLLABORATION & INQUIRIES',
    'section.ctaTitle': 'Ready to Build Something Exceptional?',
    'section.ctaDesc':
      "Have an upcoming project, freelance requirement, or full-stack role? Let's connect and turn your vision into high-impact software.",
    'section.ctaButton': "Let's Connect",
    'section.milestones': 'CAREER & ENGINEERING JOURNEY',
    'section.milestonesSub': 'Continuous Progression & Hands-on Milestones',
    'project.viewGithub': 'View Source Code',
    'project.liveDemo': 'Live Preview',
    'project.architecturePillars': 'Architecture Pillars',
    'project.keyHighlights': 'Key Highlights',
    'contact.title': 'Contact Me',
    'contact.subtitle': "Let's build something exceptional together",
    'contact.badge': 'Open for Inquiries',
    'contact.nameLabel': 'Your Name',
    'contact.namePlaceholder': 'John Doe',
    'contact.emailLabel': 'Email Address',
    'contact.emailPlaceholder': 'you@example.com',
    'contact.phoneLabel': 'Phone Number (Optional)',
    'contact.phonePlaceholder': '+880 1XXX-XXXXXX',
    'contact.subjectLabel': 'Subject',
    'contact.subjectPlaceholder': 'Project Collaboration / Inquiry',
    'contact.messageLabel': 'Your Message',
    'contact.messagePlaceholder': 'Tell me about your project, timeline, and goals...',
    'contact.sendButton': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.successTitle': 'Message Sent Successfully!',
    'contact.successDesc':
      'Thank you for reaching out. I will review your note and respond as soon as possible.',
    'contact.sendAnother': 'Send Another Message',
    'contact.directContact': 'Direct Contact Info',
    'contact.locationLabel': 'Location',
    'contact.availabilityLabel': 'Availability',
    'contact.availableNow': 'Open for New Projects & Roles',
    'contact.copyEmail': 'Copy Email',
    'contact.copied': 'Copied to Clipboard!',
    'contact.officialEmail': 'contact@mdnayem.dev',
    'footer.brandDesc':
      'Full-Stack Web Developer focused on building modern, responsive, and practical web applications using Next.js and React.',
    'footer.directory': 'DIRECTORY',
    'footer.connect': 'CONNECT',
    'footer.systemTelemetry': 'SYSTEM TELEMETRY',
    'footer.rights': 'ALL RIGHTS RESERVED.',
  },
  bn: {
    'nav.home': 'হোম',
    'nav.about': 'পরিচিতি',
    'nav.projects': 'প্রজেক্ট',
    'nav.contact': 'যোগাযোগ',
    'nav.resume': 'সিভি',
    'nav.langSwitcher': 'ভাষা পরিবর্তন',
    'hero.tagline': 'ফুল-স্ট্যাক ওয়েব ডেভেলপার',
    'hero.headline': 'হ্যালো, আমি নাঈম।',
    'hero.subheadline': 'আধুনিক Next.js ও React ওয়েব অ্যাপ্লিকেশন নির্মাণকারী।',
    'hero.viewProjects': 'প্রজেক্ট দেখুন',
    'hero.downloadCv': 'সিভি ডাউনলোড',
    'hero.previewCv': 'সিভি দেখুন',
    'hero.aboutMe': 'আমার সম্পর্কে',
    'hero.available': 'নতুন প্রজেক্টের জন্য উন্মুক্ত',
    'hero.experienceYears': 'প্রোডাকশন-রেডি অভিজ্ঞতা',
    'hero.projectsDone': 'সফল প্রজেক্ট',
    'hero.clientRating': 'ইতিবাচক মূল্যায়ন',
    'hero.verified': 'ভেরিফায়েড ডেভেলপার',
    'hero.recentWorks': 'বিশেষ প্রজেক্টসমূহ',
    'section.whatIBring': 'আমার বিশেষ কারিগরি দক্ষতা',
    'section.whatIBringSub': 'আধুনিক ওয়েব অ্যাপ্লিকেশন নির্মাণে প্রযুক্তিগত শক্তিমত্তা',
    'section.selectedWork': 'নির্বাচিত প্রজেক্টসমূহ',
    'section.selectedWorkSub': 'প্রোডাকশন-গ্রেড ওয়েব অ্যাপ ও আধুনিক সফটওয়্যার সলিউশন',
    'section.viewAllProjects': 'সকল প্রজেক্ট দেখুন',
    'section.developerStory': 'ডেভেলপার পরিচিতি',
    'section.aboutMeEyebrow': 'আমার পরিচিতি',
    'section.aboutMeTitle': 'যে ডেভেলপার কোডিং ও সমস্যা সমাধানে নিবেদিত',
    'section.aboutP1':
      'আমি মোঃ নাঈম হোসেন — একজন ফুল-স্ট্যাক ওয়েব ডেভেলপার, যিনি Next.js এবং React ব্যবহার করে আধুনিক, রেসপনসিভ এবং ব্যবহারিক ওয়েব অ্যাপ্লিকেশন তৈরিতে নিবেদিত। বাস্তব জীবনের সমস্যা সমাধান এবং সৃজনশীল আইডিয়াকে কার্যকর কোডে রূপান্তর করতে আমি দারুণ উপভোগ করি।',
    'section.aboutP2':
      'কাজের অভিজ্ঞতা অনুযায়ী আমি ফ্রন্টএন্ড ডেভেলপমেন্ট, সার্ভার-সাইড কার্যকারিতা, ডাটাবেস ইন্টিগ্রেশন, সিকিউরিটি ও প্রমাণীকরণ এবং ই-কমার্স সলিউশন নিয়ে কাজ করেছি। আমার সাম্প্রতিক কাজের মধ্যে রয়েছে এগ্রোমার্ট (কৃষি ই-কমার্স), লুমিফ্যাবল (বিলাসবহুল জুয়েলারি স্টোর) এবং পালসকাট এআই (অটোমেটেড ভিডিও স্টুডিও)।',
    'section.aboutP3':
      'পাশাপাশি আমি ক্লাউডফ্লেয়ার ওয়ার্কার্স ও D1 দিয়ে এজ কম্পিউটিং আর্কিটেকচার এবং প্রিজমা ও মারিয়াডিবি-র সাহায্যে হাই-পারফর্ম্যান্স ডাটাবেস লেয়ার তৈরি করেছি, যাতে প্রতিটি ডিভাইসে ব্যবহারকারী পায় দ্রুততম ও নির্ভরযোগ্য অভিজ্ঞতা।',
    'section.aboutQuote':
      'উন্নত সফটওয়্যারের মূল ভিত্তি হলো নির্ভরযোগ্যতা, স্বচ্ছতা ও কার্যকারিতা। এটিই আমার প্রতিদিনের কাজের মূল অনুপ্রেরণা।',
    'section.technicalProficiency': 'প্রযুক্তিগত দক্ষতা',
    'section.skillsSub': 'দক্ষতা, ফ্রেমওয়ার্ক ও টুলস',
    'section.philosophy': 'পেশাদার সারসংক্ষেপ',
    'section.philosophySub': 'ফুল-স্ট্যাক ইঞ্জিনিয়ারিং দর্শন',
    'section.philosophyDesc':
      'আমি পরিচ্ছন্ন কোড আর্কিটেকচার, কঠোর টাইপস্ক্রিপ্ট টাইপিং, নিখুঁত মোবাইল রেসপনসিভনেস, শক্তিশালী ডাটাবেস পুলিং এবং এজ ডিপ্লয়মেন্টকে অগ্রাধিকার দিই, যাতে অ্যাপ্লিকেশন সবসময় স্কেলেবল ও দ্রুতগতির থাকে।',
    'section.coreStack': 'মূল প্রযুক্তি',
    'section.dataArch': 'ডাটাবেস আর্কিটেকচার',
    'section.edgeArch': 'এজ রানটাইম',
    'section.clientReviews': 'ক্লায়েন্ট মূল্যায়ন ও রিভিউ',
    'section.clientReviewsSub': 'ক্লায়েন্ট ও সহযোগীদের বাস্তব অভিজ্ঞতা',
    'section.faq': 'সাধারণ কিছু জিজ্ঞাসা (FAQ)',
    'section.faqSub': 'আপনার প্রয়োজনীয় সকল তথ্য',
    'section.ctaEyebrow': 'সহযোগিতা ও আলোচনা',
    'section.ctaTitle': 'একটি দারুণ প্রজেক্ট শুরু করতে চান?',
    'section.ctaDesc':
      'আপনার কোনো নতুন প্রজেক্ট, ফ্রিল্যান্স কাজ বা ফুল-স্ট্যাক ডেভলপমেন্টের প্রয়োজন আছে? আসুন কথা বলি এবং আপনার আইডিয়াকে বাস্তবে রূপ দিই।',
    'section.ctaButton': 'যোগাযোগ করুন',
    'section.milestones': 'কাজের অভিজ্ঞতা ও অগ্রগতি',
    'section.milestonesSub': 'ধাপে ধাপে প্রযুক্তিগত উৎকর্ষ অর্জন',
    'project.viewGithub': 'গিটহাব সোর্স কোড',
    'project.liveDemo': 'লাইভ প্রিভিউ',
    'project.architecturePillars': 'আর্কিটেকচার স্তম্ভসমূহ',
    'project.keyHighlights': 'মূল বৈশিষ্ট্যসমূহ',
    'contact.title': 'যোগাযোগ করুন',
    'contact.subtitle': 'আসুন একসাথে অসাধারণ কিছু তৈরি করি',
    'contact.badge': 'নতুন কাজের জন্য উন্মুক্ত',
    'contact.nameLabel': 'আপনার নাম',
    'contact.namePlaceholder': 'আপনার পুরো নাম লিখুন',
    'contact.emailLabel': 'ইমেইল অ্যাড্রেস',
    'contact.emailPlaceholder': 'you@example.com',
    'contact.phoneLabel': 'ফোন নম্বর (ঐচ্ছিক)',
    'contact.phonePlaceholder': '+৮৮০ ১XXX-XXXXXX',
    'contact.subjectLabel': 'বিষয়',
    'contact.subjectPlaceholder': 'প্রজেক্ট সংক্রান্ত আলোচনা',
    'contact.messageLabel': 'আপনার বার্তা',
    'contact.messagePlaceholder': 'আপনার প্রজেক্টের বিস্তারিত এবং উদ্দেশ্য সম্পর্কে লিখুন...',
    'contact.sendButton': 'বার্তা পাঠান',
    'contact.sending': 'পাঠানো হচ্ছে...',
    'contact.successTitle': 'বার্তা সফলভাবে পাঠানো হয়েছে!',
    'contact.successDesc':
      'যোগাযোগ করার জন্য ধন্যবাদ। আমি খুব শীঘ্রই আপনার বার্তার উত্তর দেব।',
    'contact.sendAnother': 'আরেকটি বার্তা পাঠান',
    'contact.directContact': 'সরাসরি যোগাযোগের ঠিকানা',
    'contact.locationLabel': 'অবস্থান',
    'contact.availabilityLabel': 'কাজের প্রাপ্যতা',
    'contact.availableNow': 'নতুন কাজের জন্য প্রস্তুত',
    'contact.copyEmail': 'ইমেইল কপি করুন',
    'contact.copied': 'কপি করা হয়েছে!',
    'contact.officialEmail': 'contact@mdnayem.dev',
    'footer.brandDesc':
      'ফুল-স্ট্যাক ওয়েব ডেভেলপার — Next.js এবং React ব্যবহার করে আধুনিক ও ব্যবহারিক ওয়েব সলিউশন নির্মাণে নিবেদিত।',
    'footer.directory': 'ডিরেক্টরি',
    'footer.connect': 'কানেক্ট',
    'footer.systemTelemetry': 'সিস্টেম স্ট্যাটাস',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
  },
};
