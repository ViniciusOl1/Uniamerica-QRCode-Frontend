import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.css';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';

function Header() {
  const teacherId = localStorage.getItem('teacherId');
  const history = useHistory();
  useEffect(() => {
    api.get('/professores', {
      headers: { Authorization: teacherId }
    });
    if (!teacherId) {
      history.push('/');
    }
  }, [history, teacherId]);

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }
  function handleMenu() {
    let rMenu = document.getElementById("topbar");
    if (rMenu.className === "topbar") {
      return rMenu.className += " responsive";
    } else {
      return rMenu.className = "topbar";
    }
  }


  return (
    <header id="topbar" className="topbar">
      <img src={logoImg} alt="Uniamérica - QRCode" />

      <nav>
        <ul>
          <li class="responsive-menu-icon">
            <a href="javascript:void(0);" onClick={handleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/alunos">Alunos</a></li>
          <li><a href="/professores">Professores</a></li>
          <li><a href="/relatorios">Relatórios</a></li>
          <li><a href="/" onClick={handleLogout}>Sair</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
