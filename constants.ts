
import { Service, PricingPackage, Testimonial, TeamMember, BlogPost, FAQItem } from './types';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TikTokIcon } from './components/icons/PlatformIcons';

export const SERVICES: Service[] = [
  {
    icon: InstagramIcon,
    title: 'Instagram Growth',
    description: 'Boost your presence with real followers, likes, and views to enhance your profile\'s credibility.',
  },
  {
    icon: FacebookIcon,
    title: 'Facebook Engagement',
    description: 'Increase your page\'s reach and engagement with high-quality likes, shares, and comments.',
  },
  {
    icon: YoutubeIcon,
    title: 'YouTube Views & Subs',
    description: 'Climb the ranks with more views, subscribers, and watch time for your video content.',
  },
  {
    icon: TikTokIcon,
    title: 'TikTok Viral Boost',
    description: 'Get your videos trending with a surge of followers, likes, and shares on the fastest-growing platform.',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Basic',
    price: '$19',
    features: ['1,000 Instagram Followers', 'Standard Delivery', 'Email Support', 'Profile Boost'],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    features: ['5,000 Instagram Followers', '2,500 Likes on 5 Posts', 'Instant Delivery', '24/7 Priority Support', 'Engagement Analytics'],
    isPopular: true,
  },
  {
    name: 'Premium',
    price: '$99',
    features: ['10,000 Instagram Followers', '5,000 Likes on 10 Posts', '100,000 YouTube Views', 'Dedicated Account Manager', 'Full Growth Strategy'],
    isPopular: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "SHM's services gave my brand the kickstart it needed. The growth was organic and the support team was fantastic!",
        author: "Jessica Miller",
        company: "Founder of StyleSavvy",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        quote: "I was skeptical at first, but the results speak for themselves. My engagement has skyrocketed, leading to more sales.",
        author: "Mike Chen",
        company: "E-commerce Entrepreneur",
        avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
        quote: "The process was seamless and incredibly fast. It's the most reliable service I've used for social media growth.",
        author: "Samantha Rose",
        company: "Fitness Influencer",
        avatar: "https://i.pravatar.cc/150?img=3"
    }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "John Doe",
        role: "Founder & CEO",
        image: "https://i.pravatar.cc/300?img=5"
    },
    {
        name: "Jane Smith",
        role: "Head of Marketing",
        image: "https://i.pravatar.cc/300?img=6"
    },
    {
        name: "David Lee",
        role: "Lead Developer",
        image: "https://i.pravatar.cc/300?img=7"
    },
    {
        name: "Sarah Chen",
        role: "Customer Success Manager",
        image: "https://i.pravatar.cc/300?img=8"
    }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '5-tips-to-increase-instagram-engagement',
    title: '5 Tips to Increase Instagram Engagement in 2024',
    excerpt: 'Discover proven strategies to boost your interaction rates and grow your audience on Instagram effectively.',
    content: 'In the ever-evolving world of social media, staying ahead of the curve is crucial. For Instagram, engagement is king. It\'s not just about the number of followers you have, but how many of them actively interact with your content. Here are five actionable tips to increase your Instagram engagement... 1. Post Consistently... 2. Use Engaging Captions... 3. Leverage Instagram Stories... 4. Collaborate with others... 5. Analyze your insights...',
    author: 'Admin',
    date: 'July 15, 2024',
    featuredImage: 'https://picsum.photos/seed/blog1/800/400',
  },
  {
    slug: 'the-importance-of-a-strong-social-media-presence',
    title: 'The Importance of a Strong Social Media Presence',
    excerpt: 'Learn why building a robust online presence is no longer optional for businesses and brands looking to thrive.',
    content: 'In today\'s digital-first world, your social media presence is often the first impression you make on potential customers. A strong, consistent presence across relevant platforms can build brand awareness, foster community, and drive sales. It allows you to connect with your audience on a personal level, building trust and loyalty that goes beyond a simple transaction. Don\'t underestimate the power of a well-crafted social media strategy.',
    author: 'Admin',
    date: 'July 10, 2024',
    featuredImage: 'https://picsum.photos/seed/blog2/800/400',
  },
  {
    slug: 'how-tiktok-algorithms-work',
    title: 'Decoding the TikTok Algorithm for Maximum Reach',
    excerpt: 'Unlock the secrets of the TikTok algorithm to get your content in front of millions of potential fans and customers.',
    content: 'TikTok\'s "For You" page seems almost magical in its ability to serve up content users will love. But it\'s not magic—it\'s a sophisticated algorithm. Understanding its key signals, such as user interactions, video information, and device settings, can dramatically increase your chances of going viral. Focus on creating high-retention-rate videos, using trending sounds, and participating in challenges to give your content the best shot at success.',
    author: 'Admin',
    date: 'July 5, 2024',
    featuredImage: 'https://picsum.photos/seed/blog3/800/400',
  },
];

export const SERVICE_FAQS: FAQItem[] = [
    {
        question: "Are the followers and likes from real accounts?",
        answer: "Yes, we pride ourselves on providing high-quality engagement from real and active users to ensure authentic growth for your social media profiles."
    },
    {
        question: "How long does delivery take?",
        answer: "Most of our packages offer instant or gradual delivery, starting within minutes of your purchase. Specific delivery times are mentioned on each package details."
    },
    {
        question: "Is this service safe for my account?",
        answer: "Absolutely. Our methods are 100% safe and comply with the terms of service of all social media platforms. We never ask for your password."
    },
    {
        question: "What if I'm not satisfied with the service?",
        answer: "We offer a satisfaction guarantee. If you're not happy with our service or if we fail to deliver as promised, we provide a refill or a full refund. Our 24/7 support is always here to help."
    }
];
