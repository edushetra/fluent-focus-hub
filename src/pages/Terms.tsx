import { Link } from "react-router-dom";
import { useEffect } from "react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
    <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{title}</h2>
    <div className="prose prose-slate max-w-none text-slate-700">{children}</div>
  </section>
);

export default function Terms() {
    useEffect(() => {
  document.title = "Terms & Conditions | EduShetra";

  // Optional: also update meta description dynamically
  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute(
      "content",
      "Read the Terms & Conditions for EduShetra’s English communication programs."
    );
  }
}, []);

  return (
    <main className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <nav className="text-sm text-slate-500">
            <Link to="/" className="hover:text-slate-700">Home</Link> <span>›</span> Terms & Conditions
          </nav>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Terms & Conditions</h1>
          <p className="mt-2 text-slate-600">Last updated: 16 Sep 2025</p>
        </header>

        <div className="grid gap-6">
          <Section title="1. Who we are">
            <p><strong>EduShetra</strong> (“we”, “us”, “our”) provides 1:1 and small-group communication coaching delivered online and at partner locations across India.</p>
          </Section>

          <Section title="2. Acceptance of terms">
            <p>By accessing our website or enrolling in any program, you agree to these Terms. If you are under 18, a parent/guardian must consent.</p>
          </Section>

          <Section title="3. Programs & deliverables">
            <ul>
              <li>Program structure (duration, frequency, class size) is shown on the website or order confirmation.</li>
              <li>We may improve curriculum, trainers, schedules, or tooling without prior notice while maintaining learning outcomes.</li>
            </ul>
          </Section>

          <Section title="4. Enrolment, payments & taxes">
            <ul>
              <li>Fees are payable in advance unless a written plan is agreed.</li>
              <li>Prices include GST where applicable. Invoices/receipts are shared via email.</li>
              <li>Access may pause if payments fail after reminders.</li>
            </ul>
          </Section>

          <Section title="5. Rescheduling, cancellations & no-shows">
            <ul>
              <li><strong>Learner-initiated</strong>: reschedule a 1:1 class ≥ <strong>12 hours</strong> before start to avoid loss of session.</li>
              <li>No-shows or late cancellations (<strong>&lt;12 hours</strong>) are marked consumed.</li>
              <li>Group classes run on fixed schedules; missed sessions aren’t refundable but may be covered via recap/assignments at trainer discretion.</li>
            </ul>
          </Section>

          <Section title="6. Trials & demos">
            <p>Any free/paid demo is for fit assessment only and has no guaranteed outcomes. Abusive behaviour will lead to immediate termination.</p>
          </Section>

          <Section title="7. Trainer allocation">
            <p>We match by availability, language, and level. We may re-assign trainers to ensure continuity and quality.</p>
          </Section>

          <Section title="8. Acceptable use">
            <ul>
              <li>Do not record, redistribute, or sell lesson content without written permission.</li>
              <li>Keep classroom and community spaces respectful; harassment or plagiarism results in removal without refund.</li>
            </ul>
          </Section>

          <Section title="9. Intellectual property">
            <p>All curriculum, worksheets, recordings, and brand assets are EduShetra IP unless stated otherwise. Limited, personal, non-transferable use only.</p>
          </Section>

          <Section title="10. Results disclaimer">
            <p>Outcomes depend on practice and attendance; we do not guarantee grades, scores, or promotions.</p>
          </Section>

          <Section title="11. Limitation of liability">
            <p>To the extent permitted by law, our aggregate liability is limited to the fees paid for the program during the preceding 3 months.</p>
          </Section>

          <Section title="12. Privacy">
            <p>We process personal data per our <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>.</p>
          </Section>

          <Section title="13. Governing law & disputes">
            <p>These Terms are governed by the laws of India. Disputes will be subject to the courts of Chennai, Tamil Nadu.</p>
          </Section>

          <Section title="14. Contact">
            <p>Email: <a href="mailto:info@edushetra.com" className="text-primary underline">info@edushetra.com</a> • Phone: +91-9445102902</p>
          </Section>
        </div>
      </div>
    </main>
  );
}
