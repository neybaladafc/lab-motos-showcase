import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faWrench,
  faCircle,
  faOilCan,
  faArrowLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import serviceWorkshop from "@/assets/service-workshop-1.jpg";
import serviceSuspension from "@/assets/service-suspension.jpg";
import serviceBrakes from "@/assets/service-brakes.jpg";
import serviceOil from "@/assets/service-oil.jpg";

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
};

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Serviço não encontrado
            </h1>
            <Button onClick={() => navigate("/")} variant="default">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Voltar para Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative bg-lab-black min-h-[600px] flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={service.heroImage} 
              alt={service.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-lab-black/90 via-lab-black/70 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Title */}
              <div>
                <Button
                  onClick={() => navigate("/")}
                  variant="ghost"
                  className="mb-8 text-white hover:bg-white/10 hover:text-white"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                  Voltar
                </Button>
                <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight">
                  {service.title}
                </h1>
              </div>
              
              {/* Right side - Accent text and button */}
              <div className="text-right">
                <div className="mb-8">
                  <p className="text-lab-red text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">
                    {service.accentText}
                  </p>
                  <h2 className="text-white text-4xl md:text-6xl font-bold uppercase">
                    {service.mainText}
                  </h2>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-lab-black font-semibold px-8 uppercase tracking-wide"
                >
                  AGENDE AGORA
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Description with Image Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left - Text */}
              <div>
                <h2 className="text-lab-red text-2xl md:text-3xl font-bold mb-2 uppercase">
                  Domínio
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase">
                  Total
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  {service.description}
                </p>
              </div>
              
              {/* Right - Image */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={service.detailImage} 
                    alt={`${service.title} detalhes`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits and Includes */}
        <section className="py-20 bg-lab-light">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Benefits */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase">
                  Benefícios
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="bg-lab-red text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span className="text-foreground text-lg leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Includes */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase">
                  O que está incluído
                </h2>
                <ul className="space-y-4">
                  {service.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="bg-lab-red text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span className="text-foreground text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-lab-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-lab-red rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lab-red rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
              Agende seu serviço agora
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco e agende o melhor horário para cuidar da
              sua moto com a excelência que ela merece.
            </p>
            <Button
              size="lg"
              className="bg-lab-red hover:bg-lab-red/90 text-white font-semibold px-12 py-6 text-lg uppercase tracking-wide shadow-lg hover:shadow-xl transition-all"
            >
              ENTRAR EM CONTATO
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
