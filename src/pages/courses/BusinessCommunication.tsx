import CoursePage from "./CoursePage";

export default function BusinessCommunication() {
  return CoursePage({
    slug: "business-communication",
    title: "Business Communication",
    subtitle: "Write and speak like a pro—emails, meetings, updates, and client conversations.",
    seo: {
      title: "Business Communication Course | EduShetra",
      description: "1:1 coaching for professionals: crisp emails, clear updates, persuasive presentations, and stakeholder management.",
      image: "/images/og-business-communication.png"
    },
    mappedProgram: "1-on-1",
    whoFor: ["Working professionals", "Team leads", "Fresh PMs/Analysts", "Customer-facing roles"],
    outcomes: [
      "Write crisp emails with clear asks and structure",
      "Run effective meetings with agendas and outcomes",
      "Present updates & proposals confidently",
      "Stakeholder communication & expectation setting",
      "Escalations and conflict handling with empathy",
      "Executive summaries using MECE/PEEL/CAR frameworks"
    ],
    modules: [
      { icon: "email", title: "Email Mastery", desc: "Subject lines, structure, tone, and CTAs that get replies." },
      { icon: "present", title: "Presentation Skills", desc: "Data storytelling with clear visuals and narrative flow." },
      { icon: "group", title: "Meeting Communication", desc: "Run structured meetings; align on decisions and next steps." },
      { icon: "interview", title: "Client Conversations", desc: "Discovery, objections, and negotiation basics." },
      { icon: "story", title: "Executive Summaries", desc: "Frameworks to compress complexity into clarity." },
      { icon: "talk", title: "Voice & Clarity", desc: "Pace, articulation, and confidence for professional settings." }
    ]
  });
}
