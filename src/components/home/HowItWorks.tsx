import {
  Calendar,
  UserCheck,
  Video,
  BookOpen,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Demo",
    description: "Schedule a free demo call at your convenience",
  },
  {
    icon: UserCheck,
    title: "Diagnosis & Match",
    description: "We assess your level and match you with the perfect trainer",
  },
  {
    icon: Video,
    title: "Attend Demo",
    description: "Experience our teaching methodology firsthand",
  },
  {
    icon: BookOpen,
    title: "Enroll & Start",
    description: "Choose your program and begin your journey",
  },
  {
    icon: TrendingUp,
    title: "Monthly Evaluation",
    description: "Regular progress reviews and plan adjustments",
  },
  {
    icon: Award,
    title: "Graduate",
    description: "Complete your program with confidence",
  },
  {
    icon: Users,
    title: "Teach with Edushetra",
    description: "Apply to become a trainer (optional)",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 section-gradient" id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="how-it-works-title" className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your journey to fluent English in 7 simple steps
          </p>
        </div>

        {/* Mobile: vertical timeline with correct numbering */}
        <ol className="relative sm:hidden mt-6 space-y-6">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative pl-14">
                {/* number + icon */}
                <div className="absolute left-0">
                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100 text-blue-700 font-semibold">
                      {idx + 1}
                    </span>
                    <span className="absolute -right-1 -bottom-1 bg-white rounded-full p-1 ring-1 ring-slate-200">
                      <Icon className="h-4 w-4 text-secondary" />
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white/60 backdrop-blur p-4">
                  <h3 className="font-poppins font-semibold text-base text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Tablet/Desktop: 7-column grid */}
        <div className="hidden sm:grid md:grid-cols-7 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-card flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>

                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-secondary/50 to-secondary/20" />
                  )}
                </div>

                <h3 className="font-poppins font-semibold text-lg text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
