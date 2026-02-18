import { useNavigate } from "react-router-dom";
import signature from "../assets/signature.png";

function Logo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/home")}
      style={{
        position: "fixed",
        top: "24px",
        left: "24px",
        zIndex: 100,
        cursor: "pointer",
      }}
    >
      <img
        src={signature}
        alt="Logo"
        style={{
          height: "60px",
          width: "auto",
        }}
      />
    </div>
  );
}

export default Logo;
