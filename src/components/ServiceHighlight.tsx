import serviceWorkshop from "@/assets/service-workshop-1.jpg";

const ServiceHighlight = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-5 bg-lab-light">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <p className="text-uppercase mb-3 fw-semibold" style={{ letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                CONHEÇA OS
              </p>
              <h2 className="display-3 fw-bold text-uppercase mb-4" style={{ lineHeight: '1.1' }}>
                <span className="text-lab-red">NOSSOS</span>
                <br />
                <span className="text-lab-red">SERVIÇOS</span>
              </h2>
              <p className="mb-4 fs-5">
                Na LAB Motos, cada serviço é feito com precisão e foco absoluto em desempenho, 
                Cuidamos da sua moto como se fosse nossa, pois conhecemos profundamente o que te move.
              </p>
              <button 
                className="btn btn-lab-primary btn-lg px-5 text-uppercase"
                onClick={scrollToServices}
              >
                Ver serviços
              </button>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={serviceWorkshop} 
                alt="Oficina LAB Motos" 
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
