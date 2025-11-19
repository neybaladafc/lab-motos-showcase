// Service Data
const serviceData = {
  "revisao-geral": {
    icon: "fas fa-cogs",
    title: "Revisão Geral",
    subtitle: "Check-up completo para sua moto",
    accentText: "PRECISÃO",
    mainText: "ABSOLUTA",
    description: "Nossa revisão geral é um check-up completo de todos os sistemas da sua moto, garantindo segurança e desempenho máximo em cada componente. Realizamos uma análise detalhada e minuciosa.",
    fullDescription: "A revisão geral da LAB Motos é o serviço mais completo que oferecemos. Nossa equipe de mecânicos especializados realiza uma inspeção detalhada de todos os sistemas da sua motocicleta, desde o motor até os componentes elétricos. Garantimos que sua moto esteja em perfeitas condições de uso, identificando possíveis problemas antes que se tornem maiores.",
    heroImage: "images/service-workshop-1.jpg",
    detailImage: "images/service-workshop-1.jpg",
    benefits: [
      "Inspeção completa de todos os sistemas",
      "Verificação de componentes críticos de segurança",
      "Diagnóstico preventivo de problemas",
      "Ajustes e regulagens necessários",
      "Relatório detalhado do estado da moto",
      "Garantia de 90 dias nos serviços realizados"
    ],
    includes: [
      "Verificação do sistema de freios",
      "Análise do motor e transmissão",
      "Checagem elétrica completa",
      "Inspeção de suspensão",
      "Verificação de pneus e rodas",
      "Teste de road test"
    ]
  },
  "suspensao": {
    icon: "fas fa-wrench",
    title: "Suspensão",
    subtitle: "Conforto e estabilidade em qualquer terreno",
    accentText: "CONTROLE",
    mainText: "TOTAL",
    description: "Ajuste e manutenção do sistema de suspensão para conforto e estabilidade superior em qualquer terreno. Trabalhamos com suspensões dianteiras e traseiras.",
    fullDescription: "O sistema de suspensão é fundamental para o conforto e segurança da sua pilotagem. Na LAB Motos, realizamos ajustes precisos e manutenção completa do sistema de suspensão, seja dianteira ou traseira. Nossa equipe tem experiência com todos os tipos de motos, desde esportivas até adventure.",
    heroImage: "images/service-suspension.jpg",
    detailImage: "images/service-suspension.jpg",
    benefits: [
      "Ajuste personalizado para seu estilo de pilotagem",
      "Melhora significativa no conforto",
      "Maior estabilidade em curvas",
      "Redução de fadiga em viagens longas",
      "Manutenção preventiva de componentes",
      "Teste prático após ajustes"
    ],
    includes: [
      "Revisão completa de bengalas e amortecedores",
      "Troca de óleo das bengalas",
      "Ajuste de pré-carga",
      "Regulagem de compressão e retorno",
      "Verificação de vedadores",
      "Limpeza e lubrificação"
    ]
  },
  "freios": {
    icon: "fas fa-circle",
    title: "Freios",
    subtitle: "Segurança em primeiro lugar",
    accentText: "SEGURANÇA",
    mainText: "MÁXIMA",
    description: "Revisão completa do sistema de freios, essencial para sua segurança. Verificamos pastilhas, discos e fluidos com equipamentos de precisão.",
    fullDescription: "O sistema de freios é o componente mais crítico para sua segurança. Na LAB Motos, utilizamos equipamentos de última geração para garantir que seus freios estejam sempre em perfeitas condições. Trabalhamos com todas as marcas e modelos.",
    heroImage: "images/service-brakes.jpg",
    detailImage: "images/service-brakes.jpg",
    benefits: [
      "Verificação completa de pastilhas e discos",
      "Teste de eficiência de frenagem",
      "Troca de fluido de freio quando necessário",
      "Limpeza e lubrificação de pinças",
      "Sangria do sistema hidráulico",
      "Garantia de segurança máxima"
    ],
    includes: [
      "Inspeção visual completa",
      "Medição de espessura de pastilhas",
      "Verificação de discos",
      "Teste de fluido",
      "Ajuste de folgas",
      "Teste de road test"
    ]
  },
  "troca-oleo": {
    icon: "fas fa-oil-can",
    title: "Troca de Óleo",
    subtitle: "Vida longa para seu motor",
    accentText: "QUALIDADE",
    mainText: "GARANTIDA",
    description: "Manutenção periódica com óleos de alta qualidade para prolongar a vida do motor. Usamos apenas óleos premium recomendados pelos fabricantes.",
    fullDescription: "A troca de óleo é uma das manutenções mais importantes para a saúde do seu motor. Na LAB Motos, utilizamos apenas óleos premium das melhores marcas, seguindo rigorosamente as especificações dos fabricantes.",
    heroImage: "images/service-oil.jpg",
    detailImage: "images/service-oil.jpg",
    benefits: [
      "Óleos premium das melhores marcas",
      "Filtros originais ou equivalentes",
      "Descarte ecológico do óleo usado",
      "Verificação de nível de todos os fluidos",
      "Inspeção geral durante o serviço",
      "Registro de manutenção"
    ],
    includes: [
      "Troca de óleo do motor",
      "Substituição do filtro de óleo",
      "Verificação de vazamentos",
      "Check-up visual completo",
      "Limpeza da área de trabalho",
      "Orientações sobre próxima troca"
    ]
  },
  "sistema-eletrico": {
    icon: "fas fa-bolt",
    title: "Sistema Elétrico",
    subtitle: "Diagnóstico preciso e soluções eficientes",
    accentText: "TECNOLOGIA",
    mainText: "AVANÇADA",
    description: "Diagnóstico e reparo de problemas elétricos com equipamentos de última geração. Solucionamos desde problemas simples até os mais complexos.",
    fullDescription: "Os sistemas elétricos modernos das motos são cada vez mais complexos. Na LAB Motos, contamos com equipamentos de diagnóstico de última geração e profissionais especializados para resolver qualquer problema elétrico.",
    heroImage: "images/service-electrical.jpg",
    detailImage: "images/service-electrical.jpg",
    benefits: [
      "Diagnóstico com equipamentos de última geração",
      "Reparo de problemas complexos",
      "Teste de bateria e alternador",
      "Verificação de chicotes elétricos",
      "Solução de curtos-circuitos",
      "Garantia nos serviços realizados"
    ],
    includes: [
      "Teste completo do sistema",
      "Verificação de bateria",
      "Análise de alternador",
      "Inspeção de fusíveis",
      "Teste de partida",
      "Relatório de diagnóstico"
    ]
  },
  "corrente-transmissao": {
    icon: "fas fa-gear",
    title: "Corrente e Transmissão",
    subtitle: "Máxima eficiência de potência",
    accentText: "POTÊNCIA",
    mainText: "EFICIENTE",
    description: "Manutenção do sistema de transmissão para máxima eficiência de potência. Trabalhamos com correntes, coroas e pinhões de todas as marcas.",
    fullDescription: "O sistema de transmissão é responsável por transferir a potência do motor para a roda traseira. Na LAB Motos, realizamos manutenção completa deste sistema vital, garantindo máxima eficiência e durabilidade.",
    heroImage: "images/service-chain.jpg",
    detailImage: "images/service-chain.jpg",
    benefits: [
      "Limpeza e lubrificação especializada",
      "Ajuste preciso de tensão",
      "Verificação de desgaste",
      "Substituição quando necessário",
      "Alinhamento de roda traseira",
      "Orientações de manutenção preventiva"
    ],
    includes: [
      "Limpeza profunda da corrente",
      "Lubrificação com produtos específicos",
      "Ajuste de tensão",
      "Verificação de coroa e pinhão",
      "Alinhamento",
      "Teste de funcionamento"
    ]
  },
  "pneus-rodas": {
    icon: "fas fa-circle-notch",
    title: "Pneus e Rodas",
    subtitle: "Segurança e performance em cada curva",
    accentText: "PRECISÃO",
    mainText: "TOTAL",
    description: "Troca e balanceamento de pneus com equipamento de precisão profissional. Trabalhamos com todas as marcas premium do mercado.",
    fullDescription: "Os pneus são o único ponto de contato entre sua moto e o asfalto. Na LAB Motos, oferecemos serviço completo de troca, balanceamento e alinhamento com equipamentos profissionais de alta precisão.",
    heroImage: "images/service-tires.jpg",
    detailImage: "images/service-tires.jpg",
    benefits: [
      "Balanceamento com equipamento de precisão",
      "Pneus das melhores marcas",
      "Montagem profissional",
      "Descarte ecológico dos pneus usados",
      "Verificação de pressão e válvulas",
      "Garantia de instalação"
    ],
    includes: [
      "Desmontagem e montagem",
      "Balanceamento profissional",
      "Instalação de válvulas novas",
      "Calibragem adequada",
      "Verificação de aros",
      "Teste de segurança"
    ]
  },
  "customizacao": {
    icon: "fas fa-paint-brush",
    title: "Customização e Acessórios",
    subtitle: "Personalize sua moto do seu jeito",
    accentText: "ESTILO",
    mainText: "ÚNICO",
    description: "Personalize sua moto com acessórios e modificações de alta qualidade. Realizamos desde instalações simples até projetos completos de customização.",
    fullDescription: "Cada motociclista tem seu estilo único. Na LAB Motos, ajudamos você a personalizar sua moto com acessórios de alta qualidade e modificações profissionais, mantendo sempre a segurança e funcionalidade.",
    heroImage: "images/service-custom.jpg",
    detailImage: "images/service-custom.jpg",
    benefits: [
      "Consultoria especializada",
      "Instalação profissional",
      "Acessórios de marcas premium",
      "Projetos personalizados",
      "Garantia de instalação",
      "Manutenção de características originais"
    ],
    includes: [
      "Avaliação do projeto",
      "Orçamento detalhado",
      "Instalação de acessórios",
      "Teste de funcionamento",
      "Orientações de uso",
      "Documentação se necessário"
    ]
  }
};

