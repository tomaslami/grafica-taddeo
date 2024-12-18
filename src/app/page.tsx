import About from '@/components/aboutUs/About'
import LayoutWrapper from '@/components/landing/LayoutWrapper'
import Plants from '@/components/plants/Plants'
import Services from '@/components/services/Services'

export default function Home() {
  return (
    <main>
      <LayoutWrapper />
      <Services />
      <Plants />
      <About />
    </main>
  )
}
