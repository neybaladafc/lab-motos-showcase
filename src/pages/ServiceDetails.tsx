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

const serviceData: Record<string, any> = {
  "revisao-geral": {
    icon: faCogs,
    title: "Revisão Geral",
    subtitle: "Check-up completo para sua moto",
    description:
      "Nossa revisão geral é um check-up completo de todos os sistemas da sua moto, garantindo segurança e desempenho máximo em cada componente. Realizamos uma análise detalhada e minuciosa.",
    fullDescription:
      "A revisão geral da LAB Motos é o serviço mais completo que oferecemos. Nossa equipe de mecânicos especializados realiza uma inspeção detalhada de todos os sistemas da sua motocicleta, desde o motor até os componentes elétricos. Garantimos que sua moto esteja em perfeitas condições de uso, identificando possíveis problemas antes que se tornem maiores.",
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
    description:
      "Ajuste e manutenção do sistema de suspensão para conforto e estabilidade superior em qualquer terreno. Trabalhamos com suspensões dianteiras e traseiras.",
    fullDescription:
      "O sistema de suspensão é fundamental para o conforto e segurança da sua pilotagem. Na LAB Motos, realizamos ajustes precisos e manutenção completa do sistema de suspensão, seja dianteira ou traseira. Nossa equipe tem experiência com todos os tipos de motos, desde esportivas até adventure.",
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
    description:
      "Revisão completa do sistema de freios, essencial para sua segurança. Verificamos pastilhas, discos e fluidos com equipamentos de precisão.",
    fullDescription:
      "O sistema de freios é o componente mais crítico para sua segurança. Na LAB Motos, realizamos uma revisão completa e detalhada de todo o sistema de frenagem, utilizando equipamentos de última geração para garantir a máxima eficiência e segurança.",
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
    description:
      "Troca de óleo do motor com produtos de alta qualidade, prolongando a vida útil e melhorando o desempenho. Usamos óleos premium das melhores marcas.",
    fullDescription:
      "A troca regular de óleo é essencial para manter seu motor em perfeito funcionamento. Na LAB Motos, utilizamos apenas óleos premium das melhores marcas do mercado, seguindo rigorosamente as especificações do fabricante da sua moto.",
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
        {/* Hero Section */}
        <section className="bg-lab-light py-16">
          <div className="container mx-auto px-4">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-8 hover:bg-background/50"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Voltar
            </Button>
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-lab-black text-white w-20 h-20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} className="text-3xl" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  {service.subtitle}
                </p>
              </div>
            </div>
            <p className="text-lg text-foreground leading-relaxed max-w-4xl">
              {service.description}
            </p>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Sobre o Serviço
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits and Includes */}
        <section className="py-16 bg-lab-light">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Benefícios
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-lab-black text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span className="text-foreground text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Includes */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  O que está incluído
                </h2>
                <ul className="space-y-4">
                  {service.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-lab-black text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      </div>
                      <span className="text-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Agende seu serviço agora
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e agende o melhor horário para cuidar da
              sua moto com a excelência que ela merece.
            </p>
            <Button
              size="lg"
              className="bg-lab-black hover:bg-lab-black/90 text-white font-semibold px-8"
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
