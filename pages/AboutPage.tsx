
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { ShieldCheckIcon, ClockIcon, CreditCardIcon, UsersIcon } from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const benefits = [
    {
      icon: ClockIcon,
      title: "Instant Delivery",
      description: "Our automated systems begin processing your order immediately for the fastest results."
    },
    {
      icon: UsersIcon,
      title: "Real Users",
      description: "We provide high-quality engagement from real profiles to ensure authentic growth."
    },
    {
      icon: ShieldCheckIcon,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions."
    },
    {
      icon: CreditCardIcon,
      title: "Secure Payments",
      description: "Your transactions are protected with industry-standard encryption and security protocols."
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">About SHM</h1>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
            Your trusted partner in social media growth and digital marketing excellence.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://picsum.photos/seed/mission/600/400" alt="Our Mission" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-display text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-text-light mb-4">
                At SHM, our mission is to empower creators, brands, and businesses to achieve their full potential on social media. We believe that a strong online presence is the cornerstone of modern success, and we are dedicated to providing effective, safe, and reliable services that deliver tangible results.
              </p>
              <p className="text-text-light">
                We are committed to innovation, customer satisfaction, and ethical practices, ensuring our clients not only grow their numbers but also build genuine, engaged communities around their brands.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              We deliver unparalleled service and results that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-primary">{benefit.title}</h3>
                <p className="text-text-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">Meet the Experts</h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              The passionate individuals driving your success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg" />
                <h3 className="text-xl font-bold font-display text-primary">{member.name}</h3>
                <p className="text-accent font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
