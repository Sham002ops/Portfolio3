// components/HeroContactSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
}

interface PopupState {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

export default function HeroContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState<PopupState>({
    show: false,
    type: 'success',
    message: ''
  });

  // Section entrance animation
  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 48 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  // Popup animation
  useEffect(() => {
    if (popup.show && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: -20
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [popup.show]);

  // Input focus animation
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    gsap.to(e.target, {
      scale: 1.01,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Button press animation - with null check
    const submitButton = e.currentTarget.querySelector('button[type="submit"]');
    if (submitButton) {
      gsap.to(submitButton, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/request-call`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("backend url : ", process.env.NEXT_PUBLIC_API_URL);
      
      const data = await response.json();

      if (response.ok) {
        // Success
        setPopup({
          show: true,
          type: 'success',
          message: 'Request sent successfully! I\'ll get back to you within 24 hours.'
        });

        // Reset form with animation
        if (formRef.current) {
          const inputs = formRef.current.querySelectorAll('input, textarea');
          if (inputs.length > 0) {
            gsap.to(inputs, {
              opacity: 0.5,
              duration: 0.3,
              onComplete: () => {
                setFormData({ 
                  name: '', 
                  email: '', 
                  phone: '',
                  company: '', 
                  budget: '',
                  message: '' 
                });
                if (formRef.current) {
                  gsap.to(formRef.current.querySelectorAll('input, textarea'), {
                    opacity: 1,
                    duration: 0.3
                  });
                }
              }
            });
          }
        }
      } else {
        // Error
        setPopup({
          show: true,
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide popup after 5 seconds
      setTimeout(() => {
        closePopup();
      }, 5000);
    }
  };

  const closePopup = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setPopup({ ...popup, show: false });
        }
      });
    }
  };

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="w-full bg-neutral-950 text-neutral-200 px-6 md:px-12 lg:px-28 py-32 relative"
      >
        <div className="max-w-6xl grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT — POSITIONING */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-8">
              Let's see if this is
              <br />
              worth building together.
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mb-10">
              I work with founders and teams who have a real problem to solve —
              not vague ideas or rushed timelines. If clarity, structure, and
              long-term stability matter to you, we're aligned.
            </p>

            <ul className="space-y-4 text-neutral-300">
              <li className="hover:translate-x-2 transition-transform duration-200">→ Clear problem definition</li>
              <li className="hover:translate-x-2 transition-transform duration-200">→ Realistic timelines and trade-offs</li>
              <li className="hover:translate-x-2 transition-transform duration-200">→ Production-ready, maintainable systems</li>
            </ul>

            <p className="mt-10 text-neutral-500 text-sm max-w-md">
              If you're still exploring ideas or optimizing purely for cost,
              this probably isn't the right fit — and that's intentional.
            </p>
          </div>

          {/* RIGHT — INTAKE FORM */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-10 hover:border-neutral-700 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Project Inquiry
            </h2>

            <p className="text-neutral-400 text-sm mb-10">
              Share enough context for me to understand the problem.  
              If it's a good fit, I'll respond directly.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-200"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Phone Number <span className="text-neutral-600">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Company (Optional) */}
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Company <span className="text-neutral-600">(optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-200"
                  placeholder="Acme Inc."
                />
              </div>

              {/* Budget - Changed to text input */}
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  Budget <span className="text-neutral-600">(optional)</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-200"
                  placeholder="e.g., $10k-50k or flexible"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-neutral-400 mb-2">
                  What problem are you trying to solve? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  rows={5}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-neutral-200 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 resize-none transition-all duration-200"
                  placeholder="Context, constraints, timelines, existing system issues…"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4  cursor-pointer hover:scale-110 bg-white/85 hover:bg-white text-neutral-900 rounded-xl font-semibold hover:bg-neutral-200 transition-all duration-200 hover:shadow-lg hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Project Review
                      <svg className="w-5 h-5 group-hover:translate-x-1  transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>

            <p className="mt-8 text-neutral-500 text-xs">
              I respond to serious inquiries only.  
              If it's not a fit, I'll tell you directly.
            </p>
          </div>
        </div>
      </section>

      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closePopup}
          />
          
          {/* Popup Card */}
          <div
            ref={popupRef}
            className={`relative max-w-md w-full rounded-2xl p-8 shadow-2xl ${
              popup.type === 'success' 
                ? 'bg-gradient-to-br from-green-900/90 to-green-950/90 border border-green-700/50' 
                : 'bg-gradient-to-br from-red-900/90 to-red-950/90 border border-red-700/50'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Icon */}
            <div className="flex items-center gap-4 mb-4">
              {popup.type === 'success' ? (
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-white">
                {popup.type === 'success' ? 'Request Sent!' : 'Submission Failed'}
              </h3>
            </div>

            {/* Message */}
            <p className="text-neutral-200 leading-relaxed mb-6">
              {popup.message}
            </p>

            {/* Action Button */}
            <button
              onClick={closePopup}
              className={`w-full px-6 py-3 rounded-xl font-semibold transition-all ${
                popup.type === 'success'
                  ? 'bg-green-600 hover:bg-green-500 text-white'
                  : 'bg-red-600 hover:bg-red-500 text-white'
              }`}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
