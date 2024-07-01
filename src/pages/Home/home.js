import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Carousel from 'react-bootstrap/Carousel';
import logo from '../../images/logo_dise.png'; // Tell webpack this JS file uses this image
import { Carousel } from 'react-bootstrap';


function HomePage() {
  return (
    <div>
      <header className="mb-4">
        <nav className="navbar">
          <div className="container-fluid">
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar">
              <i className="fa-solid fa-bars"></i>
            </button>
            <Link className="navbar-brand d-inline-block w-25" to="/"><img src={logo} alt="Logo" /></Link>
            <div className="rounded-circle bg-secondary p-3">
              <Link to="/perfil"><i className="fa-solid fa-user text-white"></i></Link>
            </div>
            <div className="offcanvas offcanvas-start" id="offcanvas-navbar">
              <div className="offcanvas-header p-3">
                <Link className="navbar-brand d-inline-block w-25" to="/"><img src={logo} alt="Logo" /></Link>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Link</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <span className="nav-link disabled" aria-disabled="true">Disabled</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="search">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <form className="d-flex" role="search">
                <input className="form-control rounded-end-0 border-end-0" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-secondary rounded-start-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              </form>
            </div>
            <div className="col-2 text-end">
              <a className="btn btn-secondary" data-bs-toggle="offcanvas" href="#offcanvasFilters" role="button" aria-controls="offcanvasFilters">
                <i className="fa-solid fa-sliders my-1"></i>
              </a>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasFilters" aria-labelledby="offcanvasFiltersLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasFiltersLabel">Filtros</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <form>
                  <p className="fw-bold">Ordenar por</p>
                  <select className="form-select" aria-label="Default select example">
                    <option value="1">Relevancia</option>
                    <option value="2">Fecha</option>
                    <option value="3">Popularidad</option>
                    <option value="4">Distancia</option>
                  </select>

                  <p className="mt-5 fw-bold">Comuna</p>
                  <select className="form-select" size="4" multiple aria-label="Default select example">
                    <option value="1">Providencia</option>
                    <option value="2">Santiago Centro</option>
                    <option value="3">Recoleta</option>
                    <option value="4">Las Condes</option>
                  </select>

                  <p>
                    <input type="text" id="amount" readOnly style={{ border: 0, color: '#f6931f', fontWeight: 'bold' }} />
                  </p>

                  <div id="slider-range"></div>
                  <p></p>
                  <div className="form-check fw-bold mt-5">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Default checked radio
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pop" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Populares</h2>
            </div>
           {/* agregar "carousel" con imágenes*/}
        
          </div>
        </div>
      </section>

      <section id="my-adventures" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Mis VisuAventuras</h2>
            </div>
            {[...Array(3)].map((_, index) => (
              <div className="col-6 mb-4" key={index}>
                <div className="p-5 rounded bg-secondary-subtle text-center">
                  <i className="fa-solid fa-image fs-1"></i>
                </div>
              </div>
            ))}
            <div className="col-6 mb-4">
              <Link to="#" className="text-black">
                <div className="p-5 rounded bg-secondary-subtle text-center">
                  <i className="fa-solid fa-circle-plus fs-1"></i>
                </div>
              </Link>
            </div>
            <div className="col-12">
              <Link to="/quiz" className="btn btn-secondary rounded-pill w-100">
                Tu próximo Visu <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <footer className="py-5">
          {/* Contenido del footer */}
        </footer>
      </div>
      <script src="./js/function.js"></script>
    </div>
  );
}

export default HomePage;
