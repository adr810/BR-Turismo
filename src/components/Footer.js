import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Receba as melhores ofertas
        </p>
        <p className="footer-subscription-text">
          Você pode cancelar sua inscrição a qualquer momento.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Seu Email"
            />
            <Button buttonStyle="btn--outline">Inscreva-se</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Sobre nós</h2>
            <Link to="/sign-up">Como funciona</Link>
            <Link to="/">Testemunhos</Link>
            <Link to="/">Carreiras</Link>
            <Link to="/">Investidores</Link>
            <Link to="/">Termos de serviço</Link>
          </div>
          <div class="footer-link-items">
            <h2>fale conosco</h2>
            <Link to="/">Contato</Link>
            <Link to="/">Suporte</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Patrocinios</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Envie seu video</Link>
            <Link to="/">Embaixadores</Link>
            <Link to="/">Agencia</Link>
            <Link to="/">Influenciadores</Link>
          </div>
          <div class="footer-link-items">
            <h2>redes sociais</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              BR TUR
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">BR Turismo © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
