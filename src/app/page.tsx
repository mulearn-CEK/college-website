import Link from "next/link";
import { Placeholder, SectionIntro } from "@/components/design";

const highlights = [
  ["◇", "Vision", "To emerge as a centre of excellence in engineering education and research, fostering innovation, ethical values, and technological competence."],
  ["⚡", "Mission", "To provide high-quality technical education, develop ethical engineers, promote research, and foster holistic student development."],
  ["🏛️", "IHRD Managed", "An autonomous educational institution established by the Government of Kerala with a strong legacy of academic excellence."],
  ["🔬", "Modern Labs", "Well-equipped computer centre, electronics labs, digital library with IEEE access, and smart classrooms."]
];

const programs = [
  ["Engineering & Technology", "B.Tech Computer Science & Engineering", "4-year undergraduate program focused on algorithms, systems, and software engineering.", "120 Seats · Full Time"],
  ["Engineering & Technology", "B.Tech CSE (AI & Machine Learning)", "4-year program specialising in artificial intelligence, deep learning, and intelligent systems.", "60 Seats · Full Time"],
  ["Computer Application", "Bachelor of Computer Application (BCA)", "4-year program covering programming, databases, web technologies, and modern computing.", "60 Seats · Full Time · KTU"],
  ["Management", "Bachelor of Business Administration (BBA)", "4-year program in business management, entrepreneurship, and organisational leadership.", "60 Seats · Full Time · KTU"]
];

const activities = [
  ["📡", "IEEE", "Professional student branch conducting technical talks, workshops, and outreach programmes."],
  ["💡", "IEDC", "Innovation & Entrepreneurship Development Cell fostering creativity, leadership, and startup skills."],
  ["🤖", "REACT", "Technical forum for robotics, automation, and emerging technology exploration."],
  ["🌿", "NSS", "Community service, social responsibility, and student leadership."]
];

const reasons = [
  ["01", "Government-Managed", "Managed by IHRD, established by the Government of Kerala, ensuring quality education at affordable fees."],
  ["02", "Industry-Aligned Curriculum", "KTU-affiliated programs with industrial visits and career counselling through the Training & Placement Cell."],
  ["03", "Digital Campus", "Smart classrooms, NKN connectivity, digital library with IEEE journals, and 114+ computer systems."],
  ["04", "Student Support", "Professional counselling, career guidance, mentoring, language development, and psychological support."],
  ["05", "Active Alumni Network", "Alumni contribute through project assistance, scholarships, technical talks, and career guidance."],
  ["06", "Placement & Higher Studies", "Aptitude training, mock interviews, campus drives, and support for graduates pursuing higher studies."]
];

