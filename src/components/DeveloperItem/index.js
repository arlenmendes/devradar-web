import React from 'react';

import './style.css';

export default ({ developer }) => (
  <li className="dev-item">
    <header>
      <img src={developer.avatarUrl} alt={developer.name} />
      <div className="user-info">
        <strong>{developer.name}</strong>
        <span>{developer.techs.join(', ')}</span>
      </div>
    </header>
    <p>{developer.bio}</p>
    <a href={`https://github.com/${developer.githubUsername}`}>
      Acessar perfil no Github
    </a>
  </li>
);
