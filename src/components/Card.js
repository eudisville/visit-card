import React from 'react';
import { Link } from "react-router-dom"
import './Card.css';

const Card = () => {
  const profile = {
    name: "Franck ABO",
    title: "Directeur Général",
    number: "+2250749303924",
    email: "franck.abo@cimef-assurances.com",
    site: "https://cimef-assurances.com",
  };

  return (
    <div className="card">
      <div className="card-items">
        <img src="Cimef.png" alt="Avatar" className="avatar" />
        <div className="name">
          <h2>{profile.name}</h2>
          <p>{profile.title}</p>
        </div>

        <div className="number">
          <button onClick={() => window.location.href = `tel:${profile.number}`}>Appelez-moi</button>
          <Link to={profile.site}><button href={profile.site} target="_blank" rel="noreferrer">Site Web</button></Link>
          <Link to={`mailto:${profile.email}`}><button>Me contacter</button></Link>
        </div>

        <div className="location">
          <div className="icon"><img src="pin.png" alt="" /></div>
          <p>Cocody, Angré 7ème Tranche près des stations Shell</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
