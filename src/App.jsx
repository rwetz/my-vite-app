import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Silk from "./components/Silk";
import GradientText from "./components/GradientText";
import TargetCursor from "./components/TargetCursor";
import Home from "./pages/Home";
import "./styles/button.css";
import About from "./pages/About";

function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0 }}>
        <Silk speed={5} scale={1} color="#004D5C" noiseIntensity={1.5} rotation={0} />
      </div>
      <div
        style={{
          position: "fixed", top: 0, left: 0,
          width: "100vw", height: "100vh",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "32px",
        }}
      >
        <div style={{ fontSize: "150px", fontWeight: "bold", lineHeight: 1 }}>
          <GradientText
            colors={["#002B33", "#004D5C", "#007A8A", "#00A8B5", "#00CDD6", "#00E5EE"]}
            animationSpeed={20}
            showBorder={false}
            className="bg-transparent"
          >
            Welcome.
          </GradientText>
        </div>
        <button className="enter-btn cursor-target" onClick={() => navigate("/home")}>
          Enter
        </button>
      </div>
      <TargetCursor spinDuration={5} hideDefaultCursor parallaxOn hoverDuration={0.2} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;