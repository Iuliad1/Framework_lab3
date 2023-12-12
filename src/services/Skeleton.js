// Skeleton.js

import React from 'react';

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
};

export default Skeleton;

// Adăugați stilurile CSS aici în interiorul șirului de șabloane
const styles = `
  .skeleton {
    width: 100%;
    height: 20px; /* Ajustați înălțimea în funcție de designul dvs. */
    background-color: #f0f0f0; /* Culoarea fundalului scheletului */
    overflow: hidden;
    border-radius: 4px; /* Stilizare opțională */
  }

  .skeleton-line {
    height: 100%;
    width: 50%; /* Ajustați lungimea liniei în funcție de designul dvs. */
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent); /* Efect de umbrire pentru a crea aspectul de încărcare */
    animation: loading 1.5s infinite; /* Animatie pentru efectul de "atingere" a scheletului */
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

// Crearea unui element style pentru a insera stilurile în capul documentului
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
