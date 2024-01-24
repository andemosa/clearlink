import Choose from "./components/Choose";
import Communication from "./components/Communication";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="bg-cover bg-center pt-10 w-[90%] mx-auto flex flex-col gap-20 bg-[url('/background.webp')]">
        <Navbar />
        <Hero />
      </section>
      <Partner />
      <Choose />
      <Testimonial />
      <FAQs />
      <Communication />
      <Footer />
    </main>
  );
};

export default App;
