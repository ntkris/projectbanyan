import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { WhoWeSupport } from "@/components/who-we-support"
import { GetInvolved } from "@/components/get-involved"
import { Footer } from "@/components/footer"

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Mission />
        <WhoWeSupport />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  )
}

export default App
