/* Portfolio data — edit here to add apps, projects, or experience */

const SITE = {
  name: 'MD. Tipu Sultan',
  title: 'Senior iOS Software Engineer',
  tagline:
    'Building secure, scalable, and high-quality native iOS applications with Swift, SwiftUI, and UIKit.',
  email: 'tipu.diu.cse@gmail.com',
  phone: '+880-1685-471304',
  location: 'Dhaka, Bangladesh',
  linkedin: 'https://www.linkedin.com/in/md-tipu-sultan-a65839189/',
  github: 'https://github.com/mdtipusultan',
  leetcode: 'https://leetcode.com/u/mdtipuSultan',
  canonical: 'https://mdtipusultan.github.io',
};

const HERO_TECH = [
  'Swift',
  'SwiftUI',
  'UIKit',
  'Swift Concurrency',
  'REST APIs',
  'FinTech',
];

const ABOUT_STATS = [
  { value: '5+', label: 'Years Experience' },
  { value: '10–12', label: 'App Store Apps' },
  { value: 'Swift', label: 'Primary Language' },
  { value: 'FinTech', label: 'Industry Experience' },
];

const EXPERTISE = [
  {
    title: 'iOS Development',
    items: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Combine',
      'Swift Concurrency',
      'async/await',
      'Task',
      'GCD',
    ],
  },
  {
    title: 'Architecture',
    items: ['MVVM', 'Clean Architecture', 'SOLID', 'Modular Design'],
  },
  {
    title: 'Networking',
    items: [
      'REST APIs',
      'URLSession',
      'JSON',
      'Offline-first',
      'Secure networking',
    ],
  },
  {
    title: 'Security',
    items: [
      'Keychain',
      'Certificates',
      'Certificate-based authentication',
      'Encryption',
      'Secure persistence',
    ],
  },
  {
    title: 'Testing & Delivery',
    items: [
      'XCTest',
      'UI Testing',
      'TDD',
      'CI/CD',
      'Fastlane',
      'App Store Connect',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Xcode',
      'Instruments',
      'Git',
      'Swift Package Manager',
      'CocoaPods',
    ],
  },
];

const FEATURED_APPS = [
  {
    id: 'paintit-ai',
    name: 'PaintIt AI',
    subtitle: 'AI Image Generator',
    icon: '🎨',
    iconBg: 'rgba(175,82,222,0.15)',
    description:
      'AI-powered image generation application that turns prompts and photos into custom visuals through secure REST API integration.',
    technologies: ['Swift', 'SwiftUI', 'async/await', 'REST APIs', 'Secure Networking'],
    features: [
      'AI image generation via REST APIs',
      'SwiftUI client with async/await',
      'Secure networking and offline caching',
      'Full lifecycle delivery to the App Store',
    ],
    contribution:
      'Integrated AI image generation through REST APIs, built the SwiftUI client, and shipped the application to production on the App Store.',
    appStore: 'https://apps.apple.com/us/app/paintit-ai-ai-image-generator/id6752225485',
    featured: true,
    problem:
      'Users need a fast, native iOS experience for AI-powered image creation without compromising on security or performance.',
    solution:
      'Built a SwiftUI application with async/await networking, secure API communication, and offline caching for a responsive production experience.',
    architecture: 'MVVM with modular networking layer and secure API integration.',
  },
  {
    id: 'water-now',
    name: 'Water Now',
    subtitle: 'Drink Water Reminder',
    icon: '💧',
    iconBg: 'rgba(90,200,250,0.15)',
    description:
      'Health tracking application for iOS and watchOS with hydration reminders, persistent storage, and background task support.',
    technologies: ['Swift', 'SwiftUI', 'watchOS', 'Core Data', 'CloudKit', 'Notifications'],
    features: [
      'iOS and watchOS companion app',
      'Customizable hydration goals and reminders',
      'Core Data and CloudKit persistence',
      'Background tasks and local notifications',
    ],
    contribution:
      'Delivered iOS and watchOS apps in SwiftUI with notifications, background tasks, and persistent storage using Core Data and CloudKit.',
    appStore: 'https://apps.apple.com/us/app/water-now-drink-reminder/id1566509843',
    featured: true,
    problem:
      'Users need reliable hydration tracking across iPhone and Apple Watch with reminders that work in the background.',
    solution:
      'Implemented a SwiftUI app with watchOS companion, Core Data persistence, CloudKit sync, and notification scheduling.',
    architecture: 'MVVM with Core Data persistence and CloudKit synchronization.',
  },
  {
    id: 'banking',
    name: 'Banking Applications',
    subtitle: 'Secure Payment Systems',
    icon: '🏦',
    iconBg: 'rgba(52,199,89,0.15)',
    description:
      'Production fintech and banking iOS applications contributed to across multiple financial institutions in Bangladesh.',
    technologies: [
      'UIKit',
      'SwiftUI',
      'Keychain',
      'REST APIs',
      'Encryption',
      'Offline-first',
    ],
    features: [
      'Secure payment flows and money transfers',
      'Mobile top-ups and bill payments',
      'FDR/DPS account opening',
      'Certificate-based authentication',
      'End-to-end encryption and Keychain storage',
      'Offline-first architecture with secure persistence',
    ],
    contribution:
      'Contributed to production banking applications implementing secure payment flows, REST API integration, and financial security best practices.',
    banks: ['FSIBL', 'Jamuna Bank', 'SJIBL', 'Citizen Bank', 'RAKUB'],
    featured: true,
    isBanking: true,
    problem:
      'Financial institutions require secure, reliable mobile banking with protected transactions and offline resilience.',
    solution:
      'Implemented secure payment modules with Keychain storage, certificate-based authentication, encrypted API communication, and offline-first data handling.',
    architecture: 'Clean Architecture with modular payment flows and secure persistence layers.',
  },
];

