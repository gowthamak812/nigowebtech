import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categoryColors: Record<string, string> = {
  'SEO & Performance': '#10b981',
  'SEO':              '#38bdf8',
  'Web Development':  '#6366f1',
  'Design':           '#ec4899',
  'Business':         '#f97316',
  'AI & Innovation':  '#a855f7',
};

type Section = { type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'tip' | 'callout'; content: string | string[] };

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  keywords: string[];
  sections: Section[];
}

const blogPosts: BlogPost[] = [
  {
    title: 'Why SSG (Static Site Generation) is Perfect for Business Websites',
    excerpt: 'Learn how Static Site Generation delivers lightning-fast websites with excellent SEO performance, perfect for small businesses looking to rank on Google.',
    category: 'SEO & Performance',
    date: 'February 2026',
    readTime: '5 min read',
    slug: 'ssg-perfect-for-business-websites',
    keywords: ['static site generation', 'SSG', 'Next.js SSG', 'fast business website', 'SEO performance', 'web performance'],
    sections: [
      { type: 'p', content: 'If you\'re a small business owner wondering why your competitor\'s website loads faster and ranks higher on Google, the answer might come down to one technical choice: Static Site Generation (SSG).' },
      { type: 'h2', content: 'What is Static Site Generation?' },
      { type: 'p', content: 'Static Site Generation is a technique where your website\'s pages are pre-built at deploy time — not when a user visits. Instead of generating HTML on every request (like WordPress or traditional CMS platforms do), SSG creates all your pages upfront and serves them directly from a fast CDN.' },
      { type: 'p', content: 'Think of it this way: a traditional website is like a restaurant that cooks your meal after you order. SSG is like a meal prep service — everything is ready to go the moment you arrive.' },
      { type: 'h2', content: '5 Reasons SSG is Perfect for Business Websites' },
      { type: 'h3', content: '1. Blazing-Fast Load Times' },
      { type: 'p', content: 'Pre-built HTML pages served from a CDN load in milliseconds. Google\'s PageSpeed study shows that 53% of mobile users abandon a site that takes longer than 3 seconds to load. SSG sites consistently score 90-100 on Google PageSpeed Insights.' },
      { type: 'h3', content: '2. Superior SEO Performance' },
      { type: 'p', content: 'Search engines love fast, clean HTML. SSG pages are fully rendered before Google\'s crawler arrives — no JavaScript parsing needed, no content hiding behind loading spinners. This means better crawlability, faster indexing, and stronger rankings.' },
      { type: 'h3', content: '3. Bulletproof Security' },
      { type: 'p', content: 'Static sites have no server-side logic to exploit. There\'s no database, no PHP, no WordPress plugins with known vulnerabilities. This dramatically reduces your attack surface and eliminates a whole category of security threats.' },
      { type: 'h3', content: '4. Lower Hosting Costs' },
      { type: 'p', content: 'Serving static files is incredibly cheap. Platforms like Vercel and Netlify offer generous free tiers that can handle thousands of visitors per month at zero cost. Compare this to managed WordPress hosting that starts at ₹500-2000/month and degrades under traffic.' },
      { type: 'h3', content: '5. Reliability Under Traffic Spikes' },
      { type: 'p', content: 'Static files served from a CDN can handle millions of requests without breaking a sweat. If your business runs a sale or gets mentioned in the news, your website stays up while competitors using shared hosting crash.' },
      { type: 'h2', content: 'When Should You Use SSG?' },
      { type: 'ul', content: ['Business / portfolio websites', 'Landing pages and marketing sites', 'Blogs and content-driven sites', 'E-commerce product pages (with ISR)', 'Documentation and knowledge bases'] },
      { type: 'h2', content: 'SSG with Next.js: The Best of Both Worlds' },
      { type: 'p', content: 'Next.js lets you mix SSG with Server-Side Rendering and Incremental Static Regeneration (ISR) in the same project. This means your homepage can be purely static (fastest possible), while your blog can auto-update every 60 seconds without a full rebuild.' },
      { type: 'tip', content: 'At Nigoweb, we build all our client websites using Next.js with SSG as the default strategy. Our clients consistently see Google PageSpeed scores above 95 and first page rankings within 60-90 days of launch.' },
      { type: 'h2', content: 'The Bottom Line' },
      { type: 'p', content: 'If you\'re building a business website in 2026 and you\'re not using SSG, you\'re starting the race with a handicap. The performance, SEO, and security advantages are simply too significant to ignore. The good news: with the right development partner, you can have a stunning, fast, SEO-optimised SSG website without compromising on design or functionality.' },
    ],
  },
  {
    title: 'Core Web Vitals: What Small Businesses Need to Know',
    excerpt: "Google's Core Web Vitals are crucial for SEO. Discover what they are, why they matter, and how to optimize your website for better rankings.",
    category: 'SEO',
    date: 'January 2026',
    readTime: '7 min read',
    slug: 'core-web-vitals-guide',
    keywords: ['Core Web Vitals', 'LCP', 'FID', 'CLS', 'Google SEO', 'page experience', 'website performance'],
    sections: [
      { type: 'p', content: 'Since Google made Core Web Vitals an official ranking factor in 2021, many small businesses have seen their search rankings shift — often without understanding why. If your website has dropped in rankings or you\'re struggling to compete, Core Web Vitals might be the culprit.' },
      { type: 'h2', content: 'What Are Core Web Vitals?' },
      { type: 'p', content: 'Core Web Vitals are a set of specific metrics Google uses to measure the real-world user experience of a webpage. They focus on three key aspects: loading performance, interactivity, and visual stability.' },
      { type: 'h3', content: 'LCP — Largest Contentful Paint' },
      { type: 'p', content: 'LCP measures how long it takes for the largest visible content element (usually a hero image or heading) to load. Google\'s threshold: under 2.5 seconds is "Good", 2.5–4 seconds is "Needs Improvement", over 4 seconds is "Poor".' },
      { type: 'h3', content: 'FID / INP — Interaction to Next Paint' },
      { type: 'p', content: 'INP (which replaced FID in 2024) measures how quickly your page responds to user interactions like button clicks or form submissions. Target: under 200 milliseconds.' },
      { type: 'h3', content: 'CLS — Cumulative Layout Shift' },
      { type: 'p', content: 'CLS measures visual stability — how much the page layout shifts while loading. Ever clicked a button only for the page to jump and click something else? That\'s high CLS. Target: under 0.1.' },
      { type: 'h2', content: 'Why Do Core Web Vitals Matter for Your Business?' },
      { type: 'ul', content: [
        'Direct ranking factor: Poor CWV scores can lower your position in Google search results',
        'User experience: 70% of consumers say page speed affects their willingness to buy',
        'Conversion rates: A 1-second delay in load time can reduce conversions by 7%',
        'Mobile SEO: Google uses mobile-first indexing, making mobile CWV critical',
      ]},
      { type: 'h2', content: 'How to Improve Your Core Web Vitals' },
      { type: 'h3', content: 'Improving LCP' },
      { type: 'ul', content: [
        'Use Next/Image for automatic image optimisation and lazy loading',
        'Enable CDN delivery for static assets',
        'Remove render-blocking resources (unused CSS/JS)',
        'Use WebP or AVIF image formats instead of JPEG/PNG',
        'Preload critical fonts and key images',
      ]},
      { type: 'h3', content: 'Improving INP' },
      { type: 'ul', content: [
        'Minimise JavaScript execution time',
        'Break up long tasks into smaller chunks',
        'Use web workers for heavy computations',
        'Avoid third-party scripts that block the main thread',
      ]},
      { type: 'h3', content: 'Improving CLS' },
      { type: 'ul', content: [
        'Always set explicit width and height on images and video elements',
        'Reserve space for ads and dynamic content',
        'Avoid inserting content above existing content',
        'Use CSS transform animations instead of properties that trigger layout',
      ]},
      { type: 'h2', content: 'How to Check Your Core Web Vitals Score' },
      { type: 'ol', content: [
        'Google PageSpeed Insights (pagespeed.web.dev) — free, instant analysis',
        'Google Search Console → Core Web Vitals report — real user data',
        'Chrome DevTools → Performance tab — developer-level debugging',
        'GTmetrix — detailed waterfall and filmstrip view',
      ]},
      { type: 'tip', content: 'We recently optimised a client\'s website from a PageSpeed score of 45 to 98. The result: their organic traffic increased by 40% within 60 days and their bounce rate dropped from 68% to 41%.' },
      { type: 'h2', content: 'The Competitive Advantage' },
      { type: 'p', content: 'Most small business websites in India still score below 60 on PageSpeed. If you can get your website to consistently score above 90, you have a measurable competitive advantage over your local competitors in search rankings — purely from technical performance.' },
    ],
  },
  {
    title: 'React vs WordPress: Which is Better for Your Business?',
    excerpt: 'Comparing modern JavaScript frameworks like React with traditional CMS platforms. Find out which technology stack suits your business needs.',
    category: 'Web Development',
    date: 'January 2026',
    readTime: '6 min read',
    slug: 'react-vs-wordpress',
    keywords: ['React vs WordPress', 'Next.js vs WordPress', 'best CMS for business', 'website technology stack', 'custom web development'],
    sections: [
      { type: 'p', content: 'It\'s one of the most common questions we get from clients: "Should I use WordPress or React (Next.js) for my website?" The answer isn\'t black and white — it depends on your goals, budget, and growth plans. Let\'s break it down honestly.' },
      { type: 'h2', content: 'The Case for WordPress' },
      { type: 'p', content: 'WordPress powers 43% of the web for good reason. It has a massive ecosystem, thousands of plugins, and a user-friendly editor that non-technical users can manage without developer help.' },
      { type: 'ul', content: [
        'Easy content management for non-technical teams',
        'Thousands of ready-made themes and plugins',
        'Lower initial development cost for simple sites',
        'Large community with extensive documentation',
        'WooCommerce for e-commerce needs',
      ]},
      { type: 'h3', content: 'WordPress Drawbacks' },
      { type: 'ul', content: [
        'Notoriously slow out-of-the-box (average score: 40-60 on PageSpeed)',
        'Constant security vulnerabilities from plugins',
        'Plugin conflicts that break functionality',
        'Technical debt accumulates over time',
        'Scaling is expensive and complex',
      ]},
      { type: 'h2', content: 'The Case for React / Next.js' },
      { type: 'p', content: 'React with Next.js is what modern, performance-focused businesses choose when they want their website to be a competitive advantage — not just a digital brochure.' },
      { type: 'ul', content: [
        'Consistently scores 90-100 on Google PageSpeed',
        'Superior SEO through server-side rendering and SSG',
        'Built-in security — no plugins with vulnerabilities',
        'Scales to millions of users without performance degradation',
        'Full customisation — no template limitations',
        'Modern developer tooling for faster feature delivery',
      ]},
      { type: 'h3', content: 'React / Next.js Drawbacks' },
      { type: 'ul', content: [
        'Higher initial development cost',
        'Requires a developer for content structure changes',
        'Steeper learning curve for non-technical users',
      ]},
      { type: 'h2', content: 'Head-to-Head Comparison' },
      { type: 'callout', content: 'Performance: Next.js wins clearly. Security: Next.js wins. SEO: Next.js wins. Content Management ease: WordPress wins. Initial cost: WordPress wins. Long-term ROI: Next.js wins for growing businesses.' },
      { type: 'h2', content: 'Which Should You Choose?' },
      { type: 'h3', content: 'Choose WordPress if:' },
      { type: 'ul', content: [
        'You need a simple 5-10 page brochure site on a tight budget',
        'Your team needs to self-manage content daily without developer support',
        'You need extensive e-commerce features with WooCommerce',
      ]},
      { type: 'h3', content: 'Choose React / Next.js if:' },
      { type: 'ul', content: [
        'SEO and performance are priorities',
        'You plan to scale your business significantly',
        'You need custom features beyond what plugins can offer',
        'You want long-term reliability without maintenance headaches',
        'You\'re building a SaaS product or web application',
      ]},
      { type: 'tip', content: 'For most growing businesses in India, we recommend Next.js with a headless CMS (like Sanity or Contentful). You get WordPress-like content editing ease with Next.js performance and security. The best of both worlds.' },
    ],
  },
  {
    title: 'Mobile-First Design: Why It Matters in 2026',
    excerpt: "With 60%+ of traffic coming from mobile devices, mobile-first design isn't optional anymore. Learn best practices for mobile optimization.",
    category: 'Design',
    date: 'December 2025',
    readTime: '4 min read',
    slug: 'mobile-first-design-2026',
    keywords: ['mobile-first design', 'responsive design', 'mobile UX', 'mobile SEO', 'website design 2026', 'mobile optimisation'],
    sections: [
      { type: 'p', content: 'In 2026, mobile devices account for over 60% of global web traffic. In India, that number is even higher — approximately 74% of internet users access websites primarily through smartphones. Yet, a surprising number of business websites are still designed with desktop screens as the primary target.' },
      { type: 'h2', content: 'What is Mobile-First Design?' },
      { type: 'p', content: 'Mobile-first design is an approach where you design and build for the smallest screen first, then progressively enhance the experience for larger screens. It\'s the opposite of the old approach — designing for desktop and then trying to squeeze it down for mobile.' },
      { type: 'h2', content: 'Why Mobile-First is Critical for SEO in 2026' },
      { type: 'p', content: 'Google switched to mobile-first indexing permanently in 2021. This means Google primarily uses the mobile version of your website for ranking and indexing. If your mobile experience is poor, your rankings will suffer — regardless of how good your desktop version looks.' },
      { type: 'h2', content: 'Mobile-First Design Best Practices' },
      { type: 'h3', content: '1. Touch-Friendly Targets' },
      { type: 'p', content: 'Buttons and links should be at least 44x44 pixels (Apple\'s HIG guideline) and have adequate spacing between them. Tiny, closely-packed links are a mobile UX nightmare that increases bounce rates.' },
      { type: 'h3', content: '2. Readable Typography Without Zooming' },
      { type: 'p', content: 'Body text should be at least 16px on mobile. Headings should scale with viewport width using CSS clamp(). Users should never need to zoom to read your content.' },
      { type: 'h3', content: '3. Optimised Images' },
      { type: 'p', content: 'Use Next/Image or similar tools to serve appropriately sized images for each device. A mobile screen doesn\'t need a 1920px wide hero image — but many websites still serve them, wasting bandwidth and slowing load times.' },
      { type: 'h3', content: '4. Simplified Navigation' },
      { type: 'p', content: 'Complex mega-menus don\'t work on mobile. Use hamburger menus with clear labels, keep primary navigation to 5-6 items, and make sure your most important CTAs (like "Contact Us" or "Get Quote") are always easily accessible.' },
      { type: 'h3', content: '5. Above-the-Fold Content' },
      { type: 'p', content: 'On mobile, "above the fold" is a small area. Your headline, value proposition, and primary CTA should all be visible without scrolling. Every pixel is precious on a 6-inch screen.' },
      { type: 'h2', content: 'Testing Your Mobile Experience' },
      { type: 'ol', content: [
        'Google\'s Mobile-Friendly Test (search.google.com/test/mobile-friendly)',
        'Chrome DevTools Device Toolbar for simulation',
        'Real device testing on Android and iOS',
        'BrowserStack for cross-device testing',
      ]},
      { type: 'tip', content: 'All websites we build at Nigoweb are designed mobile-first, tested on real devices, and optimised specifically for India\'s mobile internet landscape — including performance on slower 4G connections.' },
    ],
  },
  {
    title: 'How to Choose the Right Support Package for Your Website',
    excerpt: 'Understanding the different types of website maintenance and support. A guide to choosing the perfect package for your business needs.',
    category: 'Business',
    date: 'December 2025',
    readTime: '5 min read',
    slug: 'choosing-support-package',
    keywords: ['website maintenance', 'website support package', 'web support plans', 'website uptime', 'technical support', 'business website management'],
    sections: [
      { type: 'p', content: 'Your website is launched. The design is beautiful, the performance is great, and traffic is growing. But what happens when something breaks at 2am? Or when Google releases a new algorithm update? Or when you need a new landing page for a campaign next week?' },
      { type: 'p', content: 'This is where a website support and maintenance package becomes essential — not optional.' },
      { type: 'h2', content: 'Why Website Maintenance is Non-Negotiable' },
      { type: 'ul', content: [
        'Security vulnerabilities are discovered regularly — patching is critical',
        'Frameworks and dependencies need updates to stay compatible',
        'Content updates require technical knowledge on modern platforms',
        'Performance monitoring catches issues before users notice',
        'SEO requires continuous optimisation as Google evolves',
      ]},
      { type: 'h2', content: 'Types of Support Packages' },
      { type: 'h3', content: 'Basic Maintenance (Starter Plan)' },
      { type: 'p', content: 'Best for: Simple brochure websites with minimal content changes. Typically includes: monthly security updates, uptime monitoring, basic performance checks, and a small content update allowance.' },
      { type: 'h3', content: 'Active Support (Growth Plan)' },
      { type: 'p', content: 'Best for: Growing businesses that regularly need new content, landing pages, or feature updates. Includes everything in Basic plus priority response times, monthly analytics reports, SEO health checks, and more content hours.' },
      { type: 'h3', content: 'Full Management (Business Plan)' },
      { type: 'p', content: 'Best for: Businesses that treat their website as a primary sales channel. Includes everything in Growth plus dedicated account management, unlimited content updates, A/B testing, CRO analysis, and quarterly strategy calls.' },
      { type: 'h2', content: 'Key Questions to Ask Before Choosing' },
      { type: 'ol', content: [
        'How often does your website content change?',
        'Do you need 24/7 uptime monitoring with alerts?',
        'Is your website a primary revenue channel?',
        'How quickly do you need issues resolved (SLA)?',
        'Do you need regular SEO and performance reporting?',
      ]},
      { type: 'h2', content: 'The Cost of Not Having Support' },
      { type: 'p', content: 'A website going down for 4 hours during peak hours can cost thousands in lost sales. A security breach can result in Google blacklisting your site entirely. A slow site with a degraded PageSpeed score gradually loses rankings. The cost of maintenance is always less than the cost of recovering from neglect.' },
      { type: 'tip', content: 'At Nigoweb, we offer three support tiers starting from ₹3,000/month. All plans include uptime monitoring, security updates, and a dedicated WhatsApp line for urgent issues. See our pricing page for full details.' },
    ],
  },
  {
    title: 'AI Chat Assistants: The Future of Customer Service',
    excerpt: 'Explore how AI chat assistants can transform customer service on your website. Benefits, implementation, and what to expect in the near future.',
    category: 'AI & Innovation',
    date: 'November 2025',
    readTime: '6 min read',
    slug: 'ai-chat-assistants-future',
    keywords: ['AI chat assistant', 'chatbot for business', 'AI customer service', 'website chatbot', 'AI integration', 'customer support automation'],
    sections: [
      { type: 'p', content: 'Customer expectations have changed dramatically. People now expect instant responses — not just during business hours, but at 2am on a Sunday. AI chat assistants are no longer a "nice-to-have" for large enterprises. In 2026, they\'re becoming a competitive necessity for any business that values customer experience.' },
      { type: 'h2', content: 'What is an AI Chat Assistant?' },
      { type: 'p', content: 'Unlike simple rule-based chatbots that follow a rigid script ("Press 1 for support"), modern AI chat assistants are powered by large language models (LLMs) that understand natural language, context, and nuance. They can answer complex questions, qualify leads, schedule appointments, and escalate to humans when needed.' },
      { type: 'h2', content: 'Business Benefits of AI Chat Assistants' },
      { type: 'h3', content: '1. 24/7 Availability' },
      { type: 'p', content: 'An AI assistant never sleeps, takes holidays, or gets sick. Your customers get instant responses at 11pm on Diwali. Studies show that 79% of customers prefer live chat support — and now you can offer it around the clock without hiring overnight staff.' },
      { type: 'h3', content: '2. Reduced Support Tickets' },
      { type: 'p', content: 'AI assistants can resolve 60-80% of common customer queries automatically — FAQs, order status, pricing, returns policies. This frees your human team to focus on complex, high-value interactions. One of our clients saw a 60% drop in support tickets within one month of implementation.' },
      { type: 'h3', content: '3. Lead Qualification' },
      { type: 'p', content: 'AI can engage website visitors proactively, ask qualifying questions, and route hot leads directly to your sales team with a full conversation transcript. No more cold leads from generic contact forms.' },
      { type: 'h3', content: '4. Consistent Brand Voice' },
      { type: 'p', content: 'Every interaction follows your brand guidelines, tone of voice, and escalation policies — regardless of who\'s "on duty". No rogue responses, no off-brand replies.' },
      { type: 'h2', content: 'Implementing AI Chat on Your Website' },
      { type: 'ol', content: [
        'Define your use cases: support, lead gen, appointment booking, or all three',
        'Train the AI on your FAQs, product information, and business context',
        'Set up escalation rules: when to hand over to a human',
        'Integrate with your CRM or WhatsApp Business',
        'Monitor conversations and continuously improve',
      ]},
      { type: 'h2', content: 'What to Expect From AI in 2026 and Beyond' },
      { type: 'p', content: 'The next generation of AI assistants will handle voice calls, video interactions, and deeply personalised customer journeys based on browsing history and purchase behaviour. Businesses that adopt AI now are building the infrastructure and data foundation to leverage these advances.' },
      { type: 'tip', content: 'Nigoweb builds custom AI chat assistants powered by the latest LLM APIs, trained on your specific business knowledge. We handle everything from UI integration to backend logic and WhatsApp connectivity. Get in touch for a demo.' },
    ],
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  const color = categoryColors[post.category] ?? '#6366f1';

  return {
    title: `${post.title} | Nigoweb Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
    authors: [{ name: 'Nigoweb Technologies' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    other: {
      'theme-color': color,
    },
  };
}

function renderSection(section: Section, index: number, color: string) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 key={index} style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.3, marginTop: '2.5rem', marginBottom: '0.85rem' }}>
          {section.content as string}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em', lineHeight: 1.4, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
          {section.content as string}
        </h3>
      );
    case 'p':
      return (
        <p key={index} style={{ fontSize: '1rem', color: '#4b5563', lineHeight: 1.85, fontWeight: 450, marginBottom: '1rem' }}>
          {section.content as string}
        </p>
      );
    case 'ul':
      return (
        <ul key={index} style={{ marginBottom: '1rem', paddingLeft: '0', listStyle: 'none' }}>
          {(section.content as string[]).map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.75, marginBottom: '0.5rem', fontWeight: 450 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0, marginTop: '0.6rem' }} />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} style={{ marginBottom: '1rem', paddingLeft: '0', listStyle: 'none', counterReset: 'list' }}>
          {(section.content as string[]).map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.75, marginBottom: '0.6rem', fontWeight: 450 }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: `${color}15`, border: `1.5px solid ${color}40`, color, fontSize: '0.65rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.2rem' }}>
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case 'tip':
      return (
        <div key={index} style={{ background: `${color}0d`, border: `1.5px solid ${color}30`, borderLeft: `4px solid ${color}`, borderRadius: '14px', padding: '1.25rem 1.5rem', margin: '1.75rem 0', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '0.1rem' }}>💡</span>
          <p style={{ fontSize: '0.92rem', color: '#374151', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
            {section.content as string}
          </p>
        </div>
      );
    case 'callout':
      return (
        <div key={index} style={{ background: 'linear-gradient(135deg, #0e1a42, #111827)', borderRadius: '16px', padding: '1.5rem', margin: '1.75rem 0' }}>
          <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontWeight: 500, margin: 0 }}>
            {section.content as string}
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const color = categoryColors[post.category] ?? '#6366f1';
  const postIndex = blogPosts.indexOf(post);
  const related = blogPosts.filter((_, i) => i !== postIndex).slice(0, 3);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f5f7ff 0%, #ffffff 60%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full" style={{ background: `${color}0d`, filter: 'blur(120px)' }} />
          <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(236,72,153,0.05)', filter: 'blur(100px)' }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className="container relative z-10 max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-indigo-600"
            style={{ fontSize: '0.82rem', fontWeight: 700, color: '#6b7280', textDecoration: 'none' }}
          >
            <svg style={{ width: '0.9rem', height: '0.9rem' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>

          {/* Category badge — inline only */}
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
            <span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                padding: '4px 14px', borderRadius: '999px',
                fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                color, background: `${color}12`, border: `1.5px solid ${color}30`,
              }}
            >
              {post.category}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.18, marginBottom: '1.25rem' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 450, marginBottom: '1.75rem', maxWidth: '42rem' }}>
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: `${color}20`, border: `2px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ width: '0.85rem', height: '0.85rem', color }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151' }}>Nigoweb Team</span>
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af' }}>{post.date}</span>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af' }}>·</span>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af' }}>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Article body ───────────────────────────────── */}
      <section className="relative py-14 overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="container relative z-10 max-w-3xl mx-auto">

          {/* Decorative top rule */}
          <div style={{ height: '3px', background: `linear-gradient(90deg, ${color}, ${color}40, transparent)`, borderRadius: '999px', marginBottom: '2.5rem' }} />

          {/* Article content */}
          <article>
            {post.sections.map((section, i) => renderSection(section, i, color))}
          </article>

          {/* Tags */}
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  style={{
                    padding: '3px 12px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700,
                    color: '#6b7280', background: '#f3f4f6', border: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div
            style={{
              marginTop: '3rem', borderRadius: '24px', overflow: 'hidden',
              background: 'linear-gradient(135deg, #0e1a42 0%, #111827 55%, #1a0b30 100%)',
              padding: '2.5rem', position: 'relative',
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: `${color}18`, filter: 'blur(80px)', transform: 'translate(20%,-20%)' }} />
            <div className="relative z-10">
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                Ready to grow your business?
              </p>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.25, marginBottom: '0.75rem' }}>
                Let&apos;s build something great together
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontWeight: 450, marginBottom: '1.5rem', maxWidth: '28rem' }}>
                From fast, SEO-optimised websites to custom AI solutions — we help Indian businesses grow online.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.75rem 1.5rem', borderRadius: '12px', fontWeight: 800,
                    fontSize: '0.85rem', color: '#fff', textDecoration: 'none',
                    background: 'linear-gradient(135deg,#fb923c,#ec4899)',
                    boxShadow: '0 6px 20px rgba(251,146,60,0.25)',
                  }}
                >
                  Start Your Project
                  <svg style={{ width: '0.9rem', height: '0.9rem' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/blog"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.75rem 1.5rem', borderRadius: '12px', fontWeight: 700,
                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                    background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(255,255,255,0.12)',
                  }}
                >
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ──────────────────────────────── */}
      <section className="section-services relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="container relative z-10 max-w-5xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((rp, i) => {
              const rColor = categoryColors[rp.category] ?? '#6366f1';
              return (
                <Link
                  key={i}
                  href={`/blog/${rp.slug}`}
                  className="group flex flex-col"
                  style={{ borderRadius: '18px', overflow: 'hidden', background: '#ffffff', border: '1.5px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', textDecoration: 'none', transition: 'all 300ms' }}
                >
                  <div style={{ height: '3px', background: `linear-gradient(90deg, ${rColor}, ${rColor}60)`, flexShrink: 0 }} />
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <span style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: '999px', fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: rColor, background: `${rColor}10`, border: `1px solid ${rColor}20` }}>
                      {rp.category}
                    </span>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#111827', lineHeight: 1.45, letterSpacing: '-0.02em' }}
                      className="group-hover:text-indigo-600 transition-colors">
                      {rp.title}
                    </h3>
                    <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#9ca3af' }}>{rp.readTime}</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: rColor }}>Read →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
