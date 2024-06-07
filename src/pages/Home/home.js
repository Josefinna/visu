import React from 'react';
import { Link } from 'react-router-dom';
 
// Encabezado
function Header() {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg bg-secondary-subtle">
        <div className="container-fluid">
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-navbar" aria-controls="offcanvas-navbar">
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link className="navbar-brand d-inline-block w-25" to="#"><img src="images/logo_dise.png" className="w-100" alt="Logo" /></Link>
          <div className="rounded-circle bg-secondary p-3">
            <i className="fa-solid fa-user text-white"></i>
          </div>
          <div className="offcanvas offcanvas-start" id="offcanvas-navbar">
            <div className="offcanvas-header p-3">
              <Link className="navbar-brand d-inline-block w-25" to="#"><img src="images/logo_dise.png" className="w-100" alt="Logo" /></Link>
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
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
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
  );
}
 
// Define el componente de la página principal (HomePage)
function HomePage() {
  return (
    <div>
      {/* Encabezado */}
      <Header />
 
      {/* Sección Popular */}
      <section id="pop" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Populares</h2>
            </div>
            <div className="col-12">
              <div className="owl-carousel owl-pop">
                <div className="item">
                  <Link to="/popular" className="text-black">
                    <div className="p-5 rounded bg-secondary-subtle text-center">
                      <i className="fa-solid fa-image fs-1"></i>
                    </div>
                  </Link>
                </div>
                {/* Otros elementos */}
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section id="my-adventures" className="mt-5">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Mis VisuAventuras</h2>
        </div>
        {[1, 2, 3].map(index => (
          <div className="col-6 mb-4" key={index}>
            <div className="p-5 rounded bg-secondary-subtle text-center">
              <i className="fa-solid fa-image fs-1"></i>
            </div>
          </div>
        ))}
        <div className="col-6 mb-4">
          <a href="#" className="text-black">
            <div className="p-5 rounded bg-secondary-subtle text-center">
              <i className="fa-solid fa-circle-plus fs-1"></i>
            </div>
          </a>
        </div>
        <div className="col-12">
          <a href="#" className="btn btn-secondary rounded-pill w-100">
            Tu próximo Visu <i className="fa-solid fa-arrow-right"></i>
          </a>
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
 
export default HomePage;