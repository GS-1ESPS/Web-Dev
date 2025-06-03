import { logo } from "../assets";
import { footerLinks } from "../js";

const Footer = () => (
  <section className="footer-section">
    <div className="footer-main">
      <div className="footer-logo-text">
        <img
          src={logo}
          alt="Logo do Projeto"
          className="footer-logo"
        />
        <p className="footer-description">
          Uma iniciativa que une inovação tecnológica e ação social.
        </p>
      </div>

      <div className="footer-links-wrapper">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="footer-link-group">
            <h4 className="footer-link-title">{footerlink.title}</h4>
            <ul className="footer-list">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`footer-list-item ${index !== footerlink.links.length - 1 ? "footer-list-spacing" : ""}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="footer-bottom">
      <p className="footer-copyright">
        Copyright Ⓒ 2025 ChuvaSegura. Direitos Autorais.
      </p>

      <div className="footer-terms">
        <p className="footer-copyright">
        Termos de Uso & Privacidade
      </p>
      </div>
    </div>
  </section>
);

export default Footer;
