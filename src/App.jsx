import ScrollSpy from "react-ui-scrollspy";
import './App.css'
import Nav from './Nav'
import Hero from './Hero'
import Skill from './Skill'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Nav />
      <ScrollSpy scrollThrottle={1}>
        <Hero />
        <Skill />
        <Experience />
        <Work />
        <Contact />
      </ScrollSpy>
      <Footer />
    </>
  );
}

export default App;