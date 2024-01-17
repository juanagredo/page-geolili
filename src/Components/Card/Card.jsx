import "./Card.css";
import { FaFlag } from "react-icons/fa";

export function Card({ name, location, navigateToModal }) {
const handleCardClick = () => {
navigateToModal();
};

return (
<div className="card" onClick={handleCardClick}>
  <div>
    <h4>{name}</h4>
    <p>{location}</p>
  </div>

  <div className="center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 20V14M5 14V4H19L15 9L19 14H5Z" stroke="#88A8AE" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
    <p>torre 1</p>
  </div>
</div>
);
}