import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PageLoader from './components/PageLoader';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import QuoteRequest from './pages/QuoteRequest';
import Branches from './pages/Branches';
import WebCreator from './pages/WebCreator';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('');
  
  // Pre-filled quote selections
  const [preFilledMetal, setPreFilledMetal] = useState('');
  const [preFilledForm, setPreFilledForm] = useState('');

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard expo out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isLoading]);

  // Synchronize path and page updates based on window hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      
      if (hash === '#/' || hash === '#/home') {
        setCurrentPath('home');
      } else if (hash.startsWith('#/products/')) {
        const id = hash.replace('#/products/', '');
        setSelectedProductId(id);
        setCurrentPath('products/detail');
      } else if (hash === '#/products') {
        setCurrentPath('products');
      } else if (hash === '#/about') {
        setCurrentPath('about');
      } else if (hash === '#/contact') {
        setCurrentPath('contact');
      } else if (hash === '#/branches') {
        setCurrentPath('branches');
      } else if (hash === '#/quote') {
        setCurrentPath('quote');
      } else if (hash === '#/creator') {
        setCurrentPath('creator');
      } else {
        // Fallback
        setCurrentPath('home');
      }
      
      // Scroll to top on every route transition
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }

      // Allow the DOM to settle, then refresh GSAP ScrollTrigger positions
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 80);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Resolve route initially on load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Path change trigger
  const navigate = (path: string) => {
    if (path === 'home') {
      window.location.hash = '#/';
    } else if (path.startsWith('products/')) {
      const id = path.replace('products/', '');
      window.location.hash = `#/products/${id}`;
    } else {
      window.location.hash = `#/${path}`;
    }
  };

  const handleQuotePreFill = (metalType: string, form: string) => {
    setPreFilledMetal(metalType);
    setPreFilledForm(form);
  };

  // Custom high-performance cursor tracking
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoading) return;

    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursor || !cursorRing) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasMoved = true;
      
      // Move central dot immediately for instant responsiveness
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    let animationId: number;
    const updateRing = () => {
      if (hasMoved) {
        // If ring is offscreen, snap immediately once to prevent sliding in from the corner
        if (ringX === -100) {
          ringX = mouseX;
          ringY = mouseY;
        } else {
          // Elegant linear interpolation (lerp) follow delay
          // Lower values = slower follow/more drag. 0.09 is the golden ratio for a premium feel.
          const ease = 0.09;
          ringX += (mouseX - ringX) * ease;
          ringY += (mouseY - ringY) * ease;
        }

        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }

      animationId = requestAnimationFrame(updateRing);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationId = requestAnimationFrame(updateRing);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand hover state on any interactive element
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea, [data-hover-scale]');
      if (isInteractive) {
        cursor.classList.add('cursor-hover');
        cursorRing.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
        cursorRing.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, [isLoading]);

  const renderActivePage = () => {
    switch (currentPath) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'products':
        return <Products onNavigate={navigate} />;
      case 'products/detail':
        return (
          <ProductDetail
            productId={selectedProductId}
            onNavigate={navigate}
            onQuotePreFill={handleQuotePreFill}
          />
        );
      case 'about':
        return <About onNavigate={navigate} />;
      case 'contact':
        return <Contact onNavigate={navigate} />;
      case 'branches':
        return <Branches onNavigate={navigate} />;
      case 'quote':
        return (
          <QuoteRequest
            preFilledMetal={preFilledMetal}
            preFilledForm={preFilledForm}
            onNavigate={navigate}
          />
        );
      case 'creator':
        return <WebCreator onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-white-text min-h-screen flex flex-col justify-between selection:bg-gold selection:text-white">
      {/* 1.5s Branded Loading Overlay */}
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

      {/* Main Core Layout */}
      {!isLoading && (
        <>
          {/* Global Header Navigation */}
          <Header currentPath={currentPath} onNavigate={navigate} />

          {/* Active Content Body */}
          <main className="flex-grow">
            {renderActivePage()}
          </main>

          {/* Floating WhatsApp Action Trigger */}
          <FloatingWhatsApp />

          {/* Global Footer Area */}
          <Footer onNavigate={navigate} />

          {/* Interactive Custom Cursor Nodes */}
          <div ref={cursorRef} className="cursor" />
          <div ref={cursorRingRef} className="cursor-ring" />
        </>
      )}
    </div>
  );
}
