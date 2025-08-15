import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        '.testimonials-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate testimonial cards
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: scrollContainerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Content Creator",
      location: "Singapore",
      content: "Manoj's course transformed my Tamil content strategy completely. Within 3 months, my Instagram following grew from 5K to 50K! His practical tips and authentic approach made all the difference.",
      rating: 5,
      followers: "50K+ followers gained"
    },
    {
      name: "Ravi Kumar",
      role: "Small Business Owner",
      location: "Malaysia",
      content: "As a Tamil business owner, I needed to connect with my community online. Manoj's strategies helped me build a loyal customer base through engaging Tamil content. My sales increased by 300%!",
      rating: 5,
      followers: "300% sales increase"
    },
    {
      name: "Lakshmi Devi",
      role: "Food Blogger",
      location: "India",
      content: "The editing techniques and platform-specific strategies Manoj taught me were game-changing. My Tamil cooking videos now regularly get 100K+ views across all platforms.",
      rating: 5,
      followers: "100K+ views per video"
    },
    {
      name: "Arjun Patel",
      role: "Comedian",
      location: "Singapore",
      content: "Manoj's insights into Tamil humor and cultural content creation helped me find my unique voice. My TikTok account went viral, and now I have brand deals coming in regularly.",
      rating: 5,
      followers: "Viral TikTok success"
    },
    {
      name: "Meera Krishnan",
      role: "Lifestyle Influencer",
      location: "Australia",
      content: "The monetization strategies in this course are incredible. I learned how to turn my passion for Tamil culture into a profitable business. Now I'm a full-time content creator!",
      rating: 5,
      followers: "Full-time creator"
    }
  ];

  return (
    <section ref={testimonialsRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="testimonials-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Success Stories from <span className="text-orange-600">Tamil Creators</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join hundreds of successful Tamil content creators who have transformed their passion into profitable platforms.
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-orange-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-slate-600">{testimonial.rating}.0</span>
              </div>
              
              <div className="mb-4">
                <Quote className="w-8 h-8 text-orange-300 mb-2" />
                <p className="text-slate-700 leading-relaxed">{testimonial.content}</p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {testimonial.followers}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-header text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Over 1,000+ Successful Tamil Creators
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Ready to write your own success story?
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;