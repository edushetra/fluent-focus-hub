import { Link } from "react-router-dom";
import { Users, Sparkles, Target, Notebook, Send } from "lucide-react";
import { useEffect } from "react";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">{children}</span>
);

export default function Careers() {
    useEffect(() => {
  document.title = "Careers | EduShetra";
  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute(
      "content",
      "Join EduShetra! Explore open roles in teaching, coordination, and growth marketing."
    );
  }
}, []);

  return (
    <main className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <nav className="text-sm text-slate-500">
            <Link to="/" className="hover:text-slate-700">Home</Link> <span>›</span> Careers
          </nav>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Join EduShetra</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Help learners speak with clarity and confidence. We’re building activity-driven communication coaching for India and beyond.
          </p>
        </header>

        {/* Why join */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: <Sparkles className="w-6 h-6" />, h: "Impact at scale", p: "Your work directly improves learner confidence, job readiness, and life outcomes." },
            { icon: <Target className="w-6 h-6" />, h: "Builder culture", p: "Small, hands-on team. Ship fast, measure, iterate." },
            { icon: <Users className="w-6 h-6" />, h: "Flexible & remote-friendly", p: "Remote first with cohorts across time zones; Chennai meetups optional." },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">{c.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800">{c.h}</h3>
              <p className="text-slate-600 mt-1">{c.p}</p>
            </div>
          ))}
        </section>

        {/* Open roles */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Notebook className="w-5 h-5 text-slate-700" />
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">Open Roles</h2>
          </div>
          <div className="grid gap-4">
            {/* Add/edit roles easily */}
            {[
              { title: "English Communication Trainer (Part-time)", tags: ["Remote", "Contract"], desc: "Lead 1:1 and small-group sessions; design activity-based practice; provide monthly evaluations." },
              { title: "Program Coordinator", tags: ["Chennai", "Full-time"], desc: "Own batch scheduling, learner queries, QA with trainers, and NPS outcomes." },
              { title: "Growth & Performance Marketer", tags: ["Remote", "Full-time"], desc: "Own paid + organic funnels, landing experiments, and analytics." },
            ].map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{r.title}</h3>
                  <p className="text-slate-600 mt-1">{r.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">{r.tags.map(t => <Pill key={t}>{t}</Pill>)}</div>
                </div>
                <Link
                  to="/enquire"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary text-white hover:opacity-90"
                >
                  Apply <Send className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
            <div className="text-slate-600 text-sm mt-2">
              Don’t see a fit? Email your profile to <a className="text-primary underline" href="mailto:info@edushetra.com">info@edushetra.com</a> with subject “<strong>Open Application</strong>”.
            </div>
          </div>
        </section>

        {/* Hiring process & perks */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">Hiring Process</h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              <li>Quick application via <Link to="/enquire" className="text-primary underline">Enquire</Link> or email.</li>
              <li>Short call to align role & expectations.</li>
              <li>Task/teaching demo (role-specific).</li>
              <li>Offer & onboarding.</li>
            </ol>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">Perks</h2>
            <ul className="space-y-2 text-slate-700">
              <li>Flexible schedules; remote where possible</li>
              <li>Learning stipend & certifications</li>
              <li>Outcome-based bonuses</li>
              <li>Fast-paced, supportive team</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