// Show Service Detail
function showServiceDetail(serviceId) {
  const service = serviceData[serviceId];
  if (!service) return;

  const mainContent = document.querySelector('body > section, body > footer');
  const detailSection = document.getElementById('service-detail');
  
  // Hide main content
  document.querySelectorAll('body > section, body > nav + div, body > footer').forEach(el => {
    if (el.id !== 'service-detail') {
      el.style.display = 'none';
    }
  });

  // Build detail page HTML
  const detailHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-lab-dark sticky-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#" onclick="hideServiceDetail(); return false;">
          <i class="fas fa-motorcycle me-2 text-lab-red fs-4"></i>
          <span class="fw-bold">LAB MOTOS</span>
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav2">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="hideServiceDetail(); return false;">
                <i class="fas fa-arrow-left me-2"></i>Voltar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="service-detail-hero position-relative d-flex align-items-center" style="background-image: url('${service.heroImage}');">
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark" style="opacity: 0.7;"></div>
      <div class="container position-relative text-white py-5">
        <div class="row">
          <div class="col-lg-8">
            <button onclick="hideServiceDetail()" class="btn btn-lab-outline mb-4">
              <i class="fas fa-arrow-left me-2"></i> VOLTAR
            </button>
            <h1 class="display-4 fw-bold text-uppercase mb-3">${service.title}</h1>
            <p class="lead mb-4">${service.subtitle}</p>
            <div class="mb-4">
              <span class="text-lab-red fw-bold fs-3 me-2">${service.accentText}</span>
              <span class="fw-bold fs-3">${service.mainText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description Section -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h2 class="h3 fw-bold mb-4">Sobre o Serviço</h2>
            <p class="lead mb-4">${service.description}</p>
            <p>${service.fullDescription}</p>
          </div>
          <div class="col-lg-6">
            <img src="${service.detailImage}" alt="${service.title}" class="img-fluid rounded shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits and Includes Section -->
    <section class="py-5 bg-lab-light">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <h3 class="h4 fw-bold mb-4">
              <span class="text-lab-red">Benefícios</span> do Serviço
            </h3>
            <div class="bg-white p-4 rounded shadow-sm">
              ${service.benefits.map(benefit => `
                <div class="service-benefit-item">
                  <i class="fas fa-check-circle mt-1"></i>
                  <span>${benefit}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="h4 fw-bold mb-4">
              <span class="text-lab-red">O que está</span> incluído
            </h3>
            <div class="bg-white p-4 rounded shadow-sm">
              ${service.includes.map(item => `
                <div class="service-benefit-item">
                  <i class="fas fa-wrench mt-1"></i>
                  <span>${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-lab-dark text-white text-center">
      <div class="container">
        <h2 class="display-5 fw-bold mb-4">Pronto para cuidar da sua moto?</h2>
        <p class="lead mb-4">Entre em contato e agende seu serviço agora mesmo</p>
        <button class="btn btn-lab-red btn-lg px-5">
          AGENDAR SERVIÇO
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-lab-footer text-white py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="d-flex align-items-center mb-3">
              <i class="fas fa-motorcycle text-lab-red me-2 fs-1"></i>
              <h3 class="h4 mb-0 fw-bold">LAB MOTOS</h3>
            </div>
            <p class="text-white-50">
              A LAB MOTOS nasceu da paixão por motos e do compromisso em elevar o
              padrão das oficinas, unindo técnica, confiança e transparência.
            </p>
          </div>

          <div class="col-lg-2 col-md-6">
            <h4 class="h5 fw-bold mb-3">Links Rápidos</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#" onclick="hideServiceDetail(); return false;" class="text-white-50 text-decoration-none">Serviços</a>
              </li>
              <li class="mb-2">
                <a href="#" onclick="hideServiceDetail(); return false;" class="text-white-50 text-decoration-none">Sobre Nós</a>
              </li>
              <li class="mb-2">
                <a href="#" onclick="hideServiceDetail(); return false;" class="text-white-50 text-decoration-none">Contato</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h4 class="h5 fw-bold mb-3">Serviços</h4>
            <ul class="list-unstyled">
              <li class="mb-2 text-white-50">Revisão Geral</li>
              <li class="mb-2 text-white-50">Suspensão</li>
              <li class="mb-2 text-white-50">Freios</li>
              <li class="mb-2 text-white-50">Troca de Óleo</li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h4 class="h5 fw-bold mb-3">Contato</h4>
            <p class="text-white-50 mb-3">
              <strong>Horário:</strong> Seg-Sex: 8h-18h<br />
              Sáb: 8h-12h
            </p>
            <div class="d-flex gap-3">
              <a href="#" class="text-white fs-4">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="text-white fs-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-white fs-4">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <hr class="my-4 border-secondary" />

        <div class="row">
          <div class="col text-center">
            <p class="text-white-50 mb-0">
              © 2024 LAB MOTOS. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;

  detailSection.innerHTML = detailHTML;
  detailSection.classList.remove('d-none');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Hide Service Detail
function hideServiceDetail() {
  const detailSection = document.getElementById('service-detail');
  detailSection.classList.add('d-none');
  detailSection.innerHTML = '';
  
  // Show main content
  document.querySelectorAll('body > section, body > nav + div, body > footer').forEach(el => {
    if (el.id !== 'service-detail') {
      el.style.display = '';
    }
  });
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Scroll Reveal Animation
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe all scroll-reveal elements
  document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});
