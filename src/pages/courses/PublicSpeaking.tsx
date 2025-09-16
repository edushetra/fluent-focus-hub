import CoursePage from "./CoursePage";

export default function PublicSpeaking() {
  return CoursePage({
    slug: "public-speaking",
    title: "Public Speaking",
    subtitle: "Design and deliver talks that hold attention and drive action.",
    seo: {
      title: "Public Speaking Course | EduShetra",
      description: "Small-group coaching with speeches, debates, and stage-confidence drills. Improve presence, structure, and storytelling.",
      image: "/images/og-public-speaking.png"
    },
    mappedProgram: "small-group",
    whoFor: ["Students & professionals", "Aspiring speakers", "Team leads", "Founders"],
    outcomes: [
      "Overcome stage fear with repeat practice",
      "Structure talks with openings, narratives, and closes",
      "Use voice, pauses, and gestures effectively",
      "Handle Q&A and tough audiences",
      "Design simple, punchy slides",
      "Tell persuasive stories that stick"
    ],
    modules: [
      { icon: "present", title: "Stage Presence", desc: "Body language, eye contact, movement, and stance." },
      { icon: "story", title: "Narrative Design", desc: "Hooks, contrast, and memorable closings." },
      { icon: "group", title: "Debates & Panels", desc: "Think on your feet; rebuttals and counterpoints." },
      { icon: "talk", title: "Delivery Labs", desc: "Multiple rounds with recordings and reviews." },
      { icon: "email", title: "Slide Essentials", desc: "Visual clarity—no clutter, high signal." },
      { icon: "interview", title: "Audience Handling", desc: "Manage interruptions, tough questions, and nerves." }
    ]
  });
}
