// app/page.js
import SchoolHero from './components/school/SchoolHero';
import ProductCards from './components/school/ProductCards';

export default function Home() {
  return (
    <>
      <SchoolHero />
      <ProductCards />
    </>
  );
}