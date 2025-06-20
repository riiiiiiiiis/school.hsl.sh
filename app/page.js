// app/page.js
import Navbar from './components/Navbar';
import SchoolHero from './components/SchoolHero';
import ProductCards from './components/ProductCards';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SchoolHero />
        <ProductCards />
      </main>
      <Footer />
    </>
  );
}