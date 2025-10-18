
import React from "react";
import "./test.css";

const Test: React.FC = () => {
  return (
    <div className="product-page">
      <header className="product-header">
        <h1 className="product-title">ChainQuery DApp — Demo Product</h1>
      </header>

      <main className="product-main">
        <section className="product-hero">
          <figure className="product-image" aria-hidden>
            {/* simple inline SVG as product illustration */}
            <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustración del producto">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect x="40" y="40" width="520" height="320" rx="16" fill="#0f172a" opacity="0.9" />
              <rect x="80" y="80" width="440" height="240" rx="12" fill="url(#g)" opacity="0.15" />
              <g transform="translate(120,120)" fill="#fff" opacity="0.95">
                <rect width="160" height="20" rx="6" />
                <rect y="40" width="360" height="16" rx="6" />
                <rect y="68" width="300" height="16" rx="6" />
              </g>
            </svg>
          </figure>

          <div className="product-info">
            <p className="product-description">
              ChainQuery DApp es una demostración de producto pensada para mostrar cómo
              integrar información on-chain con una interfaz limpia y responsiva. Esta
              versión de ejemplo incluye una imagen ilustrativa, descripción breve y
              una lista con las características principales.
            </p>

            <ul className="product-features">
              <li className="feature">
                <strong>Rápido y ligero</strong>
                <span> — Interfaz optimizada para velocidad y bajo consumo.</span>
              </li>
              <li className="feature">
                <strong>Integración on-chain</strong>
                <span> — Consulta y muestra datos de la blockchain en tiempo real.</span>
              </li>
              <li className="feature">
                <strong>Diseño responsivo</strong>
                <span> — Se adapta a móviles, tablets y pantallas de escritorio.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="product-footer">
        <div className="footer-content">
          <p>Contacto: <a href="mailto:info@chainquery.example">info@chainquery.example</a> — Tel: +1 234 567 890</p>
          <p className="small">Síguenos en redes para más novedades.</p>
        </div>
      </footer>
    </div>
  );
};

export default Test;
