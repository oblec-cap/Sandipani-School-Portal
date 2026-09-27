import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Check, ChevronDown, Compass, Menu, X } from 'lucide-react';
import { images, navItems, pageContent, pageMeta, siteCopy, type Language } from '@/data/content';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('sandipani-language') === 'hi' ? 'hi' : 'en');
  const changeLanguage = (next: Language) => { setLanguage(next); localStorage.setItem('sandipani-language', next); };
  return { language, changeLanguage };
}

export function Meta({ page, language }: { page: string; language: Language }) {
  useEffect(() => {
    const meta = pageMeta[page]?.[language] ?? pageMeta.home[language];
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    description.setAttribute('name', 'description'); description.setAttribute('content', meta.description); document.head.appendChild(description);
    const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title'); ogTitle.setAttribute('content', meta.title); document.head.appendChild(ogTitle);
    const ogDescription = document.querySelector('meta[property="og:description"]') ?? document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description'); ogDescription.setAttribute('content', meta.description); document.head.appendChild(ogDescription);
  }, [page, language]);
  return null;
}

export function SchoolMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border border-white/30 bg-[#f4d464] shadow-sm">
        <img src={images.emblem} alt="School emblem reference" className="size-full object-cover" />
      </span>
      <span className="leading-tight">
        <span className="block text-[10px] font-bold uppercase tracking-[.14em] text-secondary">{compact ? 'Government school' : 'Government school · Damoh'}</span>
        <span className="block font-display text-[22px] text-primary">Sandipani</span>
      </span>
    </span>
  );
}

export function SchoolShell({ children, page = 'home' }: { children: ReactNode; page?: string }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const copy = siteCopy[language];
  const links = navItems[language];
  return (
    <div className="site-shell">
      <Meta page={page} language={language} />
      <header className="site-header sticky top-0 z-40">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label="Go to school home" data-testid="link-school-home" onClick={() => setMenuOpen(false)} className="focus-ring rounded-xl">
            <SchoolMark compact />
          </Link>
           <nav className="hidden items-center gap-3.5 lg:flex" aria-label="Primary navigation">
             {links.map((item) => <Link key={item.href} href={item.href} data-testid={`link-nav-${item.href.slice(1)}`} aria-current={location === item.href ? 'page' : undefined} className="nav-link whitespace-nowrap text-[11px] font-semibold">{item.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch language={language} onChange={changeLanguage} />
            <Link href="/admissions" data-testid="link-header-admissions" className="focus-ring group inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-xs font-bold text-secondary-foreground shadow-[0_8px_20px_hsl(var(--secondary)/.18)] transition-transform hover:-translate-y-0.5">
              {copy.admissions}<ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} data-testid="button-mobile-menu" onClick={() => setMenuOpen((value) => !value)} className="focus-ring rounded-xl p-2 text-primary lg:hidden">
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {menuOpen && <div className="border-t border-border bg-background px-5 pb-6 pt-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            {links.map((item) => <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.href.slice(1)}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-primary">{item.label}</Link>)}
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <LanguageSwitch language={language} onChange={changeLanguage} />
              <Link href="/admissions" onClick={() => setMenuOpen(false)} data-testid="link-mobile-admissions" className="rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground">{copy.admissions}</Link>
            </div>
          </nav>
        </div>}
      </header>
      {children}
      <Footer language={language} />
    </div>
  );
}

function LanguageSwitch({ language, onChange }: { language: Language; onChange: (value: Language) => void }) {
  return <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 text-[11px] font-bold" aria-label="Language switcher">
    <button type="button" data-testid="button-language-english" onClick={() => onChange('en')} className={`focus-ring rounded-full px-2.5 py-1 ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>English</button>
    <span className="text-border">|</span>
    <button type="button" data-testid="button-language-hindi" onClick={() => onChange('hi')} className={`focus-ring devanagari rounded-full px-2.5 py-1 ${language === 'hi' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>हिंदी</button>
  </div>;
}

export function Footer({ language }: { language: Language }) {
  const copy = siteCopy[language];
  return <footer className="bg-sidebar text-sidebar-foreground">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_.8fr_.8fr] lg:px-10">
      <div>
        <SchoolMark />
        <p className="mt-5 max-w-sm text-sm leading-7 text-sidebar-foreground/65">{copy.tagline}</p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-sidebar-foreground/15 px-3 py-2 text-xs text-sidebar-foreground/70"><Compass className="size-3.5 text-accent" /> {copy.location}</div>
      </div>
      <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.18em] text-accent">{language === 'en' ? 'Explore' : 'देखें'}</p><div className="grid gap-3 text-sm text-sidebar-foreground/70">{navItems[language].slice(0, 4).map((item) => <Link key={item.href} href={item.href} data-testid={`link-footer-${item.href.slice(1)}`} className="transition-colors hover:text-accent">{item.label}</Link>)}</div></div>
      <div><p className="mb-4 text-[11px] font-bold uppercase tracking-[.18em] text-accent">{language === 'en' ? 'Stay connected' : 'जुड़े रहें'}</p><div className="grid gap-3 text-sm text-sidebar-foreground/70"><Link href="/notices" data-testid="link-footer-notices">{language === 'en' ? 'Official notices' : 'आधिकारिक सूचनाएँ'}</Link><Link href="/admissions" data-testid="link-footer-admissions">{copy.admissions}</Link><Link href="/contact" data-testid="link-footer-contact">{copy.contact}</Link></div></div>
    </div>
    <div className="border-t border-sidebar-foreground/10 px-5 py-5 text-center text-xs text-sidebar-foreground/45 sm:px-8">© {new Date().getFullYear()} Government Sandipani Higher Secondary School · {copy.location}</div>
  </footer>;
}

export function PageHeader({ page, language, image = images.campus }: { page: string; language: Language; image?: string }) {
  const content = pageContent[language][page];
  return <section className="relative overflow-hidden bg-primary text-primary-foreground">
    <div className="absolute inset-0 opacity-25"><img src={image} alt="" className="size-full object-cover" /></div>
    <div className="hero-wash absolute inset-0" />
    <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="max-w-3xl page-enter">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[.22em] text-accent">{content.eyebrow}</p>
        <h1 className={`max-w-3xl font-display text-5xl leading-[.95] tracking-tight sm:text-7xl ${language === 'hi' ? 'devanagari leading-[1.18]' : ''}`}>{content.title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/75 sm:text-lg">{content.intro}</p>
      </div>
    </div>
  </section>;
}

export function ButtonLink({ href, children, variant = 'primary', testId }: { href: string; children: ReactNode; variant?: 'primary' | 'outline'; testId: string }) {
  return <Link href={href} data-testid={testId} className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${variant === 'primary' ? 'bg-secondary text-secondary-foreground shadow-[0_10px_24px_hsl(var(--secondary)/.2)]' : 'border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10'}`}>{children}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>;
}

export function InfoPill({ children }: { children: ReactNode }) { return <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-muted-foreground"><Check className="size-3.5 text-secondary" />{children}</span>; }
export function AccordionItem({ title, body }: { title: string; body: string }) {
  return <details className="group rounded-2xl border border-border bg-card p-5 open:bg-muted/60"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-primary [&::-webkit-details-marker]:hidden">{title}<ChevronDown className="size-4 transition-transform group-open:rotate-180" /></summary><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{body}</p></details>;
}