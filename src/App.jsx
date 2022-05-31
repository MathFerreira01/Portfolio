import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Experience from "./pages/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
