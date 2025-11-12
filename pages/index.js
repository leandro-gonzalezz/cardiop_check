import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>CardioCheck - Diagnóstico y Prevención Cardiovascular</title>
        <meta name="description" content="Centro especializado en diagnóstico y prevención cardiovascular. Cuidamos tu corazón con tecnología avanzada y atención personalizada." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
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
