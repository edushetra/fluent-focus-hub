import { 
  MessageSquare, 
  Brain, 
  Mail, 
  Briefcase, 
  Presentation, 
  Mic,
  BookOpen,
  Users2,
  Target
} from "lucide-react";

const outcomes = [
  {
    icon: MessageSquare,
    title: "Conversational Fluency",
    description: "Speak naturally and confidently in any social or professional setting"
  },
  {
    icon: Brain,
    title: "Structured Thinking",
    description: "Organize your thoughts clearly using frameworks like PREP and SCQA"
  },
  {
    icon: Mail,
    title: "Professional Communication",
    description: "Master email writing, workplace discussions, and business presentations"
  },
  {
    icon: Briefcase,
    title: "Interview Readiness",
    description: "Ace job interviews with confidence and articulate responses"
  },
  {
    icon: Presentation,
    title: "Public Speaking",
    description: "Overcome stage fear and deliver compelling presentations"
  },
  {
    icon: Mic,
    title: "Voice & Accent",
    description: "Improve pronunciation, clarity, and develop a professional speaking voice"
  }
];

const activities = [
  {
    icon: Mic,
    title: "Speech Therapy Drills",
    description: "Personalized exercises to improve clarity and pronunciation"
  },
  {
    icon: BookOpen,
    title: "Vocabulary Sprints",
    description: "Fun, fast-paced sessions to expand your word power"
  },
  {
    icon: Users2,
    title: "Role-plays & Debates",
    description: "Practice real-world scenarios through interactive activities"
  },
  {
    icon: Presentation,
    title: "Presentation Labs",
    description: "Build confidence through structured presentation practice"
  },
  {
    icon: Target,
    title: "Storytelling",
    description: "Learn to craft and deliver compelling narratives"
  }
];

const Outcomes = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outcomes Section */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
            Outcomes You'll Achieve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your communication skills with measurable, practical results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary mb-4">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Activities Section */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-primary mb-6">
            How We Make It Happen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Activity-driven learning that makes practice fun and effective
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-card flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-primary mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;