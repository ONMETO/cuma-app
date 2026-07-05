import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { DocPage } from './components/DocPage';
import Galaxy from './components/ui/Galaxy';
import ClickSpark from './components/ui/ClickSpark';

type ActiveView = 'landing' | 'region-select' | 'doc-viewer';
type DocType = 'privacy' | 'terms';
type Region = 'tw' | 'jp' | 'en';

export default function App() {
  const [view, setView] = useState<ActiveView>('landing');
  const [docType, setDocType] = useState<DocType>('privacy');
  const [region, setRegion] = useState<Region | null>(null);

  // Initialize and detect region from URL query params or browser locale
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlRegion = params.get('region')?.toLowerCase();
    const urlView = params.get('view')?.toLowerCase();

    let targetRegion: Region | null = null;
    let targetDocType: DocType = 'privacy';

    // 1. Parse EULA/Privacy Type
    if (urlView === 'terms' || urlView === 'eula') {
      targetDocType = 'terms';
    } else if (urlView === 'privacy') {
      targetDocType = 'privacy';
    }

    // 2. Parse Region from URL or detect from Browser
    if (urlRegion) {
      if (urlRegion === 'tw' || urlRegion.includes('tw') || urlRegion.includes('taiwan')) {
        targetRegion = 'tw';
      } else if (urlRegion === 'jp' || urlRegion.includes('jp') || urlRegion.includes('japan')) {
        targetRegion = 'jp';
      } else {
        targetRegion = 'en';
      }
    } else {
      // Browser Locale detection fallback
      const browserLang = navigator.language || '';
      const isJp = /jp/i.test(browserLang) || /ja/i.test(browserLang);
      const isTw = /tw/i.test(browserLang) || /zh-tw/i.test(browserLang);
      const isEn = /en/i.test(browserLang) || /us/i.test(browserLang) || /ca/i.test(browserLang) || /gb/i.test(browserLang) || /au/i.test(browserLang) || /nz/i.test(browserLang) || /sg/i.test(browserLang);

      if (isJp) targetRegion = 'jp';
      else if (isTw) targetRegion = 'tw';
      else if (isEn) targetRegion = 'en';
    }

    // 3. Navigate if view or region is parsed from URL
    if (urlView || urlRegion) {
      setDocType(targetDocType);
      if (targetRegion) {
        setRegion(targetRegion);
        setView('doc-viewer');
      } else {
        setView('region-select');
      }
    }
  }, []);

  const handleNavigateHome = () => {
    setView('landing');
    setRegion(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateDoc = (type: DocType) => {
    setDocType(type);
    
    // Check browser locale when navigating from footer
    const browserLang = navigator.language || '';
    const isJp = /jp/i.test(browserLang) || /ja/i.test(browserLang);
    const isTw = /tw/i.test(browserLang) || /zh-tw/i.test(browserLang);
    const isEn = /en/i.test(browserLang) || /us/i.test(browserLang) || /ca/i.test(browserLang) || /gb/i.test(browserLang) || /au/i.test(browserLang) || /nz/i.test(browserLang) || /sg/i.test(browserLang);

    let targetRegion: Region | null = null;
    if (isJp) targetRegion = 'jp';
    else if (isTw) targetRegion = 'tw';
    else if (isEn) targetRegion = 'en';

    if (targetRegion) {
      setRegion(targetRegion);
      setView('doc-viewer');
    } else {
      setView('region-select');
    }
  };


  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Galaxy starSpeed={1.2} density={0.6} hueShift={130} />
      <ClickSpark sparkColor="rgba(255, 255, 255, 0.6)" sparkCount={10} sparkRadius={20}>
        {view === 'landing' && (
          <Navbar currentView={view} onNavigateHome={handleNavigateHome} />
        )}
        
        <main className="w-full relative z-10 flex flex-col">
          {view === 'landing' ? (
            <>
              <Hero />
              <BentoFeatures />
              <Testimonials />
            </>
          ) : (
            <DocPage
              view={view}
              setView={setView}
              docType={docType}
              setDocType={setDocType}
              region={region}
              setRegion={setRegion}
            />
          )}
        </main>
        
        <Footer onNavigate={handleNavigateDoc} onNavigateHome={handleNavigateHome} />
      </ClickSpark>
    </div>
  );
}

