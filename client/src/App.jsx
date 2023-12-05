import Footer from './components/Footer'
import Header from './components/Header'
import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
import TituloPrincipal from './components/TituloPrincipal'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1/>
      </main>
      <Footer />
    </>
  )
}
