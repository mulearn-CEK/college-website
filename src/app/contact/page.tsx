"use client";

import { FormEvent, useState } from "react";
import { PageHeader, Placeholder } from "@/components/design";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent) { event.preventDefault(); setSent(true); }
  return <main>
    <PageHeader label="Contact" title="Get in Touch">We&apos;d love to hear from you. Reach out for admissions, queries, or any information about CEK.</PageHeader>
    <section style={{padding:0,borderBottom:"1px solid var(--border)"}}><div className="container"><Placeholder icon="📍" title="College Building" hint="Add a photo of the college building or entrance for visitors" className="wide-placeholder"/></div></section>
    <section className="section"><div className="container contact-grid"><div>
      <article className="contact-card"><h3>📍 Address</h3><p><strong>College of Engineering Kottarakkara</strong></p><p>Thrikkannamangal, ETC P.O</p><p>Kottarakkara, Kollam</p><p>Kerala — 691531</p></article>
      <article className="contact-card"><h3>📞 Phone</h3><p><strong>Office:</strong> 0474-2453300</p><p><strong>Principal:</strong> 0474-2458764</p><p><strong>Mobile:</strong> 8547005039</p><p style={{marginTop:8,fontSize:13}}>Office Hours: 9:30 am – 4:30 pm</p></article>
      <article className="contact-card"><h3>✉️ Email</h3><p><strong>Principal:</strong> principal@cekottarakkara.ac.in</p><p><strong>General:</strong> cekottarakkara@ihrd.ac.in</p><p><strong>Alternate:</strong> cekottarakkara.ihrd@gmail.com</p></article>
      <article className="contact-card"><h3>🔗 Quick Links</h3>{[["Website","cekottarakkara.ihrd.ac.in"],["IHRD","ihrd.ac.in"],["KTU","ktu.edu.in"],["Fee Payment","SBCollect"]].map(([l,v])=><div className="link-row" key={l}><span className="label">{l}</span><span>{v}</span></div>)}</article>
    </div><div>
      <article className="contact-card"><h3>🗺️ Location</h3><div className="map-placeholder">College of Engineering Kottarakkara<br/>Thrikkannamangal, ETC P.O<br/>Kottarakkara, Kollam — 691531<br/><br/>Nearest Railway: Kottarakkara (2 km)<br/>Nearest Airport: Thiruvananthapuram (90 km)<br/>76°45&apos;08&quot;E · 8°58&apos;09&quot;N</div></article>
      <article className="contact-card"><h3>📝 Send a Message</h3><form onSubmit={submit}><div className="form-group"><label htmlFor="name">Your Name</label><input id="name" placeholder="Enter your full name" required/></div><div className="form-group"><label htmlFor="email">Email Address</label><input id="email" type="email" placeholder="Enter your email" required/></div><div className="form-group"><label htmlFor="subject">Subject</label><input id="subject" placeholder="What is this about?"/></div><div className="form-group"><label htmlFor="message">Message</label><textarea id="message" placeholder="Type your message here..." required/></div><button className="btn btn-primary" style={{width:"100%"}} type="submit">Send Message →</button>{sent && <p className="form-success" role="status">Thanks — your message has been recorded.</p>}</form></article>
    </div></div></section>
  </main>;
}
