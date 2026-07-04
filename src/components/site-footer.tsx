import Link from "next/link";

export function SiteFooter() {
  return <>
    <div className="footer-wave" aria-hidden="true"><svg viewBox="0 0 1440 72" preserveAspectRatio="none">
      <path d="M0,36 C150,10 300,55 460,30 C620,5 780,50 940,28 C1100,6 1280,45 1440,22 L1440,72 L0,72 Z" fill="var(--accent)"/>
      <path d="M0,52 C220,30 440,68 660,45 C880,22 1100,60 1320,40 C1380,35 1420,48 1440,42 L1440,72 L0,72 Z" fill="var(--accent-dark)" opacity=".5"/>
      <path d="M0,66 C300,50 600,78 900,58 C1100,46 1300,72 1440,60 L1440,72 L0,72 Z" fill="var(--accent)" opacity=".35"/>
    </svg></div>
    <footer className="site-footer"><div className="container footer-grid">
      <div><h4>College of Engineering Kottarakkara</h4><p>Thrikkannamangal, ETC P.O</p><p>Kottarakkara, Kollam</p><p>Kerala — 691531</p><p style={{marginTop:12}}>📞 0474-2453300, 8547005039</p><p>✉️ principal@cekottarakkara.ac.in</p></div>
      <div><h4>Quick Links</h4><ul><li><Link href="/about">About Us</Link></li><li><Link href="/academics">Academics</Link></li><li><Link href="/admissions">Admissions</Link></li><li><Link href="/placements">Placements</Link></li><li><Link href="/student-life">Student Life</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
      <div><h4>Resources</h4><ul><li><a href="#">Fee Payment (SBCollect)</a></li><li><a href="#">IHRD</a></li><li><a href="#">KTU</a></li><li><a href="#">AICTE</a></li><li><a href="#">CEE Kerala</a></li></ul></div>
      <div><h4>Downloads</h4><ul><li><a href="#">AICTE EoA 2026–27</a></li><li><a href="#">KTU Affiliation</a></li><li><a href="#">Mandatory Disclosure</a></li><li><a href="#">Fee Notice 2026–27</a></li></ul></div>
      <div className="footer-bottom"><span>© 2026 College of Engineering Kottarakkara</span><span>Managed by IHRD, Government of Kerala</span></div>
    </div></footer>
  </>;
}
