import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";

const App = () => {
    return (
        <main className="bg-black">
          <NavBar/>
          <Hero />
          <Highlights />
        </main>
    )
}

export default App
