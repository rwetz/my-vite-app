import Silk from "../components/Silk";
import StaggeredMenu from "../components/StaggeredMenu";
import Logo from "../components/Logo";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/home" },
  { label: "About", ariaLabel: "Learn about me", link: "/about" },
  { label: "Projects", ariaLabel: "View my projects", link: "/projects" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

function Home() {
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
          paddingTop: "0",
        }}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#00CDD6"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={["#004D5C", "#00CDD6"]}
          accentColor="#00A8B5"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </>
  );
}

export default Home;
