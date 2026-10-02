import Hero from '@/components/Hero'
import IntroStats from '@/components/IntroStats'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroStats />
      <Services />
      <Clients />
      <Portfolio />
      <Blog />
    </main>
  )
}
