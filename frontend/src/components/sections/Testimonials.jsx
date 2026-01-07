import React from 'react';
import GlassCard from '../GlassCard';
import GlassPill from '../GlassPill';

const Testimonials = () => {
  const stats = [
    { value: "4.8★", label: "Rating", icon: "star_rate" },
    { value: "500K+", label: "Active Users", icon: "group" },
    { value: "92%", label: "Happy", icon: "sentiment_satisfied" },
    { value: "4.5", label: "Years", icon: "history" }
  ];

  const testimonials = [
   
    {
      quote: "AllFile Pro saved my finals week. The eye-friendly mode is amazing.",
      name: "Aisha Khan",
      role: "Verified User • Student",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCbuUZvQn71dtPRxp_jj9rUyO9JFedvc7XPp1VK1eKw42wkr8ZfRWf4JHCIZVtWydfZWKSI4vHJ9-Jbj3pZ96NlAx2fKCxRlSrfsXAgXHQUUwQBvhPA-z7earZFc25O34sUoiq0VDZJOCAwk0qgl5beHIFc4-P_E-Ht9fIC1YwBpBUc8YZbULZ4yezr4fK2fpLFHARPI3TmP_ENfv0TwqmzvGs7JYtEbnSL4-0ddSZbuVTEaK1v1gmKZmARdiI02LfmqnwlbHO2Bk"
    },
 
    {
      quote: "The AI features help me learn better. I love AllFile Pro!",
      name: "Priya Patel",
      role: "Verified User • Researcher",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuACtE7jsWulNIbsi95QXYPqGxLquTFgFgFIsHOeQDDjCUMxY0RJZCIHPaxHUtMEHKVCYSNaTOertCZRBSM70vpFG9x-9mBCm3LSBYjYX7zuTiug7_HyZd_cyXvzDAoDoDYHwLBN62cmCHsV_LDVty-5TJmomFpiukK0yupCqXgSQhNv7ML3l2xUEjhrB7JFMvNbcHGpJmCWaKHkvzeaYR27kvKUveU6sCH34izbVparKzrTCe-lbCLDi0VZsM32pPCMvrNwgX_5YWYHOBfgX-bxq9tTJ9b0-rc2PlKQXrheoGiZoGNCdz9Lx-OfDfNhXwPBaPxXJ2F3kCiUKxANdr9hNMbc19dnmPiuVZGqUgO9QejSu6qpDqpFLHwg5XjlAPUFwdcoL-KEvbHAN5vCn1Uwfw2aiYmA"
    },
    {
      quote: "Perfect reading experience. I use AllFile Pro daily.",
      name: "Fatima Zahra",
      role: "Verified User • Book Lover",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd5oXT9qdDuonuap-3jY7Udtlcy4hTRiUW5u2AYl6XM_LrSEatXKV-vSSZWP2cNP1Ld6Li0sXvHrmE2Zvv9Q1d4TU4h_MSm-FIQMJIIf86uGina_H02Te98EvKHABdMoroPx7uEEggHPr6Re23VJ1B5_x2ddnxO3soRascQVn6BjlwMq6XDdQ2vTzU1BD__wubvSpCDX37L8LSD4dJd0gGMEQiNHK2Qv4d7tsOj8I2et_mRqKOUPh9sXpI5cfoiE_YHvzedgLWiL8"
    },
 
  ];

  return (
    <section id="testimonials" className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 py-20 lg:px-12 lg:py-28 bg-paper">
      {/* Header Section */}
      <div className="flex flex-col items-center max-w-4xl text-center mb-16 space-y-6">
        <GlassPill className="inline-flex items-center px-4 py-2 border border-black/5 rounded-full shadow-sm">
          <span className="text-amber-500 material-symbols-outlined text-[18px] mr-2">star</span>
          <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200 uppercase">Loved by Thousands</span>
        </GlassPill>
        <h2 className="text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
          Don't Just Take Our Word For It
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Join students, professionals, and researchers who trust AllFile Pro for a seamless, eye-friendly reading and editing experience.
        </p>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-[960px] mb-20">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 px-6 py-4 bg-white/90 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-black/5 shadow-sm min-w-[160px] justify-center transition-transform hover:-translate-y-1 duration-300">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white leading-none">{stat.value}</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full mb-16">
        {testimonials.map((testimonial, index) => (
          <GlassCard key={index} className="group flex flex-col p-8 h-full hover:shadow-xl">
            {/* Stars */}
            <div className="flex gap-1 mb-6 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined fill-current text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            {/* Quote */}
            <blockquote className="flex-1 mb-8">
              <p className="text-lg italic text-gray-800 dark:text-gray-200 leading-relaxed font-normal">
                "{testimonial.quote}"
              </p>
            </blockquote>
            {/* Author */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="h-12 w-12 rounded-full bg-cover bg-center shrink-0 border border-white shadow-sm" style={{ backgroundImage: `url(${testimonial.avatar})` }}></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base text-gray-900 dark:text-white">{testimonial.name}</span>
                  <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>check_circle</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{testimonial.role}</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full flex justify-center">
        <button className="group flex items-center gap-2 px-8 py-4 bg-white/50 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-primary dark:text-primary font-bold text-base rounded-xl transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-lg">
          <span>Read All 10,000+ Reviews on Google Play</span>
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
