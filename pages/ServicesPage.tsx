
import React, { useState } from 'react';
import { PRICING_PACKAGES, SERVICE_FAQS } from '../constants';
import { CheckCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

const AccordionItem: React.FC<{ faq: { question: string, answer: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-primary"
                onClick={onClick}
            >
                <span>{faq.question}</span>
                {isOpen ? <MinusIcon className="w-5 h-5 text-accent" /> : <PlusIcon className="w-5 h-5 text-gray-400" />}
            </button>
            {isOpen && (
                <div className="mt-4 text-text-light">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    );
};


const ServicesPage: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-secondary py-16 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">Services & Pricing</h1>
                    <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
                        Transparent pricing for powerful results. Choose the plan that's right for you.
                    </p>
                </div>
            </section>

            {/* Pricing Table */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {PRICING_PACKAGES.map((pkg, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 ${pkg.isPopular ? 'border-2 border-accent scale-105' : 'border'}`}
                            >
                                {pkg.isPopular && (
                                    <div className="text-center mb-4">
                                        <span className="bg-accent text-white text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold font-display text-center text-primary">{pkg.name}</h3>
                                <p className="text-center my-4">
                                    <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                                    <span className="text-text-light">/mo</span>
                                </p>
                                <ul className="space-y-4 my-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckCircleIcon className="w-6 h-6 text-accent mr-3" />
                                            <span className="text-text-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors duration-300 ${pkg.isPopular ? 'bg-accent text-white hover:bg-accent-dark' : 'bg-accent/10 text-accent hover:bg-accent/20'}`}>
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-secondary py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Frequently Asked Questions</h2>
                        <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
                            Have questions? We have answers. Here are some common queries about our services.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {SERVICE_FAQS.map((faq, index) => (
                           <AccordionItem 
                                key={index}
                                faq={faq}
                                isOpen={openFaqIndex === index}
                                onClick={() => toggleFaq(index)}
                           />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
