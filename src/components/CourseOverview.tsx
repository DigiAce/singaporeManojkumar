import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, Edit, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CourseOverview = () => {
  const courseRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section header
      gsap.fromTo(
        '.course-header',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: courseRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate course cards
      gsap.fromTo(
        '.course-card',
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, courseRef);

    return () => ctx.revert();
  }, []);

  const modules = [
    {
      icon: Video,
      title: "Reels Strategy Mastery",
      description: "Learn the art of creating viral Tamil reels that capture attention and drive engagement across all platforms.",
      duration: "3 hours",
      lessons: "12 lessons",
      highlight: "Most Popular"
    },
    {
      icon: Edit,
      title: "Advanced Editing Techniques",
      description: "Master professional editing techniques using mobile and desktop tools to create stunning Tamil content.",
      duration: "4 hours",
      lessons: "15 lessons",
      highlight: "New"
    },
    {
      icon: TrendingUp,
      title: "Platform Growth Strategies",
      description: "Discover platform-specific strategies to grow your audience on Instagram, TikTok, YouTube, and Facebook.",
      duration: "2.5 hours",
      lessons: "10 lessons",
      highlight: "Essential"
    },
    {
      icon: DollarSign,
      title: "Monetization & Brand Deals",
      description: "Learn how to monetize your Tamil content and secure profitable brand partnerships and sponsorships.",
      duration: "2 hours",
      lessons: "8 lessons",
      highlight: "Premium"
    }
  ];

  return (
    <section ref={courseRef} className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="course-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete Course <span className="text-orange-600">Curriculum</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Master every aspect of Tamil content creation with our comprehensive curriculum designed for creators at all levels.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="course-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              {/* Highlight badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {module.highlight}
                </span>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{module.title}</h3>
                  <p className="text-slate-600">{module.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {module.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {module.lessons}
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-slate-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">What You'll Learn:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Platform-specific content strategies</li>
                  <li>• Audience engagement techniques</li>
                  <li>• Tamil content best practices</li>
                  <li>• Analytics and optimization</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="course-header text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Bonus: Live Q&A Sessions
            </h3>
            <p className="text-slate-600 mb-6">
              Join monthly live sessions where I answer your questions and provide personalized feedback on your Tamil content strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Monthly Live Sessions
              </span>
              <span className="bg-slate-100 text-slate-800 px-4 py-2 rounded-full font-semibold">
                Community Access
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Lifetime Updates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;