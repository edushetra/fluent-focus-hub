import { Link } from "react-router-dom";
import { useEffect } from "react";

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-slate-200">
    <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{title}</h2>
    <div className="prose prose-slate max-w-none text-slate-700">{children}</div>
  </section>
);

export default function Refund() {
    useEffect(() => {
  document.title = "Refund Policy | EduShetra";
  const meta = document.querySelector("meta[name='description']");
  if (meta) {
    meta.setAttribute(
      "content",
      "EduShetra’s Refund & Cancellation Policy for demo sessions, 1:1 classes, and group programs."
    );
  }
}, []);

  return (
    <main className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <nav className="text-sm text-slate-500">
            <Link to="/" className="hover:text-slate-700">Home</Link> <span>›</span> Refund Policy
          </nav>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Refund & Cancellation Policy</h1>
          <p className="mt-2 text-slate-600">Last updated: 16 Sep 2025</p>
        </header>

        <div className="grid gap-6">
          <Card title="1. General">
            <p>We aim to deliver high-quality coaching with transparent policies. This policy explains refunds, cancellations, and rescheduling across our programs.</p>
          </Card>

          <Card title="2. Demo sessions">
            <ul>
              <li>Free/paid demos are non-refundable. If a trainer misses the slot, we reschedule promptly.</li>
            </ul>
          </Card>

          <Card title="3. 1:1 Programs">
            <ul>
              <li>Reschedule ≥ <strong>12 hours</strong> before start: no penalty.</li>
              <li>Late cancellation/no-show (&lt;12h): session is counted as used.</li>
              <li><strong>Program withdrawal:</strong> within 7 days of purchase and ≤ 1 session consumed → 80% refund; after that, fees are non-refundable. Payment gateway charges and taxes are non-refundable per law.</li>
            </ul>
          </Card>

          <Card title="4. Small/Big Group">
            <ul>
              <li>Seats are limited and scheduled; fees are <strong>non-refundable</strong> after batch confirmation email/WhatsApp.</li>
              <li>If EduShetra cancels a batch and a suitable alternative isn’t accepted, we issue a full refund for remaining sessions.</li>
            </ul>
          </Card>

          <Card title="5. Corporate & Leadership Programs">
            <p>Refunds, replacements, and SLAs follow the terms in the respective SOW or service agreement.</p>
          </Card>

          <Card title="6. Refund timeline">
            <p>Approved refunds are processed to the original payment method within 5–7 business days; bank posting times may vary.</p>
          </Card>

          <Card title="7. How to request">
            <p>Email <a href="mailto:info@edushetra.com" className="text-primary underline">info@edushetra.com</a> with your name, phone, program, payment date/amount, and reason. We may ask for additional info to verify the request.</p>
          </Card>

          <Card title="8. Exceptional cases">
            <p>Medical emergencies, trainer outages, or platform faults will be handled fairly with session credits or partial refunds at our discretion.</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
