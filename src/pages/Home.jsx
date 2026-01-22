import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import InstagramFeedSelector from '../components/InstagramFeedSelector'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <InstagramFeedSelector />
            <About />
            <Services />
            <Contact />
            <Footer />
        </main>
    )
}