const LIVE_APPS = [
  {
    id: 'water-now-daily',
    name: 'Water Now: Daily Drink Tracker',
    icon: '💧',
    iconBg: 'rgba(90,200,250,0.15)',
    description:
      'Advanced hydration tracker with barcode scanning, automatic drink logging, and separate food calorie tracking.',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'Barcode Scanning'],
    appStore: 'https://apps.apple.com/us/app/water-now-daily-drink-tracker/id6444253456',
  },
  {
    id: 'type-now',
    name: 'Type Now: AI Keyboard',
    icon: '⌨️',
    iconBg: 'rgba(0,122,255,0.15)',
    description:
      'AI keyboard extension for writing, grammar correction, translation, and instant AI answers across any app.',
    technologies: ['Swift', 'UIKit', 'Keyboard Extension', 'AI Integration'],
    appStore: 'https://apps.apple.com/us/app/type-now-ai-keyboard/id6756789249',
  },
  {
    id: 'driproom',
    name: 'DripRoom: AI Outfit Try-On',
    icon: '👗',
    iconBg: 'rgba(255,45,85,0.15)',
    description:
      'AI-powered virtual fitting room that lets users visualize clothing on their own photos before purchasing.',
    technologies: ['Swift', 'SwiftUI', 'REST APIs', 'AI Integration'],
    appStore: 'https://apps.apple.com/us/app/driproom-ai-outfit-try-on/id6762542615',
  },
  {
    id: 'easy-caption',
    name: 'Easy Caption: Speech to Text',
    icon: '🎙️',
    iconBg: 'rgba(255,149,0,0.15)',
    description:
      'Speech-to-text application for live recording and audio/video import with editing, captioning, and translation.',
    technologies: ['Swift', 'SwiftUI', 'Speech Recognition', 'async/await'],
    appStore: 'https://apps.apple.com/us/app/easy-caption-speech-to-text/id6762548669',
  },
  {
    id: 'qr-maker',
    name: 'QR Maker: QR Code Generator',
    icon: '📱',
    iconBg: 'rgba(52,199,89,0.15)',
    description:
      'QR code creator and barcode scanner for generating and scanning codes with a native iOS experience.',
    technologies: ['Swift', 'SwiftUI', 'AVFoundation', 'Core Image'],
    appStore: 'https://apps.apple.com/us/app/qr-maker-qr-code-generator/id6480269610',
  },
  {
    id: 'calckey',
    name: 'CalcKey: Calculator Keyboard',
    icon: '🔢',
    iconBg: 'rgba(88,86,214,0.15)',
    description:
      'Calculator keyboard extension for instant math calculations without switching between applications.',
    technologies: ['Swift', 'UIKit', 'Keyboard Extension'],
    appStore: 'https://apps.apple.com/us/app/calckey-calculator-keyboard/id6748647909',
  },
  {
    id: 'paintit-headshot',
    name: 'Paintit: AI Headshot Generator',
    icon: '🖼️',
    iconBg: 'rgba(175,82,222,0.15)',
    description:
      'AI headshot and image generation app that transforms photos using prompt-driven AI models.',
    technologies: ['Swift', 'SwiftUI', 'REST APIs', 'AI Integration'],
    appStore: 'https://apps.apple.com/us/app/paintit-ai-headshot-generator/id6752225485',
  },
];

