import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "CardioCheck",
    "description": "Centro especializado en diagnóstico y prevención cardiovascular en Formosa, Argentina",
    "url": "https://cardiocheck.netlify.app",
    "telephone": "+54-3705-050247",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mitre N° 55",
      "addressLocality": "Ciudad de Formosa",
      "addressRegion": "Formosa",
      "addressCountry": "AR"
    },
    "medicalSpecialty": "Cardiology",
    "sameAs": [
      "https://www.instagram.com/cardiocheckfsa/"
    ]
  };

  return (
    <>
      <Head>
        <title>CardioCheck - Centro Cardiovascular Formosa | Diagnóstico y Prevención</title>
        <meta name="description" content="Centro especializado en diagnóstico y prevención cardiovascular en Formosa. Electrocardiogramas, ecocardiogramas, estudios Doppler y más. ✅ Tecnología avanzada ✅ Atención personalizada" />
        <meta name="keywords" content="cardiologo formosa, cardiologia, electrocardiograma, ecocardiograma, doppler vascular, holter, consulta cardiologica, prevencion cardiovascular, diagnostico cardiaco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cardiocheck.netlify.app/" />
        <meta property="og:title" content="CardioCheck - Centro Cardiovascular Formosa" />
        <meta property="og:description" content="Centro especializado en diagnóstico y prevención cardiovascular. Cuidamos tu corazón con tecnología avanzada y atención personalizada." />
        <meta property="og:image" content="/assets/logo.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cardiocheck.netlify.app/" />
        <meta property="twitter:title" content="CardioCheck - Centro Cardiovascular Formosa" />
        <meta property="twitter:description" content="Centro especializado en diagnóstico y prevención cardiovascular. Cuidamos tu corazón con tecnología avanzada y atención personalizada." />
        <meta property="twitter:image" content="/assets/logo.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://cardiocheck.netlify.app/" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
