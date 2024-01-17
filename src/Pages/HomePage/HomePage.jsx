import React from 'react';
import { Card, NavBar, SearchInput } from "../../Components";
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"

export function HomePage() {
  const navigate = useNavigate();

  const navigateToModal = () => {
    navigate('/modal');
  };

  return (
    <div className='contenedor'>
      <section className="saludo-card">
      <h1>Hola John,</h1>
      <h2>¿A dónde vamos hoy?</h2>
      <SearchInput className="searchbar" navigateToModal={navigateToModal} />
      </section>

<section className='mas-buscados'>
  <p>Servicios</p>
  <h3>Más buscados</h3>
</section>

<section className='cards-group'>
      <Card name="Ortopedia" location="Piso 1" navigateToModal={navigateToModal} />
      <Card name="Cardiología" location="Piso 2" navigateToModal={navigateToModal} />
      <Card name="farmacia" location="Piso 1" navigateToModal={navigateToModal} />
</section>
  
      <NavBar />
    </div>
  );
}
