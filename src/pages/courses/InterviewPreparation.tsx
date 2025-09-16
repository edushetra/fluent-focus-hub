import CoursePage from "./CoursePage";

export default function InterviewPreparation() {
  return CoursePage({
    slug: "interview-preparation",
    title: "Interview Preparation",
    subtitle: "Targeted 1:1 prep: mock interviews, feedback, and answer frameworks.",
    seo: {
      title: "Interview Preparation Course | EduShetra",
      description: "Personalized mock interviews with detailed feedback. Master tell-me-about-yourself, STAR/CAR answers, and case questions.",
      image: "/images/og-interview-prep.png"
    },
    mappedProgram: "1-on-1",
    whoFor: ["Job seekers", "Career switchers", "Campus placements", "Returning professionals"],
    outcomes: [
      "Craft a memorable self-introduction",
      "Answer confidently using STAR/CAR frameworks",
      "Handle gaps, failures, and tricky questions",
      "Demonstrate projects with impact metrics",
      "Improve body language and voice control",
      "Perform under pressure with multiple mock rounds"
    ],
    modules: [
      { icon: "interview", title: "Mock Interviews", desc: "Role-specific mocks with granular scoring and next steps." },
      { icon: "story", title: "Answer Frameworks", desc: "STAR, CAR, SOAR, and MECE for crisp, structured responses." },
      { icon: "present", title: "Project Narratives", desc: "Tell strong impact stories with numbers and outcomes." },
      { icon: "talk", title: "Voice & Pace", desc: "Tone, pauses, and clarity to sound confident and calm." },
      { icon: "group", title: "Panel Simulation", desc: "Practice panel dynamics, interruptions, and follow-ups." },
      { icon: "email", title: "Follow-up Communication", desc: "Thank-you notes and post-interview etiquette." }
    ]
  });
}
