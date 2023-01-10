import "./App.css";
import About from "./Components/About";
import BuySell from "./Components/BuySell";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Howtobuy from "./Components/Howtobuy";
import Navbar from "./Components/Navbar";
import Roadmap from "./Components/Roadmap";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <BuySell />
      <Howtobuy />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
