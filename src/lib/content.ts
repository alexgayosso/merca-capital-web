import { ContentStructure, TeamMember } from './types';

// ============================================
// DICCIONARIO BILINGÜE PRINCIPAL
// ============================================

export const content: Record<'es' | 'en', ContentStructure> = {
  es: {
    hero: {
      tagline: 'PRIVATE EQUITY · INFRASTRUCTURE · LATAM',
      headline1: 'El Blackstone de la',
      headline2: 'Infraestructura',
      headline3: 'Agro-Alimentaria',
      subtitle: 'El activo real no son los metros cuadrados',
      description: 'Es el control del punto estratégico donde México come',
      cta: 'Conocer el Fidux →',
      ctaSecondary: 'Ver escenarios',
      pillars: {
        title: 'Pilares estratégicos',
        items: [
          { name: 'Nodos estratégicos: Norte · Bajío · Centro · Sur', description: 'Infraestructura crítica en los 4 corredores de mayor flujo comercial de México' },
          { name: 'Infraestructura crítica', description: 'Mercados · Abasto · Distribución' },
          { name: 'Flujos anticíclicos', description: 'Demanda inelástica · Cap Rates 8-10%' },
          { name: 'Control operativo', description: 'Originación · Operación · Exit' },
          { name: 'Expansión nacional', description: 'Sur · Centro · Occidente · Noreste' }
        ]
      }
    },
    stats: {
      title: 'Track record institucional',
      description: 'Cerca de 20 años desarrollando infraestructura comercial de abasto en México, con más de 300 comerciantes y 52,000 m² desarrollados.',
      items: [
        { value: '52,000', label: 'm² desarrollados', highlight: true },
        { value: '300+', label: 'Comerciantes activos', highlight: true },
        { value: '20', label: 'Años de experiencia', highlight: false },
        { value: '70%', label: 'Más ventas vs mercado', highlight: false },
        { value: '40%', label: 'Precios más bajos', highlight: false }
      ]
    },
    insight: {
      title: 'EL INSIGHT QUE NADIE VE',
      content: 'México tiene 329 centrales de abasto que mueven',
      highlight: '~$80bn USD anuales',
      subtext: 'en alimentos, estando el 78% de ellas operando en infraestructuras obsoletas (pre-2000).',
      closing: 'Nadie los ha consolidado. Nadie los ha digitalizado. Nadie los ha financiado.',
      stats: [
        { value: '329', label: 'Centrales de Abasto' },
        { value: '$80bn', label: 'USD Flow Anual' },
        { value: '78%', label: 'Infraestructura Obsoleta' }
      ]
    },
    contact: {
      title: 'Investor Relations',
      subtitle: 'Iniciemos la conversación',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Firma / Family Office',
        message: 'Mensaje',
        submit: 'Enviar',
        success: '¡Enviado!',
        error: 'Error. Intenta de nuevo.',
        formTitle: 'CUÉNTENOS SU PROYECTO',
        successTitle: 'Mensaje enviado con éxito',
        successMessage: 'Un socio de Merca Capital revisará su mensaje personalmente y le responderá en menos de 48 horas hábiles.',
        sendAnother: 'ENVIAR OTRO MENSAJE'
      },
      info: {
        phone: '+52 812 004 8610',
        email: 'hola@mercacapital.com',
        locations: 'Madrid · Monterrey · CDMX'
      }
    },
    footer: {
      tagline: 'Private Equity Infrastructure',
      rights: '© 2026 Merca Capital SAPI de CV. Todos los derechos reservados.',
      privacy: 'Aviso Legal'
    }
  },
  en: {
    hero: {
      tagline: 'PRIVATE EQUITY · INFRASTRUCTURE · LATAM',
      headline1: 'The Blackstone of',
      headline2: 'Agri-Food',
      headline3: 'Infrastructure',
      subtitle: 'The real asset isn\'t the square meters',
      description: 'It\'s control of the strategic point where Mexico eats',
      cta: 'Learn about Fidux →',
      ctaSecondary: 'View scenarios',
      pillars: {
        title: 'Strategic pillars',
        items: [
          { name: 'Strategic nodes: North · Bajío · Center · South', description: 'Critical infrastructure across Mexico\'s 4 highest commercial flow corridors' },
          { name: 'Critical infrastructure', description: 'Markets · Wholesale · Distribution' },
          { name: 'Anti-cyclical cash flows', description: 'Inelastic demand · Cap Rates 8-10%' },
          { name: 'Operational control', description: 'Origination · Operations · Exit' },
          { name: 'National expansion', description: 'South · Center · West · Northeast' }
        ]
      }
    },
    stats: {
      title: 'Institutional track record',
      description: 'Nearly 20 years developing commercial wholesale infrastructure in Mexico, with over 300 merchants and 52,000 sqm developed.',
      items: [
        { value: '52,000', label: 'sqm developed', highlight: true },
        { value: '300+', label: 'Active merchants', highlight: true },
        { value: '20', label: 'Years of experience', highlight: false },
        { value: '70%', label: 'More sales vs market', highlight: false },
        { value: '40%', label: 'Lower prices', highlight: false }
      ]
    },
    insight: {
      title: 'THE INSIGHT NO ONE SEES',
      content: 'Mexico has 329 wholesale food markets moving',
      highlight: '~$80bn USD annually',
      subtext: 'in food, with 78% of them operating on obsolete infrastructure (pre-2000).',
      closing: 'No one has consolidated them. No one has digitized them. No one has financed them.',
      stats: [
        { value: '329', label: 'Wholesale Markets' },
        { value: '$80bn', label: 'Annual USD Flow' },
        { value: '78%', label: 'Obsolete Infrastructure' }
      ]
    },
    contact: {
      title: 'Investor Relations',
      subtitle: 'Let\'s start the conversation',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Firm / Family Office',
        message: 'Message',
        submit: 'Send',
        success: 'Sent!',
        error: 'Error. Please try again.',
        formTitle: 'TELL US ABOUT YOUR PROJECT',
        successTitle: 'Message sent successfully',
        successMessage: 'A Merca Capital partner will personally review your message and respond within 48 business hours.',
        sendAnother: 'SEND ANOTHER MESSAGE'
      },
      info: {
        phone: '+52 812 004 8610',
        email: 'hola@mercacapital.com',
        locations: 'Madrid · Torreón · CDMX'
      }
    },
    footer: {
      tagline: 'Private Equity Infrastructure',
      rights: '© 2026 Merca Capital SAPI de CV. All rights reserved.',
      privacy: 'Legal Notice'
    }
  }
};

