import serviceImage from "@/assets/service-revision.jpg";
import { Button } from "@/components/ui/button";

const ServiceHighlight = () => {
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left Column - 40% (2 cols) */}
          <div className="md:col-span-2">
            <div className="aspect-square w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={serviceImage}
                alt="Revisão Geral - Mecânico trabalhando em moto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - 60% (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <div className="inline-block bg-lab-black text-white px-4 py-2 rounded-md text-sm font-semibold tracking-wider">
              REVISÃO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Geral
            </h2>
            <div className="space-y-4 text-lg text-foreground">
              <p>
                Nossa revisão geral é um check-up completo que garante a segurança e
                o desempenho ideal da sua moto. Analisamos cada componente com
                atenção aos detalhes.
              </p>
              <p>
                Verificamos sistema de freios, suspensão, motor, transmissão,
                sistema elétrico e muito mais. Tudo para que você tenha a melhor
                experiência de pilotagem.
              </p>
              <p>
                Utilizamos apenas peças originais e técnicas avançadas, garantindo
                a longevidade e confiabilidade do seu veículo.
              </p>
            </div>
            <Button
              variant="default"
              className="bg-lab-black hover:bg-lab-black/90 text-white font-semibold px-8 py-6 text-base transition-transform hover:scale-105"
            >
              SAIBA MAIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