const GITHUB_PROJECTS = [
  {
    id: 'pomodoro-timer',
    name: 'ChickFocus — Pomodoro Timer',
    repo: 'https://github.com/mdtipusultan/Pomodoro-Timer',
    icon: '🍅',
    iconBg: 'rgba(255,149,0,0.15)',
    description:
      'Native Pomodoro focus timer with SwiftUI, SwiftData persistence, watchOS companion, home screen widgets, and Live Activities.',
    technologies: ['Swift', 'SwiftUI', 'SwiftData', 'watchOS', 'WidgetKit', 'Live Activities', 'StoreKit'],
    features: [
      'Focus timer with customizable work/break intervals',
      'SwiftData persistence for session history',
      'Apple Watch companion app',
      'Home screen widgets and Live Activities',
      'In-app purchases via StoreKit',
    ],
    contribution: 'Designed and built the full iOS, watchOS, and widget extension ecosystem.',
    architecture: 'SwiftUI with SwiftData, environment-based services, and modular timer/persistence layers.',
    highlight: 'Demonstrates multi-target iOS development with widgets, Live Activities, and watchOS.',
  },
  {
    id: 'bloomly',
    name: 'Bloomly — Pregnancy Tracker',
    repo: 'https://github.com/mdtipusultan/Bloomly-Pregnancy-Tracker',
    icon: '🌸',
    iconBg: 'rgba(255,45,85,0.15)',
    description:
      'Comprehensive pregnancy tracking app with week-by-week guides, nutrition tips, appointment scheduling, and bump photo journaling.',
    technologies: ['Swift', 'SwiftUI', 'WidgetKit', 'StoreKit', 'Localization'],
    features: [
      'Week-by-week pregnancy guide and daily tips',
      'Nutrition tracking and baby name suggestions',
      'Appointment scheduling and bump photo journal',
      'Home screen widget extension',
      'Localization support and in-app purchases',
    ],
    contribution: 'Built the full SwiftUI application with data-driven content and widget extension.',
    architecture: 'SwiftUI with JSON-driven content models and widget extension target.',
    highlight: 'Health-focused consumer app with rich localized content and widget support.',
  },
  {
    id: 'mygrowth',
    name: 'MyGrowth — Daily Micro-Learning',
    repo: 'https://github.com/mdtipusultan/MyGrowth-Daily-Micro-Learning',
    icon: '📚',
    iconBg: 'rgba(0,122,255,0.15)',
    description:
      'Daily micro-learning platform with structured chapters, quizzes, achievements, progress tracking, and audio lessons.',
    technologies: ['Swift', 'SwiftUI', 'Firebase', 'Combine', 'StoreKit'],
    features: [
      'Structured learning paths with chapters and sections',
      'Interactive quizzes and achievement system',
      'User progress tracking and premium access',
      'Audio lesson playback',
      'Firebase backend integration',
    ],
    contribution: 'Architected the learning flow, quiz system, and Firebase-integrated content delivery.',
    architecture: 'MVVM with service layer for auth, audio, and Firebase content management.',
    highlight: 'Educational app showcasing modular architecture with gamification and premium tiers.',
  },
  {
    id: 'voice-keyboard',
    name: 'Translating Voice Message Keyboard',
    repo: 'https://github.com/mdtipusultan/TranslatingVoiceMessageWithKeyboard',
    icon: '🗣️',
    iconBg: 'rgba(88,86,214,0.15)',
    description:
      'Custom keyboard extension that records voice messages, transcribes speech, and translates text across multiple languages.',
    technologies: ['Swift', 'UIKit', 'Keyboard Extension', 'Speech Recognition', 'Translation APIs'],
    features: [
      'Custom keyboard extension for system-wide use',
      'Voice recording and speech-to-text transcription',
      'Multi-language translation support',
      'Share extension for voice message processing',
      'Extensive localization (15+ languages)',
    ],
    contribution: 'Built the keyboard extension, audio recording pipeline, and translation service integration.',
    architecture: 'Keyboard extension with modular audio recorder, speech manager, and translation service layers.',
    highlight: 'Advanced iOS extension development with audio processing and real-time translation.',
  },
];