// ============================================
// EQUIPO
// ============================================

export const TEAM_DATA: Record<'es' | 'en', TeamMember[]> = {
  es: [
    { initials: 'AG', name: 'Alejandro Gayosso Mar', title: 'CEO', bio: 'Fundador de Mercahorro. Más de 20 años desarrollando infraestructura comercial mayorista. Especialista en cadena de suministro agroalimentaria y estructuración de capital privado en el norte de México.', credentials: ['Ing. Sistemas — Tec de Monterrey', 'MBA — IE Business School, Madrid'], roles: [], color: '#C08A3E' },
    { initials: 'JS', name: 'José Sánchez', title: 'CFO', bio: 'Arquitecto del modelo financiero del vehículo. Especialista en mercados financieros e inversión inmobiliaria. Más de 20 años de experiencia internacional en mercados de capitales, estructuración y administración de patrimonios HNWI en Latam.', credentials: ['Economista — Universidad Complutense de Madrid', 'Banca Corporativa Internacional', 'Estructuración de Capital Privado'], roles: [], color: '#7C8E76' },
    { initials: 'JG', name: 'José M. González O.', title: 'CLO', bio: 'Especialista en fideicomisos de administración y empresariales, con énfasis en los patrimoniales y de desarrollo inmobiliario. Arquitecto jurídico de la estructura fiduciaria y responsable del cumplimiento regulatorio.', credentials: ['Lic. en Derecho — UANL', 'Maestría en Derecho de la Empresa — UDEM'], roles: [], color: '#8A7A5A' },
  ],
  en: [
    { initials: 'AG', name: 'Alejandro Gayosso Mar', title: 'CEO', bio: 'Founder of Mercahorro. 20+ years building wholesale commercial infrastructure. Specialist in agri-food supply chains and private capital structuring across northern Mexico.', credentials: ['Systems Eng. — Tec de Monterrey', 'MBA — IE Business School, Madrid'], roles: [], color: '#C08A3E' },
    { initials: 'JS', name: 'José Sánchez', title: 'CFO', bio: "Architect of the vehicle's financial model. Specialist in financial markets and real estate investment. 20+ years of international experience in capital markets, structuring, and HNWI wealth management across Latam.", credentials: ['Economics — Universidad Complutense de Madrid', 'International Corporate Banking', 'International Financial Structuring'], roles: [], color: '#7C8E76' },
    { initials: 'JG', name: 'José M. González O.', title: 'CLO', bio: 'Specialist in administrative and corporate trusts, with emphasis on estate planning and real estate development structures. Legal architect of the trust structure and responsible for regulatory compliance.', credentials: ['Law Degree — UANL', 'Master in Business Law — UDEM'], roles: [], color: '#8A7A5A' },
  ],
};

