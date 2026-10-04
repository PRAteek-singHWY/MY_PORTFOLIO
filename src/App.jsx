import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Highlights,
  Journey,
  Navbar,
  Tech,
  Writing,
  SceneRoot,
  StarsCanvas,
} from "./components";

// Latest results first (GSoC leads), then the journey newest to oldest.
const App = () => (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="hero-pattern">
        <Navbar />
        <Hero />
      </div>
      <Highlights />
      <About />
      <Journey />
      <Writing />
      <Feedbacks />
      <Tech />
      <Contact />
      {/* ambient star field, fixed behind everything */}
      <StarsCanvas />
      {/* one shared WebGL context for every other scene. Inside the root so the
          sticky navbar (z-20) stays above it. */}
      <SceneRoot />
    </div>
  </BrowserRouter>
);

export default App;
