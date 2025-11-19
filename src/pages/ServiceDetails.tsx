import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faWrench,
  faCircle,
  faOilCan,
  faArrowLeft,
  faCheck,
  faBolt,
  faGear,
  faCircleNotch,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import serviceWorkshop from "@/assets/service-workshop-1.jpg";
import serviceSuspension from "@/assets/service-suspension.jpg";
import serviceBrakes from "@/assets/service-brakes.jpg";
import serviceOil from "@/assets/service-oil.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceChain from "@/assets/service-chain.jpg";
import serviceTires from "@/assets/service-tires.jpg";
import serviceCustom from "@/assets/service-custom.jpg";

const serviceData: Record<string, any> = {
  "revisao-geral": {
    icon: faCogs,
    title: "Revisão Geral",
    subtitle: "Check-up completo para sua moto",
    accentText: "PRECISÃO",
    mainText: "ABSOLUTA",
    description:
      "Nossa revisão geral é um check-up completo de todos os sistemas da sua moto, garantindo segurança e desempenho máximo em cada componente. Realizamos uma análise detalhada e minuciosa.",
    fullDescription:
      "A revisão geral da LAB Motos é o serviço mais completo que oferecemos. Nossa equipe de mecânicos especializados realiza uma inspeção detalhada de todos os sistemas da sua motocicleta, desde o motor até os componentes elétricos. Garantimos que sua moto esteja em perfeitas condições de uso, identificando possíveis problemas antes que se tornem maiores.",
    heroImage: serviceWorkshop,
    detailImage: serviceWorkshop,
    benefits: [
      "Inspeção completa de todos os sistemas",
      "Verificação de componentes críticos de segurança",
      "Diagnóstico preventivo de problemas",
      "Ajustes e regulagens necessários",
      "Relatório detalhado do estado da moto",
      "Garantia de 90 dias nos serviços realizados",
    ],
    includes: [
      "Verificação do sistema de freios",
      "Análise do motor e transmissão",
      "Checagem elétrica completa",
      "Inspeção de suspensão",
      "Verificação de pneus e rodas",
      "Teste de road test",
    ],
  },
  suspensao: {
    icon: faWrench,
    title: "Suspensão",
    subtitle: "Conforto e estabilidade em qualquer terreno",
    accentText: "CONTROLE",
    mainText: "TOTAL",
    description:
      "Ajuste e manutenção do sistema de suspensão para conforto e estabilidade superior em qualquer terreno. Trabalhamos com suspensões dianteiras e traseiras.",
    fullDescription:
      "O sistema de suspensão é fundamental para o conforto e segurança da sua pilotagem. Na LAB Motos, realizamos ajustes precisos e manutenção completa do sistema de suspensão, seja dianteira ou traseira. Nossa equipe tem experiência com todos os tipos de motos, desde esportivas até adventure.",
    heroImage: serviceSuspension,
    detailImage: serviceSuspension,
    benefits: [
      "Ajuste personalizado para seu estilo de pilotagem",
      "Melhora significativa no conforto",
      "Maior estabilidade em curvas",
      "Redução de fadiga em viagens longas",
      "Manutenção preventiva de componentes",
      "Teste prático após ajustes",
    ],
    includes: [
      "Revisão completa de bengalas e amortecedores",
      "Troca de óleo das bengalas",
      "Ajuste de pré-carga",
      "Regulagem de compressão e retorno",
      "Verificação de vedadores",
      "Limpeza e lubrificação",
    ],
  },
  freios: {
    icon: faCircle,
    title: "Freios",
    subtitle: "Segurança em primeiro lugar",
    accentText: "SEGURANÇA",
    mainText: "MÁXIMA",
    description:
      "Revisão completa do sistema de freios, essencial para sua segurança. Verificamos pastilhas, discos e fluidos com equipamentos de precisão.",
    fullDescription:
      "O sistema de freios é o componente mais crítico para sua segurança. Na LAB Motos, realizamos uma revisão completa e detalhada de todo o sistema de frenagem, utilizando equipamentos de última geração para garantir a máxima eficiência e segurança.",
    heroImage: serviceBrakes,
    detailImage: serviceBrakes,
    benefits: [
      "Maior segurança em todas as condições",
      "Frenagem mais eficiente",
      "Redução da distância de frenagem",
      "Maior durabilidade dos componentes",
      "Prevenção de problemas graves",
      "Inspeção com equipamentos de precisão",
    ],
    includes: [
      "Verificação e troca de pastilhas",
      "Inspeção de discos de freio",
      "Sangria e troca de fluido",
      "Revisão de pinças e pistões",
      "Teste de eficiência de frenagem",
      "Verificação de mangueiras e conexões",
    ],
  },
  "troca-oleo": {
    icon: faOilCan,
    title: "Troca de Óleo",
    subtitle: "Prolongue a vida do seu motor",
    accentText: "PROTEÇÃO",
    mainText: "PREMIUM",
    description:
      "Troca de óleo do motor com produtos de alta qualidade, prolongando a vida útil e melhorando o desempenho. Usamos óleos premium das melhores marcas.",
    fullDescription:
      "A troca regular de óleo é essencial para manter seu motor em perfeito funcionamento. Na LAB Motos, utilizamos apenas óleos premium das melhores marcas do mercado, seguindo rigorosamente as especificações do fabricante da sua moto.",
    heroImage: serviceOil,
    detailImage: serviceOil,
    benefits: [
      "Proteção superior do motor",
      "Melhor desempenho e economia",
      "Redução de desgaste interno",
      "Limpeza do sistema de lubrificação",
      "Maior vida útil do motor",
      "Óleos premium das melhores marcas",
    ],
    includes: [
      "Troca de óleo do motor",
      "Substituição do filtro de óleo",
      "Verificação de nível de outros fluidos",
      "Inspeção visual do motor",
      "Descarte ecológico do óleo usado",
      "Registro de quilometragem",
    ],
  },
  "sistema-eletrico": {
    icon: faBolt,
    title: "Sistema Elétrico",
    subtitle: "Energia e performance sem falhas",
    accentText: "DIAGNÓSTICO",
    mainText: "PRECISO",
    description:
      "Diagnóstico e manutenção completa do sistema elétrico, incluindo bateria, fiação e componentes eletrônicos da sua motocicleta.",
    fullDescription:
      "O sistema elétrico da sua moto é fundamental para o funcionamento de todos os componentes. Na LAB Motos, utilizamos equipamentos de diagnóstico de última geração para identificar e resolver qualquer problema elétrico, desde bateria até sistemas eletrônicos complexos.",
    heroImage: serviceElectrical,
    detailImage: serviceElectrical,
    benefits: [
      "Diagnóstico completo com equipamentos modernos",
      "Prevenção de panes elétricas",
      "Maior confiabilidade do sistema",
      "Otimização do consumo de energia",
      "Identificação precoce de problemas",
      "Garantia nos serviços realizados",
    ],
    includes: [
      "Teste completo da bateria",
      "Verificação de alternador e regulador",
      "Inspeção de chicotes elétricos",
      "Teste de componentes eletrônicos",
      "Verificação de sistema de iluminação",
      "Diagnóstico de injeção eletrônica",
    ],
  },
  "corrente-transmissao": {
    icon: faGear,
    title: "Corrente e Transmissão",
    subtitle: "Transmissão de potência eficiente",
    accentText: "POTÊNCIA",
    mainText: "OTIMIZADA",
    description:
      "Manutenção e ajuste de corrente, coroa e pinhão, garantindo transmissão de potência eficiente e durável para sua moto.",
    fullDescription:
      "A transmissão é responsável por entregar a potência do motor às rodas de forma eficiente. Na LAB Motos, realizamos manutenção completa do sistema de transmissão, incluindo corrente, coroa e pinhão, garantindo máxima eficiência e durabilidade.",
    heroImage: serviceChain,
    detailImage: serviceChain,
    benefits: [
      "Transmissão de potência otimizada",
      "Maior vida útil dos componentes",
      "Redução de ruído e vibração",
      "Melhor economia de combustível",
      "Manutenção preventiva completa",
      "Ajustes precisos de tensão",
    ],
    includes: [
      "Limpeza e lubrificação da corrente",
      "Verificação de desgaste de coroa e pinhão",
      "Ajuste preciso de tensão",
      "Alinhamento do conjunto",
      "Inspeção de rolamentos",
      "Recomendações de substituição",
    ],
  },
  "pneus-rodas": {
    icon: faCircleNotch,
    title: "Pneus e Rodas",
    subtitle: "Aderência e segurança em cada curva",
    accentText: "ADERÊNCIA",
    mainText: "PERFEITA",
    description:
      "Troca de pneus, balanceamento e alinhamento de rodas para máxima aderência e segurança em todas as condições de pilotagem.",
    fullDescription:
      "Os pneus são o único ponto de contato da sua moto com o solo, sendo fundamentais para segurança e performance. Na LAB Motos, oferecemos serviço completo de pneus e rodas, desde a escolha do modelo ideal até instalação e balanceamento profissional.",
    heroImage: serviceTires,
    detailImage: serviceTires,
    benefits: [
      "Maior segurança em curvas e frenagens",
      "Aderência otimizada em todas condições",
      "Desgaste uniforme dos pneus",
      "Melhor estabilidade em altas velocidades",
      "Conforto superior de pilotagem",
      "Consultoria para escolha do pneu ideal",
    ],
    includes: [
      "Troca de pneus com desmontagem profissional",
      "Balanceamento dinâmico de rodas",
      "Verificação de pressão e válvulas",
      "Inspeção de aros e raios",
      "Alinhamento quando necessário",
      "Descarte ecológico dos pneus velhos",
    ],
  },
  "customizacao-acessorios": {
    icon: faPaintBrush,
    title: "Customização e Acessórios",
    subtitle: "Personalize sua moto do seu jeito",
    accentText: "ESTILO",
    mainText: "ÚNICO",
    description:
      "Instalação de acessórios e customizações para deixar sua moto com sua identidade e ainda mais funcional no dia a dia.",
    fullDescription:
      "Torne sua moto única com nosso serviço de customização e instalação de acessórios. Na LAB Motos, trabalhamos com as melhores marcas do mercado e realizamos instalações profissionais que preservam a garantia e segurança da sua motocicleta.",
    heroImage: serviceCustom,
    detailImage: serviceCustom,
    benefits: [
      "Moto personalizada com sua identidade",
      "Instalação profissional garantida",
      "Acessórios das melhores marcas",
      "Maior funcionalidade no dia a dia",
      "Valorização da motocicleta",
      "Consultoria especializada",
    ],
    includes: [
      "Instalação de escapamentos esportivos",
      "Montagem de baús e alforges",
      "Instalação de protetores",
      "Aplicação de películas e adesivos",
      "Instalação de iluminação LED",
      "Montagem de para-brisas e bolhas",
    ],
  },
};

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">
              Serviço não encontrado
            </h1>
            <button onClick={() => navigate("/")} className="btn btn-lab-primary">
              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
              Voltar para Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow-1">
        {/* Hero Section with Image */}
        <section 
          className="position-relative d-flex align-items-center bg-lab-black" 
          style={{ minHeight: '600px' }}
        >
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage: `url(${service.heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.6
            }}
          ></div>
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), transparent)'
            }}
          ></div>
          
          <div className="container position-relative">
            <div className="row g-5 align-items-center">
              <div className="col-md-6">
                <button
                  onClick={() => navigate("/")}
                  className="btn btn-outline-light mb-4"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                  Voltar
                </button>
                <h1 className="display-3 fw-bold text-white text-uppercase">
                  {service.title}
                </h1>
              </div>
              
              <div className="col-md-6 text-md-end">
                <div className="mb-4">
                  <p className="text-lab-red h4 fw-bold mb-2 text-uppercase">
                    {service.accentText}
                  </p>
                  <h2 className="text-white display-4 fw-bold text-uppercase">
                    {service.mainText}
                  </h2>
                </div>
                <button className="btn btn-lab-outline btn-lg px-5 text-uppercase">
                  AGENDE AGORA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Description with Image Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="text-lab-red h2 fw-bold mb-2 text-uppercase">
                  Domínio
                </h2>
                <h3 className="display-5 fw-bold mb-4 text-uppercase">
                  Total
                </h3>
                <p className="lead mb-4">
                  {service.fullDescription}
                </p>
                <p className="fs-5 text-muted">
                  {service.description}
                </p>
              </div>
              
              <div className="col-lg-6">
                <div className="position-relative">
                  <img 
                    src={service.detailImage} 
                    alt={`${service.title} detalhes`}
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits and Includes */}
        <section className="py-5 bg-lab-light">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <h2 className="display-6 fw-bold mb-4 text-uppercase">
                  Benefícios
                </h2>
                <ul className="list-unstyled">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="d-flex align-items-start mb-3">
                      <div 
                        className="bg-lab-red text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                        style={{ width: '28px', height: '28px', marginTop: '4px' }}
                      >
                        <FontAwesomeIcon icon={faCheck} className="small" />
                      </div>
                      <span className="fs-5">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-6">
                <h2 className="display-6 fw-bold mb-4 text-uppercase">
                  O que está incluído
                </h2>
                <ul className="list-unstyled">
                  {service.includes.map((item: string, index: number) => (
                    <li key={index} className="d-flex align-items-start mb-3">
                      <div 
                        className="bg-lab-red text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                        style={{ width: '28px', height: '28px', marginTop: '4px' }}
                      >
                        <FontAwesomeIcon icon={faCheck} className="small" />
                      </div>
                      <span className="fs-5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-lab-black position-relative overflow-hidden">
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ opacity: 0.1 }}
          >
            <div 
              className="position-absolute rounded-circle"
              style={{
                top: '0',
                left: '25%',
                width: '384px',
                height: '384px',
                backgroundColor: 'var(--lab-red)',
                filter: 'blur(100px)'
              }}
            ></div>
            <div 
              className="position-absolute rounded-circle"
              style={{
                bottom: '0',
                right: '25%',
                width: '384px',
                height: '384px',
                backgroundColor: 'var(--lab-red)',
                filter: 'blur(100px)'
              }}
            ></div>
          </div>
          <div className="container text-center position-relative">
            <h2 className="display-5 fw-bold text-white mb-4 text-uppercase">
              Agende seu serviço agora
            </h2>
            <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Entre em contato conosco e agende o melhor horário para cuidar da
              sua moto com a excelência que ela merece.
            </p>
            <button className="btn btn-lab-red btn-lg px-5 py-3 text-uppercase shadow-lg">
              ENTRAR EM CONTATO
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
