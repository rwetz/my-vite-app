import Silk from "../components/Silk";
import MagicBento from "../components/MagicBento";
import Logo from "../components/Logo";

function About() {
  return (
    <>
      {/* Background */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Silk
          speed={5}
          scale={1}
          color="#004D5C"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Blur overlay */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />

      <Logo />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt
          enableMagnetism
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="0, 205, 214"
          disableAnimations={false}
        />
      </div>
    </>
  );
}

export default About;
