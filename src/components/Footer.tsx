import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-lab-footer text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faMotorcycle} className="text-lab-red me-2" size="2x" />
              <h3 className="h4 mb-0 fw-bold">LAB MOTOS</h3>
            </div>
            <p className="text-white-50">
              A LAB MOTOS nasceu da paixão por motos e do compromisso em elevar o
              padrão das oficinas, unindo técnica, confiança e transparência.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h4 className="h5 fw-bold mb-3">Links Rápidos</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#servicos" className="text-white-50 text-decoration-none">
                  Serviços
                </a>
              </li>
              <li className="mb-2">
                <a href="#sobre" className="text-white-50 text-decoration-none">
                  Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a href="#contato" className="text-white-50 text-decoration-none">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="h5 fw-bold mb-3">Serviços</h4>
            <ul className="list-unstyled">
              <li className="mb-2 text-white-50">Revisão Geral</li>
              <li className="mb-2 text-white-50">Suspensão</li>
              <li className="mb-2 text-white-50">Freios</li>
              <li className="mb-2 text-white-50">Troca de Óleo</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="h5 fw-bold mb-3">Contato</h4>
            <p className="text-white-50 mb-3">
              <strong>Horário:</strong> Seg-Sex: 8h-18h<br />
              Sáb: 8h-12h
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-white fs-4">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-white fs-4">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row">
          <div className="col text-center">
            <p className="text-white-50 mb-0">
              © 2024 LAB MOTOS. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
