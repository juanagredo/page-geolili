import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { NavBar, SearchInput } from "..";

import "./Modal_2.css";

export function Modal_2() {
const navigate = useNavigate();

const handleButtonClick = (path) => {
navigate(path);

};

const navigateToModal = () => {
navigate('/modal');
};


return (

<div className="map-section">

  <div className="searchbar">
    <SearchInput navigateToModal={navigateToModal} />
  </div>

  <section className="modal-card">



    <div className="modal__header">
      <button className="chev-back" onClick={()=> handleButtonClick("/home")}>
        <FaChevronLeft />
      </button>

      <p>Destino</p>
    </div>

    <hr className="separador-titulo" />

    <div className="botones-ruta">
        <button className="rutas-btn"onClick={navigateToModal}>Ruta sugerida</button>
        <button className="rutas-btn selected-btn"  >Otra ruta</button>
      </div>

    <section className="card-modal_2">
      <div>
        <h4>Ortopedia</h4>
        <p>Hay trafico de personas</p>
      </div>
      <div className="time">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <circle cx="12.9863" cy="12.9513" r="9" stroke="#BD2929" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M12.9863 7.45129V12.9513L16.9863 14.9513" stroke="#BD2929" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <p className="textorojo">1:30 min</p>
      </div>
    </section>

    <button id="modal__ir" onClick={()=> handleButtonClick("/video")}>Ir</button>

  </section>
  <NavBar />
</div>
);
}