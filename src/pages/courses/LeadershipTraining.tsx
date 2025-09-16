import CoursePage from "./CoursePage";

export default function LeadershipTraining() {
  return CoursePage({
    slug: "leadership-training",
    title: "Leadership Training",
    subtitle: "Executive communication for managers, leads, and CXOs—1:1 or cohort.",
    seo: {
      title: "Leadership Communication Training | EduShetra",
      description: "Leader roundtables, recording reviews, executive messaging, and stakeholder influence. Tailored for managers and CXOs.",
      image: "/images/og-leadership.png"
    },
    mappedProgram: "leadership",
    whoFor: ["Team leads & managers", "CXOs", "Founders", "Public leaders"],
    outcomes: [
      "Executive presence and clarity under pressure",
      "Influence without authority; stakeholder alignment",
      "Crisp decision memos and leadership updates",
      "Strategic storytelling for proposals and change",
      "High-stakes presentations to clients/boards",
      "Coaching for performance conversations"
    ],
    modules: [
      { icon: "present", title: "Executive Presence", desc: "Concise, confident delivery with clear asks and outcomes." },
      { icon: "story", title: "Strategic Messaging", desc: "Narratives that move teams and stakeholders." },
      { icon: "group", title: "Leader Roundtables", desc: "Cohort practice with 360° feedback." },
      { icon: "email", title: "Decision Writing", desc: "Write crisp memos; align context, options, and risks." },
      { icon: "interview", title: "Difficult Conversations", desc: "Feedback, conflict, and escalations with empathy." },
      { icon: "talk", title: "Voice Coaching", desc: "Authority, warmth, and clarity across settings." }
    ]
  });
}