const EXPERIENCE = [
  {
    company: 'Right Tracks IT Limited',
    role: 'Senior Software Engineer (iOS)',
    period: 'June 2025 – Present',
    location: 'Dhaka, Bangladesh',
    badge: 'Current',
    badgeType: 'current',
    highlights: [
      'Lead architectural decisions applying SOLID principles and TDD.',
      'Design SwiftUI features with Swift Concurrency (async/await, Task).',
      'Refactor UIKit code to SwiftUI to reduce technical debt.',
      'Mentor junior developers on Swift practices and security-first development.',
      'Maintain 85%+ code coverage with XCTest and UI tests.',
    ],
  },
  {
    company: 'FinTech HUB Limited',
    role: 'Senior Software Engineer (iOS)',
    period: 'July 2024 – July 2025',
    location: 'Dhaka, Bangladesh',
    badge: 'FinTech',
    badgeType: 'fintech',
    highlights: [
      'Architected fintech iOS apps with secure payment flows and certificate-based authentication.',
      'Migrated Combine and callback-based code to async/await, reducing complexity by 40%.',
      'Built a modular SDK aligned with REST API and iOS security standards.',
      'Led code reviews for 4+ engineers; established SOLID, TDD, and CI/CD practices.',
      'Mentored 2 junior developers on architecture and security standards.',
    ],
  },
  {
    company: 'LEADS Corporation Limited',
    role: 'Senior Software Engineer (iOS)',
    period: 'December 2023 – June 2024',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built iOS applications in UIKit and SwiftUI using Clean Architecture and MVVM.',
      'Achieved 80%+ code coverage with automated testing.',
      'Managed Fastlane CI/CD pipelines, reducing deployment time by 35%.',
      'Published and maintained 3 applications on the Apple App Store.',
    ],
  },
  {
    company: 'BizMotion Limited',
    role: 'Software Engineer (iOS)',
    period: 'February 2022 – November 2023',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built iOS applications with REST API integrations and Core Data persistence.',
      'Collaborated with product, design, and QA teams in Agile sprints.',
      'Participated in code reviews and improved development standards.',
    ],
  },
  {
    company: 'Brain Craft Ltd',
    role: 'Junior Software Engineer',
    period: 'April 2021 – November 2021',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Developed foundational iOS skills through production software development.',
      'Contributed to quality assurance and code analysis practices.',
    ],
  },
];

const ENGINEERING_APPROACH = [
  {
    num: '01',
    title: 'Architecture',
    description: 'MVVM, Clean Architecture, SOLID, and modular design for maintainable codebases.',
  },
  {
    num: '02',
    title: 'Performance',
    description: 'Swift Concurrency, efficient networking, caching, and memory management.',
  },
  {
    num: '03',
    title: 'Security',
    description: 'Keychain, certificates, secure API communication, and sensitive data handling.',
  },
  {
    num: '04',
    title: 'Quality',
    description: 'XCTest, UI testing, code reviews, and continuous integration pipelines.',
  },
  {
    num: '05',
    title: 'Delivery',
    description: 'TestFlight, App Store Connect, signing, provisioning, and production releases.',
  },
  {
    num: '06',
    title: 'Collaboration',
    description: 'Working with backend, product, design, and QA teams to ship reliable products.',
  },
];

const SHIPPING_PIPELINE = [
  'Idea',
  'Architecture',
  'Development',
  'Testing',
  'CI/CD',
  'TestFlight',
  'App Store',
  'Maintenance',
];

const ACHIEVEMENTS = [
  {
    title: 'ACM ICPC 2018',
    subtitle: 'Asia Dhaka Regional Contest',
    detail: 'Daffodil International University',
    icon: '🏆',
  },
  {
    title: 'LeetCode',
    subtitle: 'Competitive Programming',
    detail: 'Strong algorithmic problem-solving foundation',
    icon: '⚡',
    link: SITE.leetcode,
  },
];

const PUBLICATION = {
  title:
    'An Automated Visa Prediction Technique for Higher Studies Using Machine Learning',
  publisher: 'Published by Springer',
  date: 'January 2021',
  link: 'https://link.springer.com/chapter/10.1007/978-981-16-2641-853',
};

const EDUCATION = {
  degree: 'Bachelor of Science (BSc), Computer Science & Engineering',
  school: 'Daffodil International University',
  period: '2016 – 2020',
};