export default function HomePage() {
  return <main>
    <section className="hero"><div className="container hero-grid">
      <div><h1>Shape Your Future at <span className="highlight">College of Engineering Kottarakkara</span></h1><p className="hero-copy">A premier technical institution established under IHRD, Government of Kerala. Affiliated to APJ Abdul Kalam Technological University and approved by AICTE.</p><div className="hero-actions"><Link className="btn btn-primary" href="/admissions">Apply for Admission 2026 →</Link><Link className="btn btn-outline" href="/academics">Explore Programs</Link></div></div>
      <div className="hero-right"><Placeholder icon="🏛️" title="Campus Overview" hint="Add a photo of the college building or campus" className="hero-img"/><div className="hero-stats">{[["2004","Year Established"],["4","UG Programs"],["300","Total Seats"],["IHRD","Govt. of Kerala"]].map(([n,l])=><div className="hero-stat" key={l}><div className="num">{n}</div><div className="label">{l}</div></div>)}</div></div>
    </div></section>

    <div className="news-bar"><div className="container news-inner"><span className="news-label">Latest</span><div className="ticker"><Link href="/admissions">Admission 2026 — Register Now</Link><Link href="/admissions">Fee Notice 2026–27 — Remittance opens 15 June</Link><Link href="/admissions">NRI Admission 2026 — Applications Open</Link><a href="#">NCMASE2026 — National Conference, 27–28 Feb</a></div></div></div>

    <section className="section"><div className="container about-grid"><div className="body-copy"><SectionIntro label="About CEK" title="A Legacy of Engineering Excellence Since 2004"/><p>College of Engineering Kottarakkara (CEK) is a distinguished technical institution, established in 2004 under the Institute of Human Resources Development (IHRD). It is approved by AICTE and affiliated with APJ Abdul Kalam Technological University (KTU).</p><p>Located in Kottarakkara, Kollam, CEK is well-connected and offers modern infrastructure including smart classrooms, ICT facilities, and National Knowledge Network connectivity.</p><Link className="btn btn-outline" href="/about">Learn More →</Link></div><div className="about-right"><Placeholder icon="🎓" title="Principal & Leadership" hint="Add principal's photo or key administration image"/><div className="about-highlights">{highlights.map(([i,t,d])=><article className="about-highlight" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></article>)}</div></div></div></section>

    <section className="section surface"><div className="container"><SectionIntro label="Programs" title="Courses We Offer">Four undergraduate programs designed to build competent professionals ready for industry and research.</SectionIntro><div className="courses-grid">{programs.map(([d,t,p,s])=><article className="course-card" key={t}><div className="dept">{d}</div><h3>{t}</h3><p>{p}</p><span className="seats">{s}</span></article>)}</div></div></section>

    <section className="section"><div className="container"><SectionIntro label="Beyond Academics" title="Student Activities & Forums">CEK promotes holistic development through professional chapters, innovation cells, and community outreach programs.</SectionIntro><div className="activities-grid">{activities.map(([i,t,d])=><article className="activity-card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></article>)}</div><div style={{textAlign:"center",marginTop:32}}><Link className="btn btn-outline" href="/student-life">See All Activities →</Link></div></div></section>

    <section className="section surface"><div className="container"><SectionIntro label="Gallery" title="Campus & Student Life">Photos of the campus, events, labs, and student activities at CEK.</SectionIntro><div className="gallery-grid"><Placeholder icon="🏛️" title="Campus View" hint="Add campus building or landscape photo"/><Placeholder icon="🎪" title="Events & Fests" hint="Add photos from college events and conferences"/><Placeholder icon="🎨" title="Student Activities" hint="Add club activities, NSS camps, sports events"/><Placeholder icon="🔬" title="Labs & Learning" hint="Add lab sessions, smart classrooms, library"/></div></div></section>

    <section className="section surface"><div className="container"><SectionIntro label="Why CEK" title="What Makes Us Different">A government-managed institution with industry-connected learning, modern infrastructure, and a student-first approach.</SectionIntro><div className="why-grid">{reasons.map(([n,t,d])=><article className="why-item" key={n}><div className="num">{n}</div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="section surface"><div className="container"><SectionIntro label="Placements" title="Placement & Career Outcomes"/><div className="placement-spotlight"><div className="stats-compact">{[["92%","Placement Rate 2025"],["₹8.5L","Highest Package"],["45+","Recruiting Partners"],["₹4.2L","Average Package"]].map(([n,l])=><div className="stat-box" key={l}><div className="num">{n}</div><div className="label">{l}</div></div>)}</div><div><p className="placement-copy">The Training & Placement Cell at CEK works year-round to prepare students for rewarding careers. From aptitude training and mock interviews to campus drives — we ensure every student is placement-ready.</p><Link className="btn btn-primary" href="/placements">Explore Placements →</Link></div></div></div></section>

    <section className="section"><div className="container"><div className="cta-banner"><h2>Ready to Begin Your Journey?</h2><p>Applications for Admission 2026 are now open. Join a community of innovators, engineers, and leaders at CEK Kottarakkara.</p><Link className="btn btn-primary" href="/admissions">Apply Now →</Link></div></div></section>
  </main>;
}
