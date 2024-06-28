// src/Popular/popular.js
import React from 'react';
import { Link } from 'react-router-dom';
import './popular.css';
import logo from '../../images/logo_dise.png';

function Popular() {
  return (
    <div>
      <title>JLDesign</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      {/* Encabezado */}
      <header className="mb-4">
        <nav className="navbar">
          <div className="container-fluid">
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar">
              <i className="fa fa-bars"></i>
            </button>
            <Link className="navbar-brand d-inline-block w-25" to="/"><img src={logo} alt="Logo" /></Link>
            <div className="rounded-circle bg-secondary p-3">
              <Link to="/perfil"><i className="fa-solid fa-user text-white"></i></Link>
            </div>
            <div className="offcanvas offcanvas-start" id="offcanvas-navbar">
              <div className="offcanvas-header p-3">
                <a className="navbar-brand d-inline-block w-25" href="#"><img src={logo} alt="Logo" /></a>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Contenido */}
      <section id="search">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <form className="d-flex p-" role="search">
                <input className="form-control rounded-end-0 border-end-0" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-secondary rounded-start-0" type="submit"><i className="fa fa-magnifying-glass"></i></button>
              </form>
            </div>
            <div className="col-2 text-end">
              <a href="#" className="btn btn-secondary">
                <i className="fa fa-sliders my-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="pop1" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Título spot</h1>
            </div>
            <div className="col-4 text-end">
              <button type="button" className="btn btn-secondary rounded-pill"><i className="fa fa-bookmark"></i> 24</button>
            </div>
            <div className="col-12 my-4">
              <h5><i className="fa fa-location-dot"></i> Ubicación</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada suscipit porttitor. Nulla massa odio, facilisis et orci a, ultricies vehicula diam. Cras quis placerat velit...</p>
            </div>
          </div>
        </div>
      </section>
      <section id="ctas" className="position-fixed bottom-0 w-100">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-secondary rounded-pill w-100">Scan it <i className="fa fa-qrcode"></i></button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-light rounded-pill w-100">Compartir <i className="fa fa-share-nodes"></i></button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className="container">
        <footer className="py-5">
          {/* Contenido del footer */}
        </footer>
      </div>
    </div>
  );
}

export default Popular;
