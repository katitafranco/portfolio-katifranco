import Footer from "./sections/Footer";

import Header from "./sections/Header";
import Hero from "./sections/Hero"; // Importa las otras secciones
import MyExpertise from "./sections/MyExpertise";
import AboutMe from "./sections/AboutMe";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import ContactForm from "./sections/ContactForm";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MyExpertise />
      <AboutMe />
      <Portfolio />
      <Testimonials />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default App;
