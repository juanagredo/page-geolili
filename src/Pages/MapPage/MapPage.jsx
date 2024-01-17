import { SearchInput, NavBar } from "../../Components";
import { useNavigate } from 'react-router-dom';
import "./MapPage.css"

export function MapPage() {
const navigate = useNavigate();

const navigateToModal = () => {
navigate('/modal');
};

return (
<>
  <div className="contenedor-mapa">

    <div onClick={navigateToModal} className="imgIcono">
      <img src="./src/Assets/icons/iconoMapa.png" id="img" />
    </div>

    <div className="search">
      <SearchInput navigateToModal={navigateToModal} />
    </div>

    <NavBar />
  </div>
</>
);

}