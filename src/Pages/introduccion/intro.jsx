import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./intro.css"
import { useState, useEffect } from 'react';

export function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    // Establece un temporizador para navegar a la página de inicio después de 3 segundos (ajusta según tus necesidades)
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 1400);

    // Limpia el temporizador para evitar problemas si el componente se desmonta antes de que expire
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
    
    <div className='intro-load'></div>


    </>
  )
  ;
}

