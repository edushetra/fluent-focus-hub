import { Link } from "react-router-dom";
import { useEffect } from "react";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
    <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{title}</h2>
    <div className="prose prose-slate max-w-none text-slate-700">{children}</div>
  </section>
);

export default function Privacy() {
    useEffect(() => {
  document.title = "Privacy Policy | EduShetra";
  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute(
      "content",
      "EduShetra’s Privacy Policy explains how we collect, use, and safeguard your personal information."
    );
  }
}, []);

  return (
    <main className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <nav className="text-sm text-slate-500">
            <Link to="/" className="hover:text-slate-700">Home</Link> <span>›</span> Privacy Policy
          </nav>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="mt-2 text-slate-600">Last updated: 16 Sep 2025</p>
        </header>

        <div className="grid gap-6">
          <Block title="1. Scope">
            <p>This Policy explains how EduShetra collects, uses, discloses, and safeguards your information when you visit our website, create an account, book demos, enrol, or participate in classes.</p>
          </Block>

          <Block title="2. Data we collect">
            <ul>
              <li><strong>Identity & Contact</strong> – name, email, phone, city, age range.</li>
              <li><strong>Learning Profile</strong> – goals, level, language preferences, availability.</li>
              <li><strong>Transaction</strong> – invoices, amount, payment status (processed via PCI-compliant providers; we do not store card details).</li>
              <li><strong>Usage</strong> – device info, pages visited, cookies/analytics (for performance and troubleshooting).</li>
              <li><strong>Class artifacts</strong> – assignments, feedback, optional recordings with consent for quality/training.</li>
            </ul>
          </Block>

          <Block title="3. How we use data">
            <ul>
              <li>Provide and improve programs, matchmaking, and support.</li>
              <li>Process payments, prevent fraud, and meet legal obligations (GST, accounting).</li>
              <li>Send service emails (schedules, reminders, progress). Marketing emails are opt-in with unsubscribe anytime.</li>
            </ul>
          </Block>

          <Block title="4. Sharing">
            <ul>
              <li><strong>Service providers</strong> – hosting, analytics, payment gateways, communication tools.</li>
              <li><strong>Trainers</strong> – limited profile details required to deliver sessions.</li>
              <li><strong>Legal</strong> – compliance with law, court orders, or to protect rights/safety.</li>
            </ul>
          </Block>

          <Block title="5. Cookies & analytics">
            <p>We use essential cookies and analytics to understand performance. You can control cookies via browser settings; disabling some may impact site features.</p>
          </Block>

          <Block title="6. Data retention">
            <p>We keep data for as long as needed for learning, support, legal, and tax reasons, then delete or anonymize it.</p>
          </Block>

          <Block title="7. Your choices">
            <ul>
              <li>Access, update, or delete your data by emailing <a className="text-primary underline" href="mailto:info@edushetra.com">info@edushetra.com</a>.</li>
              <li>Opt-out of marketing via the unsubscribe link.</li>
              <li>Request copies of certificates, invoices, or attendance logs.</li>
            </ul>
          </Block>

          <Block title="8. Children">
            <p>For learners under 18, we collect guardian details and communicate major decisions with them.</p>
          </Block>

          <Block title="9. Security">
            <p>We use encryption in transit, access controls, and regular reviews. No method is 100% secure; please use strong passwords and don’t share credentials.</p>
          </Block>

          <Block title="10. International transfers">
            <p>Some processors may store data outside India. We engage reputable vendors with adequate safeguards.</p>
          </Block>

          <Block title="11. Contact">
            <p>Email: <a href="mailto:info@edushetra.com" className="text-primary underline">info@edushetra.com</a> • Phone: +91-9445102902</p>
          </Block>
        </div>
      </div>
    </main>
  );
}
