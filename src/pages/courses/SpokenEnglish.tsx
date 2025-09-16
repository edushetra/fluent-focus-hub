import CoursePage from "./CoursePage";

export default function SpokenEnglish() {
  return CoursePage({
    slug: "spoken-english",
    title: "Spoken English",
    subtitle: "Build everyday fluency with group practice, role-plays, and confidence drills.",
    seo: {
      title: "Spoken English Course | EduShetra",
      description: "Group-based Spoken English with discussions, role-plays, and fluency drills. Ideal for students and professionals seeking practical communication.",
      image: "/images/og-spoken-english.png"
    },
    mappedProgram: "small-group",
    whoFor: ["College students", "Job seekers", "First-time learners", "Anyone building fluency"],
    outcomes: [
      "Speak confidently in daily and workplace scenarios",
      "Think in English with structured responses",
      "Improve vocabulary, pace, and clarity",
      "Reduce filler words and hesitation",
      "Practice with peers through debates and discussions",
      "Sustain conversations and ask better questions"
    ],
    modules: [
      { icon: "talk", title: "Fluency Drills", desc: "Speed, clarity and turn-taking exercises to reduce hesitation." },
      { icon: "group", title: "Group Discussions", desc: "Structured GDs to develop ideas and speak convincingly." },
      { icon: "story", title: "Storytelling", desc: "Craft simple, clear narratives that connect with listeners." },
      { icon: "present", title: "Mini Presentations", desc: "Short talks with feedback on body language and voice." },
      { icon: "email", title: "Functional English", desc: "Polite requests, clarifying questions, summaries, and recaps." },
      { icon: "interview", title: "Real-life Role-plays", desc: "Practice common situations—meetings, calls, intros, and more." }
    ]
  });
}
