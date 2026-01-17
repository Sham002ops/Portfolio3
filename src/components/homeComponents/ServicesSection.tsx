import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Brand Website Development",
    outcome:
      "I help businesses move from social media–only presence to a clear, trustworthy website that explains what they do, who it’s for, and how to take the next step.",
    highlights: [
      "Designed for clarity, credibility, and first impressions",
      "Content structure that explains services without confusion",
      "Fast, responsive, and easy to maintain long-term",
    ],
    route: "/fmc-case-study",
  },
  {
    title: "Full-Stack Web Applications",
    outcome:
      "For businesses that need more than a website — I build custom platforms with bookings, payments, dashboards, and internal workflows tailored to how the business actually runs.",
    highlights: [
      "Custom booking, payments, and user flows",
      "Admin dashboards for real operational control",
      "Built around the business — not generic templates",
    ],
    route: "/fmc-case-study",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      rowsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const addRowRef = (el: HTMLDivElement) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  return (
    <section
    id="services"
      ref={sectionRef}
      className="relative w-full bg-black/15 px-6 md:px-12 lg:px-28 py-32"
    >
      {/* Left vertical guide */}
      <div className="absolute top-0 left-8 md:left-12 lg:left-20 h-full w-px bg-neutral-400" />

      {/* Content */}
      <div className="relative pl-6 md:pl-10 lg:pl-14">
        {/* Intro */}
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6">
            Services
          </h2>
          <p className="text-neutral-600 text-lg">
            Practical digital solutions for businesses that want clarity,
            credibility, and systems that actually work day to day.
          </p>
        </div>

        {/* Rows */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addRowRef}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
            >
              {/* Left */}
              <div className="lg:col-span-7">
                <h3 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-8">
                  {service.title}
                </h3>

                <div className="h-px w-full bg-neutral-300 mb-8" />

                <p className="text-neutral-700 text-lg leading-relaxed max-w-2xl">
                  {service.outcome}
                </p>
              </div>

              {/* Right */}
              <div className="lg:col-span-5">
                <ul className="space-y-4 text-neutral-700 mb-10">
                  {service.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => router.push(service.route)}
                  className="inline-flex items-center gap-3 text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:opacity-70 transition"
                >
                  View related case study
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
