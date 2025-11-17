// FIX: Import React to provide types for React components.
import React from 'react';

export interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  featuredImage: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}