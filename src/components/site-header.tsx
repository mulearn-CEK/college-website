"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "/"], ["About", "/about"], ["Academics", "/academics"],
  ["Admissions", "/admissions"], ["Placements", "/placements"],
  ["Student Life", "/student-life"], ["Contact", "/contact"]
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="nav-logo" href="/" aria-label="College of Engineering Kottarakkara home">
          <Image src="/ihrd-logo.jpg" alt="IHRD Electronics" width={300} height={236} priority />
        </Link>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>≡</button>
        <nav aria-label="Primary navigation">
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map(([label, href]) => (
              <li key={href}><Link className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
