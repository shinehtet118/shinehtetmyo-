
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, BLOG_POSTS } from '../constants';
import { InstagramIcon, FacebookIcon, YoutubeIcon, TikTokIcon } from '../components/icons/PlatformIcons';

const platformIcons = {
    Instagram: InstagramIcon,
    Facebook: FacebookIcon,
    YouTube: YoutubeIcon,
    TikTok: TikTokIcon,
};

const HomePage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-4">
                        Amplify Your Social Presence
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
                        Unlock explosive growth with our industry-leading social media services. Real results, instant impact.
                    </p>
                    <Link to="/services" className="bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-accent-dark transition-transform duration-300 transform hover:scale-105 inline-block">
                        Explore Our Services
                    </Link>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Our Core Services</h2>
                        <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
                            We offer a complete suite of services to boost your brand across all major platforms.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                                    <service.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold font-display mb-2 text-primary">{service.title}</h3>
                                <p className="text-text-light">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* How It Works Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Get Started in 3 Simple Steps</h2>
                        <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
                           Our process is designed for simplicity and speed.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-accent mb-4">01</div>
                            <h3 className="text-xl font-bold font-display mb-2 text-primary">Choose a Package</h3>
                            <p className="text-text-light">Select the service and package that best fits your growth goals.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-accent mb-4">02</div>
                            <h3 className="text-xl font-bold font-display mb-2 text-primary">Provide Details</h3>
                            <p className="text-text-light">Enter your social media username or link. No password required.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-accent mb-4">03</div>
                            <h3 className="text-xl font-bold font-display mb-2 text-primary">Watch the Growth</h3>
                            <p className="text-text-light">Sit back and watch as your social presence grows within minutes.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Social Proof/Trust Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Trusted by Thousands</h2>
                         <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
                            We've helped over 10,000+ clients achieve their social media goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                                <p className="text-text-light mb-4">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4"/>
                                    <div>
                                        <p className="font-bold text-primary">{testimonial.author}</p>
                                        <p className="text-sm text-text-light">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center items-center space-x-8 grayscale opacity-60">
                        {Object.entries(platformIcons).map(([name, Icon]) => (
                            <Icon key={name} className="h-8 w-8 text-gray-500" title={name} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Preview Section */}
            <section className="py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Latest Insights</h2>
                        <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
                            Stay ahead of the curve with our expert tips and analysis.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {BLOG_POSTS.slice(0, 3).map((post) => (
                            <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                                <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                                <div className="p-6">
                                    <p className="text-sm text-text-light mb-2">{post.date}</p>
                                    <h3 className="text-xl font-bold font-display mb-2 text-primary group-hover:text-accent transition-colors">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <p className="text-text-light mb-4">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="font-semibold text-accent hover:text-accent-dark">Read More &rarr;</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-accent text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Ready to Elevate Your Brand?</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-lg">
                        Join thousands of creators and businesses who trust SHM to amplify their social impact.
                    </p>
                    <Link to="/services" className="bg-white text-accent font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 inline-block">
                        Get Started Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
