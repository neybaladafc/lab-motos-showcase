import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import ServiceHighlight from "@/components/ServiceHighlight";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import {
  faCogs,
  faWrench,
  faCircle,
  faOilCan,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const services = [
    {
      id: "revisao-geral",
      icon: faCogs,
      title: "Revisão Geral",
      description:
        "Check-up completo de todos os sistemas da sua moto, garantindo segurança e desempenho máximo em cada componente.",
    },
    {
      id: "suspensao",
      icon: faWrench,
      title: "Suspensão",
      description:
        "Ajuste e manutenção do sistema de suspensão para conforto e estabilidade superior em qualquer terreno.",
    },
    {
      id: "freios",
      icon: faCircle,
      title: "Freios",
      description:
        "Revisão completa do sistema de freios, essencial para sua segurança. Verificamos pastilhas, discos e fluidos.",
    },
    {
      id: "troca-oleo",
      icon: faOilCan,
      title: "Troca de Óleo",
      description:
        "Troca de óleo do motor com produtos de alta qualidade, prolongando a vida útil e melhorando o desempenho.",
    },
    {
      id: "revisao-geral",
      icon: faCogs,
      title: "Revisão Geral",
      description:
        "Check-up completo de todos os sistemas da sua moto, garantindo segurança e desempenho máximo em cada componente.",
    },
    {
      id: "suspensao",
      icon: faWrench,
      title: "Suspensão",
      description:
        "Ajuste e manutenção do sistema de suspensão para conforto e estabilidade superior em qualquer terreno.",
    },
    {
      id: "freios",
      icon: faCircle,
      title: "Freios",
      description:
        "Revisão completa do sistema de freios, essencial para sua segurança. Verificamos pastilhas, discos e fluidos.",
    },
    {
      id: "troca-oleo",
      icon: faOilCan,
      title: "Troca de Óleo",
      description:
        "Troca de óleo do motor com produtos de alta qualidade, prolongando a vida útil e melhorando o desempenho.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServiceHighlight />
        
        {/* Services Grid */}
        <section className="bg-lab-light py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  serviceId={service.id}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
