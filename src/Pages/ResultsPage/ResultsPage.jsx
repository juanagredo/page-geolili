import "./ResultsPage.css";

import { useNavigate } from "react-router-dom";

export function ResultsPage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button>Ruta sugerida</button>
        <button>Otra ruta</button>
      </div>
      <div>
        <p>Texto pequeño aquí</p>
      </div>
      <div>
        <button onClick={() => navigate("/video")}>Ir</button>
      </div>
    </>
  );
}
