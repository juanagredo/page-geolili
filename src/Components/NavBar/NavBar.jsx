import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaHome, FaMap, FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function NavBar() {
const [currentSection, setCurrentSection] = useState('');

const location = useLocation();

useEffect(() => {
// Obtén la sección actual desde la ubicación
const path = location.pathname;

// Lógica para determinar la sección actual
let currentSection = '';
if (path === '/home') {
currentSection = 'home';
} else if (path === '/map') {
currentSection = 'map';
} else if (path === '/profile') {
currentSection = 'profile';
}

// Actualiza el estado
setCurrentSection(currentSection);
}, [location.pathname]);



return (
<nav>
  <ul>
    <li className={currentSection==='home' ? 'active' : '' }>
      <Link to="/home">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5.77778 10.2222V18C5.77778 19.1046 6.67321 20 7.77778 20H12M5.77778 10.2222L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.5 9.5M5.77778 10.2222L4 12M18.2222 10.2222V18C18.2222 19.1046 17.3268 20 16.2222 20H12M18.2222 10.2222L20 12M18.2222 10.2222L17.5 9.5M17.5 9.5V6M12 20V15"
          stroke="#10CE85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </Link>
    </li>
    <li className={currentSection==='map' ? 'active' : '' }>
      <Link to="/map">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="10" r="3" stroke="#969696" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z"
          stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </Link>
    </li>
    <li className={currentSection === 'profile' ? 'active' : ''}>
      <Link to="/profile">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 20V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V20M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </Link>
    </li>
  </ul>
</nav>
);
}