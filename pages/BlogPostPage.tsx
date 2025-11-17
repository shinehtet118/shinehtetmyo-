
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { FacebookIcon, TwitterIcon } from '../components/icons/SocialIcons';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-4xl font-bold font-display">Post not found!</h1>
                <Link to="/blog" className="mt-8 inline-block bg-accent text-white font-semibold py-2 px-5 rounded-lg hover:bg-accent-dark">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <article>
                        <header className="mb-8 text-center">
                             <Link to="/blog" className="text-accent font-semibold hover:text-accent-dark mb-4 inline-block">&larr; Back to all posts</Link>
                            <h1 className="text-3xl md:text-5xl font-bold font-display text-primary leading-tight">{post.title}</h1>
                            <p className="text-text-light mt-4">{post.date} by {post.author}</p>
                        </header>
                        
                        <img src={post.featuredImage} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8" />
                        
                        <div className="prose lg:prose-xl max-w-none text-text-light">
                            <p className="lead font-semibold text-text-dark">{post.excerpt}</p>
                            {post.content.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <footer className="mt-12 pt-8 border-t">
                           <div className="flex items-center justify-center space-x-4">
                                <span className="font-semibold text-text-dark">Share this post:</span>
                                <a href="#" aria-label="Share on Twitter" className="text-gray-500 hover:text-primary"><TwitterIcon className="w-6 h-6"/></a>
                                <a href="#" aria-label="Share on Facebook" className="text-gray-500 hover:text-primary"><FacebookIcon className="w-6 h-6"/></a>
                           </div>
                        </footer>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;
