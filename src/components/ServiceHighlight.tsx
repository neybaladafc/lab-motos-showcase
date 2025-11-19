import serviceRevision from "@/assets/service-revision.jpg";

const ServiceHighlight = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="pe-lg-4">
              <h2 className="display-5 fw-bold text-uppercase mb-3">
                <span className="text-lab-red">Cuidamos</span> da sua moto
              </h2>
              <h3 className="h4 text-uppercase mb-4">Como se fosse nossa</h3>
              <p className="lead mb-4">
                Cada motocicleta que entra na LAB MOTOS recebe atenção especial e cuidado profissional.
                Nossa equipe de mecânicos especializados trata cada moto como se fosse sua própria.
              </p>
              <p className="mb-4">
                Com anos de experiência e conhecimento profundo em diversos modelos, oferecemos
                serviços de manutenção e reparo com precisão técnica e paixão genuína por motocicletas.
              </p>
              <button className="btn btn-lab-primary">
                CONHEÇA NOSSOS SERVIÇOS
              </button>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={serviceRevision} 
                alt="Revisão de moto" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
