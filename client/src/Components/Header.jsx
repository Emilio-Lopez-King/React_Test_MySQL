import React from "react";

const Header = () => {
  return (
    <header className="bg-header-color fixed top-0 w-full bg-opacity-90 p-3 shadow-md z-10">
      <div className="ms-auto flex justify-center space-x-36 items-center">
        <h1 className="text-blue-400 w-1/3">Emilio López</h1>
        <nav className="">
          <a href="/" className="aTransform ml-3 hover-effect">
            Inicio
          </a>
          <a href="/acerca" className="text ml-3 hover-effect">
            Acerca
          </a>
          <a
            href="https://www.linkedin.com/in/emilio-lopez-favela"
            className="text ml-3 hover-effect"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
