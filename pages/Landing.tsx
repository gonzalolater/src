import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <ThreeBackground />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;