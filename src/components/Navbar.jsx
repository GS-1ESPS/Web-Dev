import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <>
      <nav className="navbar sm:px-16 px-6">
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between ">
          <a href="/">
            <img src={logo} alt="Logo do Projeto" className="navbar-logo" />
          </a>

          <ul className="navbar-links">
            {navLinks.map((nav, index) => (
              <li
                key={nav.path}
                className={`navbar-link ${active === nav.title ? "active-link" : "inactive-link"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-buttons">
            <li>
              <button onClick={() => setOpenModal1(true)} className="btn-navbar">Consultar Bairro</button>
            </li>
          </ul>

          <div className="navbar-toggle-container">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="navbar-toggle-icon"
              onClick={() => setToggle(!toggle)}
            />

            <div className={`navbar-mobile-menu ${!toggle ? "hidden" : "flex"}`}>
              <ul className="navbar-mobile-links">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.path}
                    className={`navbar-link-mobile ${active === nav.title ? "active-link" : "inactive-link"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <Link to={nav.path}>{nav.title}</Link>
                  </li>
                ))}
                <div className="navbar-link-mobile flex flex-col gap-2 mt-2">
                  <button onClick={() => setOpenModal1(true)} className="btn-navbar-mobile">Consultar Bairro</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Consultar Bairro */}
      {openModal1 && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative">
            <button  onClick={() => {
          setOpenModal1(false);
          setSuccessMessage(false);
        }}  className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800">
              &times;
            </button>

            <h3 className="text-2xl font-semibold mb-2">Consultar Bairro</h3>
            <p className="text-gray-600 mb-6">Aqui você pode consultar a situação climática do bairro que desejar!</p>

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" onSubmit={(e) => { e.preventDefault(); setSuccessMessage(true); }}>
              <input type="text" placeholder="Nome completo" className="border p-2 rounded-md w-full" required />
              <input type="text" placeholder="CPF" className="border p-2 rounded-md w-full" required />
              <div className="flex items-center border rounded-md overflow-hidden">
                <span className="px-2 bg-gray-100 text-gray-500">@</span>
                <input type="email" placeholder="Email" className="p-2 w-full focus:outline-none" required />
              </div>
              <input type="text" placeholder="CEP" className="border p-2 rounded-md w-full" required />
              <select className="border p-2 rounded-md w-full">
                <option disabled selected>É portador de alguma necessidade especial?</option>
                <option>Sim</option>
                <option>Não</option>
              </select>
              <select className="border p-2 rounded-md w-full">
                <option disabled selected>Necessidade especial...</option>
                <option>...</option>
              </select>

              <div className="col-span-full">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  Aceito os termos e condições.
                </label>
              </div>
              <div className="col-span-full">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Enviar
                </button>
                {successMessage && (
                  <div className="bg-green-100 text-green-800 p-3 rounded mt-4 text-sm">
                    Situação enviada por e-mail com sucesso.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
