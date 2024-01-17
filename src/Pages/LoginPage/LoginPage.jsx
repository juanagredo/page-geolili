import "./LoginPage.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    console.log("Login successful");
    navigate("/intro");
  };

  return (
    <div className="login-page">

      <section className="registrar">
        <div><p>  ⇤ </p></div>
        <div>¿No tienes una cuenta?</div>
        <button id="registrar-btn"> Registrarse </button>
      </section>
     
      <picture><img className="logo" src="./src/Assets/Geolili-Logo.svg" alt="" /></picture>
      <section className="login-page__f-card">
      <div id="login-form">
      <div>
        <input
          id="user"
          type="text"
          value={username}
          placeholder="Correo"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          id="pass"
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-red" style={{ color: "red" }}>{error}</p>}
      <div className="contraseña-problema"><a href="#">¿Ha olvidado su contraseña?</a></div>
      <button id="enviar-login" onClick={handleLogin}>Iniciar sesión</button>

      <section className="separador">
        <hr />
        <p>Otros</p>
        <hr />
      </section>

      <section id="btns-login">
        <button id="login-google">
           <img id="google-btn"  src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" alt="" />
           Iniciar sesión con Google
        </button>
        <button id="login-facebook">
           <img id="fb-btn"  src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png" alt="" />
        </button>
      </section>

      </div>
      </section>
      
    </div>
  );
}