export const TEAM_LABELS = {
  es: { label: 'Equipo Directivo', title: 'El equipo detrás del capital', subtitle: '45+ años de experiencia combinada en infraestructura y capital privado', badge: 'Afiliación Institucional', badgeText: 'Miembros activos de MERCAMÉXICO — Asociación Mexicana de Mercados y Centrales de Abasto, organismo que representa a las 329 Centrales de Abasto del país', expand: 'Ver perfil', collapse: 'Cerrar', formation: 'Formación', roles: 'Roles' },
  en: { label: 'Leadership Team', title: 'The team behind the capital', subtitle: '45+ years of combined experience in infrastructure and private capital', badge: 'Institutional Affiliation', badgeText: 'Active members of MERCAMÉXICO — Mexican Association of Markets and Wholesale Food Centers, the organization representing all 329 Wholesale Markets in the country', expand: 'View profile', collapse: 'Close', formation: 'Education', roles: 'Roles' },
};

// ============================================
// MOAT / VENTAJA COMPETITIVA
// ============================================

export const MOAT_CONTENT = {
  es: {
    label: 'Ventaja Competitiva',
    title: 'Por qué nadie más puede hacer esto',
    subtitle: 'El moat de Merca Capital no es el capital — es el acceso, la confianza y el know-how acumulado en 20 años de operación directa en mercados mayoristas.',
    items: [
      { icon: 'landmark', sub: 'VP — MERCAMÉXICO', title: 'Posición Gremial Única', desc: 'Acceso institucional a las 329 Centrales de Abasto de México a través de la principal asociación del sector.', desc2: 'Deal flow que ningún vehículo externo puede originar o comprar.', metric: '329 centrales · 1 acceso exclusivo' },
      { icon: 'network', sub: '20 años de relaciones comerciales', title: 'Red de 300+ Operadores', desc: 'Una red de comerciantes mayoristas construida operación por operación durante 20 años.', desc2: 'No se puede comprar. No se puede replicar. Se gana con tiempo y confianza.', metric: '300+ relaciones comerciales activas' },
      { icon: 'chart', sub: 'Datos propietarios', title: 'Inteligencia Operativa', desc: 'Datos de ocupación, NOI y comportamiento comercial de 20 años de operación directa.', desc2: 'El input más valioso para el underwriting de nuevos activos.', metric: '20 años de datos operativos propietarios' },
      { icon: 'globe', sub: 'Data & Connectivity Advantage', title: 'Capa Tecnológica Propietaria', desc: 'La red Mercahorro sirve como base para una capa tecnológica que ningún otro vehículo de capital privado puede replicar:', desc2: 'Edge Data Centers, procesamiento financiero a nivel nodo y monetización de datos de la cadena de suministro alimentaria.', metric: '100 nodos · 1 red de datos propietaria' },
    ],
    quote: '"No somos un vehículo que encontró un activo. Somos el activo que se convirtió en vehículo."',
    quoteBy: '— Alejandro Gayosso Mar, Fundador',
  },
  en: {
    label: 'Competitive Advantage',
    title: 'Why no one else can do this',
    subtitle: 'Merca Capital\'s moat is not capital — it\'s access, trust, and know-how accumulated over 20 years of direct operations in wholesale markets.',
    items: [
      { icon: 'landmark', sub: 'VP — MERCAMÉXICO', title: 'Unique Guild Position', desc: 'Institutional access to Mexico\'s 329 Wholesale Food Markets through the sector\'s top association.', desc2: 'Deal flow no external fund can originate or buy.', metric: '329 markets · 1 exclusive access' },
      { icon: 'network', sub: '20 years of commercial relationships', title: 'Network of 300+ Operators', desc: 'A network of wholesale merchants built operation by operation over 20 years.', desc2: 'Cannot be bought. Cannot be replicated. Earned with time and trust.', metric: '300+ active commercial relationships' },
      { icon: 'chart', sub: 'Proprietary data', title: 'Operational Intelligence', desc: 'Occupancy, NOI, and commercial behavior data from 20 years of direct operations.', desc2: 'The most valuable input for underwriting new assets.', metric: '20 years of proprietary operational data' },
      { icon: 'globe', sub: 'Data & Connectivity Advantage', title: 'Proprietary Technology Layer', desc: 'The Mercahorro network serves as the foundation for a technology layer no other private equity vehicle can replicate:', desc2: 'Edge Data Centers, node-level financial processing, and food supply chain data monetization.', metric: '100 nodes · 1 proprietary data network' },
    ],
    quote: '"We are not a vehicle that found an asset. We are the asset that became a vehicle."',
    quoteBy: '— Alejandro Gayosso Mar, Founder',
  },
};
