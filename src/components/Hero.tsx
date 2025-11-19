import heroImage from "@/assets/hero-motorcycle.jpg";

const Hero = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Serviços
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Excelência técnica e paixão em cada detalhe
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left Column - 60% (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              CONHEÇA OS NOSSOS SERVIÇOS
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na LAB Motos, cada serviço é feito com precisão e foco absoluto em
              desempenho. Cuidamos da sua moto como se fosse nossa, pois conhecemos
              profundamente o que te move.
            </p>
          </div>

          {/* Right Column - 40% (2 cols) */}
          <div className="md:col-span-2">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Moto esportiva na oficina LAB Motos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
