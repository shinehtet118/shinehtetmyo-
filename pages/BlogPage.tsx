
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
    return (
        <div className="bg-secondary">
            {/* Page Header */}
            <section className="py-16 text-center bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">Our Blog</h1>
                    <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
                        Insights, tips, and trends from the world of social media marketing.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
                                <Link to={`/blog/${post.slug}`} className="block">
                                    <img src={post.featuredImage} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm text-text-light mb-2">{post.date} &bull; {post.author}</p>
                                    <h2 className="text-xl font-bold font-display mb-3 text-primary group-hover:text-accent transition-colors">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="text-text-light mb-4 flex-grow">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="font-semibold text-accent hover:text-accent-dark mt-auto self-start">Read More &rarr;</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
