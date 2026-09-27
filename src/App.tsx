import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ArrowLeft, Compass } from 'lucide-react';
import { SchoolShell, useLanguage } from '@/components/school-shell';
import { HomePage, DetailPage, EventsPage, NoticesPage, GalleryPage } from '@/pages/site-pages';

const queryClient = new QueryClient();

function NotFoundPage() {
  const { language } = useLanguage();
  return <SchoolShell><main className="grid min-h-[70dvh] place-items-center px-5 py-20 text-center"><div><span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-accent-foreground"><Compass className="size-7" /></span><p className="mt-8 text-[11px] font-bold uppercase tracking-[.2em] text-secondary">404</p><h1 className={`mt-3 font-display text-6xl text-primary ${language === 'hi' ? 'devanagari' : ''}`}>{language === 'en' ? 'This page took a different route.' : 'यह पृष्ठ किसी और रास्ते पर चला गया।'}</h1><p className="mx-auto mt-5 max-w-md text-sm leading-7 text-muted-foreground">{language === 'en' ? 'The page you are looking for is not here. Return to the school home and continue exploring.' : 'आप जिस पृष्ठ को खोज रहे हैं वह यहाँ नहीं है। विद्यालय के होम पेज पर लौटकर आगे देखें।'}</p><Link href="/" data-testid="link-404-home" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"><ArrowLeft className="size-4" />{language === 'en' ? 'Back to home' : 'होम पर जाएँ'}</Link></div></main></SchoolShell>;
}

function Router() {
  return <RoutedErrorBoundary><Switch>
    <Route path="/" component={HomePage} />
    <Route path="/about"><DetailPage page="about" /></Route>
    <Route path="/academics"><DetailPage page="academics" /></Route>
    <Route path="/facilities"><DetailPage page="facilities" /></Route>
    <Route path="/faculty"><DetailPage page="faculty" /></Route>
    <Route path="/admissions"><DetailPage page="admissions" /></Route>
    <Route path="/student-life"><DetailPage page="student-life" /></Route>
    <Route path="/events" component={EventsPage} />
    <Route path="/notices" component={NoticesPage} />
    <Route path="/achievements"><DetailPage page="achievements" /></Route>
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/contact"><DetailPage page="contact" /></Route>
    <Route path="/404" component={NotFoundPage} />
    <Route component={NotFoundPage} />
  </Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;