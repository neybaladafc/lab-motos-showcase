import heroImage from "@/assets/hero-motorcycle.jpg";

const Hero = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center" 
      style={{ 
        minHeight: '600px',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ opacity: 0.7 }}></div>
      
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8">
            <div className="text-white animate-fade-in-up">
              <h1 className="display-3 fw-bold mb-4 text-uppercase">
                Excelência Técnica e Paixão em Cada Detalhe
              </h1>
              <p className="lead mb-4 fs-5">
                A LAB MOTOS nasceu da paixão por motos e do compromisso em elevar o padrão das oficinas,
                unindo técnica, confiança e transparência.
              </p>
              <button className="btn btn-lab-red btn-lg px-5">
                AGENDE SEU SERVIÇO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
