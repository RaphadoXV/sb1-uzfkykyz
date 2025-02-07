import React, { useState } from 'react';
import { Mail, Phone, X, MessageSquare, Factory, Warehouse, Leaf, Building2, Users, FileSpreadsheet, Store, FlaskRound as Flask, Wheat } from 'lucide-react';

interface ServiceDetails {
  title: string;
  description: string;
  detailedDescription: string;
  icon: React.ReactNode;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ImageModalState {
  isOpen: boolean;
  imageUrl: string;
  title: string;
}

const services: ServiceDetails[] = [
  {
    icon: <Factory className="w-8 h-8 text-[#E74C3C]" />,
    title: "Algodoeiras",
    description: "Governança de dados, rastreabilidade e segurança para o seu negócio.",
    detailedDescription: `O Módulo Unidade de Beneficiamento de Algodão é a solução desenvolvida pela Agrotis para garantir controle e rastreabilidade em todas as etapas e processos de uma UBA.

O que o módulo Algodão pode fazer
• Gestão de algodoeiras
• Gestão da qualidade visual e HVI dos fardinhos
• Acompanhamento de qualidade, origem e localização dos rolinhos de algodão
• Controle de emblocamento e definição de padrões de qualidade
• Ordens de beneficiamentos
• Rastreabilidade do algodão em todas as etapas

Vantagens
• Ganho de tempo
• Rastreabilidade do algodão
• Padronização das informações
• Compliance e Governança
• Facilidade no controle dos processos da empresa

Conte com uma solução tecnológica e segura, desenvolvida exclusivamente para atender Unidades de Beneficiamento de Algodão.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Ordens de beneficiamentos</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle das etapas e turnos</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Cálculo automático da distribuição de custos</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Análise de produção</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle de envio de amostras e intregação via API</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">App AgrotisUBA</span>`
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#E74C3C]" />,
    title: "Produção de Sementes",
    description: "Controle geral da produção de sementes com rastreabilidade de ponta a ponta",
    detailedDescription: `A Plataforma Agrotis Produção de Sementes otimiza suas rotinas e garante a rastreabilidade dos processos
    
O que a plataforma Agrotis Produção de Sementes pode fazer
• Controle de todas as etapas da Produção de Sementes através da integração entre módulos específicos para cada parte do processo
• Soluções integradas com seu ERP, CRM e outros softwares ou equipamentos
• Emissão de documentos conforme instruções normativas vigentes
• Software em nuvem com preenchimento dinâmico das informações

Vantagens
• Mais segurança na informação
• Rastreabilidade de amostras e análises
• Redução de erros e não conformidades em auditorias
• Segurança no preenchimento do BAS

Conte com uma plataforma especialista para atender todo o fluxo da Produção de Sementes e que te acompanha do campo ao laboratório.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Módulo Campo de Sementes</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Módulo de UBS e Qualidade</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Módulo LAS - Laboratório de Sementes</span>`
  },
  {
    icon: <Warehouse className="w-8 h-8 text-[#E74C3C]" />,
    title: "Armazenagem",
    description: "Automação de operações para maior segurança do armazém de grãos",
    detailedDescription: `A Plataforma Agrotis Armazenagem é a solução desenvolvida para otimizar a tomada de decisões e trazer segurança e agilidade para os processos de recepção e expedição de armazéns

O que a Plataforma Agrotis pode fazer
• Gestão dos contratos de compra e venda de produtos
• Administração da cobrança de serviços de secagem, armazenagem e outras taxas
• Controle de pátio com etapas de identificação, pesagem e classificação
• Automação do registro das pesagens de caminhão
• Controle de saldos de parceiros e produtores por safra, produto, contrato e tipos de operação
• Registro de informações de maneira offline

Vantagens
• Ganho de tempo
• Padronização das informações
• Compliance e governança
• Facilidade no controle dos processos da empresa

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Armazenagem</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Automatização da cobrança de serviços</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Aplicativo Agrotis Controle de Pátio</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Aplicativo Portal do Produtor</span>`
  },
  {
    icon: <Wheat className="w-8 h-8 text-[#E74C3C]" />,
    title: "Produção Rural",
    description: "Um software parceiro de quem produz no agronegócio",
    detailedDescription: `A Plataforma Agrotis é uma solução pensada para otimizar a rotina agro e facilitar a gestão da produção rural.

O que a Plataforma Agrotis pode fazer
• Controle desde o planejamento até a colheita e comercialização
• Centralização de todos os dados em um único local
• Planejamento e monitoramento de safras, cultura, cultivares, propriedades e talhões
• Apuração de custos da produção agrícola
• Informações em tempo real para apoiar a tomada de decisões
• Acesso desde qualquer lugar, seja no computador ou no smartphone
• Padronização de informações para toda a equipe
• Padronização e proteção das informações e dados

Vantagens
• Organização de todas as informações da produção rural em um banco de dados especial
• Fim da pulverização e duplicidade de informações
• Relatórios e dashboards específicos para consulta de dados
• Compliance e governança total nas atividades

Conte com um software de gestão agro que acompanha os processos do seu negócio.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Planejamento da produção</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle dos campos de produção</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle dos eventos e das atividades de manejo</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Aplicativo de celular offline</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Pacotes tecnológicos</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle de estoque de almoxarifado</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle total dos custos</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Automatização da apuração de resultados</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Monitoramento georreferenciado de pragas (MIP)</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Manutenções preventivas e corretivas</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle das operações das máquinas no campo</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Planejamento de manutenções preventivas e corretivas</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Operações especiais para algodão</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle das expedições de saída do campo</span>`
  },
  {
    icon: <Users className="w-8 h-8 text-[#E74C3C]" />,
    title: "Cooperativas",
    description: "A fusão perfeita entre a governança e a segurança da SAP com a experiência da Agrotis",
    detailedDescription: `A Solução Agrotis para Cooperativas oferece um amplo conjunto de recursos que abordam desde o rateio de ato cooperado até o controle de capital social, além de todas as obrigações fiscais e operacionais do setor.
    
O que a Solução Agrotis Cooperativas pode fazer
• Integração com o SAP Business One
• Integração entre todos os setores do negócio
• Ampla gama de recursos, como: rateio de ato cooperado, gestão de obrigações fiscais, controles de custo, emissão de receituário, barter, logística, etc.
• Recursos avançados de controle e monitoramento, aumentando a transparência na gestão

Vantagens
• Gestão integrada e eficiente
• Redução de custos e desperdícios
• Produtividade e agilidade na tomada de decisões estratégicas
• Conformidade legal
• Controle de estoques e produção
• Segurança de dados

Conte com diversas funcionalidades que impulsionam o sucesso e o crescimento sustentável da sua cooperativa agropecuária.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Gerenciamento dos cooperados e suas propriedades</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle dos autorizados a realizar compra/venda em nome do cooperado</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle de capital social e distribuição de sobras por cooperado</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Separação contábil entre cooperados e terceiros</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Rateio de despesas entre cooperados e terceiros para apuração de lucro</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle de impostos entre cooperados e terceiros para exclusão de base de cálculo de PIS/Cofins e outros controles</span>`
  },
  {
    icon: <FileSpreadsheet className="w-8 h-8 text-[#E74C3C]" />,
    title: "Receituário Agronômico",
    description: "A solução de Receituário Agronômico mais utilizada do país, com 3 milhões de receituários emitidos em 2023",
    detailedDescription: `Mais agilidade, segurança e autonomia em suas recomendações de Receituários Agronômicos.
    
O que a Plataforma Agrotis Receituário Agronômico pode fazer
• Emissão de receituários agronômicos conforme as legislações estaduais
• Envio automático dos receituários emitidos para o produtor rural via e-mail
• Recomendação atualizada para controle dos problemas fitossanitários
• Armazenamento dos receituários emitidos
• Listagem das alternativas de controle permitidas
• Garantia de segurança nas informações
• Georreferenciamento da localização da propriedade
• Emissão e envio de relatórios acessórios para distribuidores de insumos agrícolas

Vantagens
• Assinatura dos receituários agronômicos online através de certificação digital
• Atualização constante do banco de dados de produtos fitossanitários
• PIs e consultoria para integração com seu ERP
• Plataforma responsiva para acesso através de qualquer dispositivo conectado à internet

Tenha um processo de emissão de receituários agronômicos modernizado, seguro e de acordo com a legislação vigente.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Atualizações de acordo com as normas do MAPA</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Instruções de uso e modo de aplicação</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Georreferenciamento de fazendas e talhões</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Assinatura digital</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Backup dos receituários agronômicos</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Elaboração e envio de relatórios acessórios</span>`
  },
  {
    icon: <Store className="w-8 h-8 text-[#E74C3C]" />,
    title: "Revendas e Distribuidoras de Insumos Agrícolas",
    description: "Mobilidade, agilidade e segurança para a gestão de revendas e distribuidoras de insumos agrícolas",
    detailedDescription: `O Software Agrotis é uma solução desenvolvida para atender a demanda operacional específica do segmento de distribuição de insumos agrícolas e revendas.

O que o Software Agrotis Revendas e Distribuidoras pode fazer
• Integração entre as diferentes áreas da empresa e de acordo com as regras do agronegócio
• Fornecimento de dados precisos e processao bem definidos
• Otimização e agilidade nos processos da empresa, como: controles financeiros, faturamentos, obrigações fiscais, emissão de receituários, etc.
• Visão global que permite a implementação de melhorias para maior rentabilidade
• Gestão com agilidade e governança nos processos
• Segurança da informação e apoio de todo o time de especialistas da Agrotis

Vantagens
• Integração entre diferentes departamentos, garantindo maior segurança, qualidade e credibilidade das informações
• Redução de custos operacionais
• Otimização e maior eficiência de processos, além de mais insumos para a tomada de decisão
• Controle financeiro de custos e rentabilidade da operação ao alcance das mãos

Conte com ferramentas para otimizar a gestão financeira, fiscal, comercial e logística do seu negócio.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Operação e demonstração dos resultados</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Listas de preços dinâmicas</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Comissionamento da equipe de vendas</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Conciliação bancária automatizada</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Cnab Pagamento e Recebimento</span>`
  },
  {
    icon: <Flask className="w-8 h-8 text-[#E74C3C]" />,
    title: "Indústria de Fertilizantes",
    description: "Planejamento e sincronia em todas as etapas da produção",
    detailedDescription: `A solução Agrotis para Indústria de Fertilizantes entrega funcionalidades que abrangem desde a gestão de pátio até as exigências legais e fiscais específicas do segmento.

O que a ferramenta pode fazer
• Gestão de estoque, pedidos e produção
• Conformidade com questões legais de movimentação de estoque de matérias-primas, produtos em elaboração e produtos acabados
• Integração com outras ferramentas, como sistemas de controle de balança, maquinários de produção e agendamentos de cargas
• Planejamento e acompanhamento logístico
• Controle de formulações e ordens de produção
• Riscos da indústria reduzidos através do acompanhamento dos principais gargalos da produção

Vantagens
• Melhoria no controle de operações, demanda de pedidos, gestão de estoque e planejamento de produção e expedição
• Agilidade nos processos operacionais
• Padronização de processos e rastreabilidade de produtos
• Processos específicos para indústrias de fertilizantes sólidos, líquidos e biológicos

Conte com ferramentas para otimizar a gestão financeira, fiscal, comercial e logística do seu negócio.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Ordens de produção</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Gestão de expedição e faturamento de senhas de entrega</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Controle de produção e matéria-prima</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Planejamento e acompanhamento logístico</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Ferramentas específicas</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Rotinas específicas</span>`
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#E74C3C]" />,
    title: "Indústria de Ração",
    description: "Gestão da produção da matéria-prima até o produto final",
    detailedDescription: `A solução Agrotis para Indústrias de Rações garante o melhor controle de operações, gestão de estoque, demanda de pedidos, controle de formulações e ordens de produção, gerando um diferencial competitivo dentro do segmento.
    
O que a ferramenta pode fazer
• Auxílio na gestão de estoque, de pedidos e de produção
• Integração com outras ferramentas, como balança e maquinário de produção
• Conformidade com questões legais, principalmente relacionadas ao Ministério da Agricultura
• Controle e planejamento do atendimento de pedidos
• Auxílio nas operações de expedição e produção da indústria de nutrição animal
• Atende todas as necessidades de uma indústria de rações

Vantagens
• Agilidade nos processos operacionais
• Segurança nas entregas fiscais, legais e contábeis
• Padronização de processos e rastreabilidade de produtos
• Ganhos em volume de produção e aumento da capacidade de vendas

Conte com ferramentas para otimizar a gestão financeira, fiscal, comercial e logística do seu negócio.

Funcionalidades
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Ordens de produção</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Gestão de expedição e faturamento de senhas de entrega</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Relatórios de controle de produção e matéria-prima</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Planejamento e acompanhamento logístico</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Ferramentas específicas</span>
• <span class="text-[#E74C3C] cursor-pointer hover:underline" data-image="https://raw.githubusercontent.com/ar4k/images/main/ordem-beneficiamento.png">Rotinas específicas</span>`
  }
];

function App() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [imageModal, setImageModal] = useState<ImageModalState>({
    isOpen: false,
    imageUrl: '',
    title: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contato - ${selectedService?.title}`;
    const body = `Nome: ${contactForm.name}
E-mail: ${contactForm.email}
Celular: ${contactForm.phone}
Mensagem: ${contactForm.message}`;

    window.location.href = `mailto:contato@studioagronegocio.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5516996442748', '_blank');
  };

  const handleImageClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.dataset.image) {
      setImageModal({
        isOpen: true,
        imageUrl: target.dataset.image,
        title: 'Ordem de Beneficiamento'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#009D82] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2">
            <div className="h-10">
              <img 
                src="https://raw.githubusercontent.com/ar4k/branding/main/logo/ar4k-white.svg" 
                alt="AR4K Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <nav className="mt-2 md:mt-0">
              <ul className="flex space-x-8">
                <li><a href="#sobre" className="hover:text-gray-300 transition-colors font-semibold">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-gray-300 transition-colors font-semibold">Serviços</a></li>
                <li><a href="#contato" className="hover:text-gray-300 transition-colors font-semibold">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Agronegócio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Consultoria Especializada no Agronegócio</h1>
          <p className="text-xl md:text-2xl mb-8">Soluções inovadoras para impulsionar o setor.</p>
          <a 
            href="#contato" 
            className="bg-[#E74C3C] hover:bg-[#c0392b] transition-colors text-white font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2"
          >
            Fale Conosco
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos especialistas no setor do agronegócio, oferecendo consultoria e estratégias personalizadas 
              para impulsionar o crescimento do seu negócio. Nossa equipe combina experiência prática com 
              conhecimento técnico para entregar resultados excepcionais.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onLearnMore={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Email Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Envie uma mensagem</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Celular
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E74C3C] text-white px-6 py-2 rounded-lg hover:bg-[#c0392b] transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Enviar E-mail
                </button>
              </form>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-center">Contato Rápido</h3>
              <div className="flex-grow flex flex-col justify-center items-center text-center space-y-8">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Prefere uma resposta mais rápida?
                  </p>
                  <p className="text-gray-600 mb-8">
                    Entre em contato pelo WhatsApp para atendimento imediato:
                  </p>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] text-white px-8 py-3 rounded-lg hover:bg-[#128C7E] transition-colors font-semibold flex items-center gap-3 text-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  Conversar pelo WhatsApp
                </button>
                <div className="mt-8">
                  <p className="text-gray-600">
                    Horário de atendimento:
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Segunda a Sexta, 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#009D82] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Studio Agronegócio. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {selectedService.icon}
                  <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="prose max-w-none mb-12">
                <p 
                  className="text-gray-600 whitespace-pre-line"
                  onClick={handleImageClick}
                  dangerouslySetInnerHTML={{ __html: selectedService.detailedDescription }}
                />
              </div>

              {/* Contact Form Section */}
              <div className="border-t pt-8">
                <h4 className="text-xl font-bold mb-6 text-center">Entre em contato com um especialista</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Email Form */}
                  <div>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        />
                      </div>
                       <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Celular
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E74C3C] focus:border-transparent"
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#E74C3C] text-white px-6 py-2 rounded-lg hover:bg-[#c0392b] transition-colors font-semibold flex items-center justify-center gap-2"
                      >
                        <Mail className="w-5 h-5" />
                        Enviar E-mail
                      </button>
                    </form>
                  </div>

                  {/* WhatsApp Section */}
                  <div className="flex flex-col items-center justify-center border-l pl-8">
                    <p className="text-gray-600 mb-6 text-center">
                      Prefere uma resposta mais rápida? Entre em contato pelo WhatsApp:
                    </p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] text-white px-6 py-2 rounded-lg hover:bg-[#128C7E] transition-colors font-semibold flex items-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Conversar pelo WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t p-4 bg-gray-50 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2 bg-[#E74C3C] text-white rounded-lg hover:bg-[#c0392b] transition-colors font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {imageModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-[90vw] w-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">{imageModal.title}</h3>
              <button 
                onClick={() => setImageModal({ ...imageModal, isOpen: false })}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <img 
                src={imageModal.imageUrl} 
                alt={imageModal.title}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ServiceCard({ service, onLearnMore }: { service: ServiceDetails; onLearnMore: () => void }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <button
        onClick={onLearnMore}
        className="bg-[#E74C3C] text-white px-6 py-2 rounded-lg hover:bg-[#c0392b] transition-colors font-semibold"
      >
        Saiba mais
      </button>
    </div>
  );
}

export default App;