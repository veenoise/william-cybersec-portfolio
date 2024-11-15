import ScrollSpy from "react-ui-scrollspy";
import Hero from './Hero'
import Skill from './Skill'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'

function App() {
  return (
    <>
      <ScrollSpy scrollThrottle={1}>
        <Hero />
        <Skill />
        <Experience />
        <Work />
        <Contact />
      </ScrollSpy>
    </>
  );
}

export default App;