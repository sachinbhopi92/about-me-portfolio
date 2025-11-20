import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills", 
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.title": "Lead UI Developer",
      "hero.subtitle": "I bring 11+ years of experience building fast and reliable web applications with React JS, Redux, and modern frontend technologies.",
      "hero.getInTouch": "Get In Touch",
      "hero.downloadResume": "Download Resume",
      
      // About Section
      "about.title": "Professional Summary", 
      "about.summary": "I bring strong expertise in front-end engineering with a focus on React JS, JavaScript, and UI technologies. I have successfully developed, customized, and optimized modern web applications.",
      "about.description": "I am experienced in leveraging contemporary frameworks and tools while ensuring performance and security in complex enterprise environments. My background spans feature development using pure UI technologies, and AI-assisted workflows.",
      "about.yearsExperience": "Years Experience",
      "about.projectsCompleted": "Projects Completed",
      "about.leadership": "Leadership & Collaboration",
      
      // Skills Section
      "skills.title": "Core Competencies",
      "skills.subtitle": "Technical skills and tools I use to build amazing applications",
      "skills.showcase": "🚀 Click on React JS or Next.js below to see this portfolio built with those technologies in the same application!",
      "skills.frontend": "Frontend",
      "skills.uiTools": "UI Tools",
      "skills.architecture": "Architecture", 
      "skills.devops": "DevOps & Tools",
      "skills.aiPowered": "AI-Powered Development",
      
      // Experience Section
      "experience.title": "Professional Experience",
      
      // Projects Section
      "projects.title": "Featured Projects",
      
      // Contact Section
      "contact.title": "Let's Work Together",
      "contact.subtitle": "Ready to bring your next project to life? I'm always interested in discussing new opportunities.",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.linkedin": "LinkedIn",
      "contact.connectWithMe": "Connect with me",
      
      // Technology Experience
      "tech.reactExperience": "React.js Experience",
      "tech.nextjsExperience": "Next.js Experience",
      "tech.backToNextjs": "Back to Next.js",
      "tech.alreadyHere": "You're Already Here!",
      "tech.nextjsMessage": "This portfolio is built with Next.js. You're currently viewing the Next.js implementation.",
      "tech.continueWithNextjs": "Continue with Next.js",
      
      // Micro-Frontend
      "mfe.title": "True Micro-Frontend Architecture",
      "mfe.description": "Experience the same portfolio content built with different frameworks running seamlessly in one application! Visit the skills page and click on React.js or Next.js to see micro-frontend architecture in action.",
      "mfe.tryDemo": "Try Interactive Skills Demo",
      
      // Package Showcase
      "packages.title": "Technology Stack & Packages",
      "packages.subtitle": "Modern tools and libraries powering this application",
      "packages.frontend": "Frontend Frameworks",
      "packages.stateManagement": "State Management", 
      "packages.styling": "Styling & UI",
      "packages.buildTools": "Build Tools",
      "packages.testing": "Testing",
      "packages.internationalization": "Internationalization",
      "packages.deployment": "Deployment & DevOps"
    }
  },
  hi: {
    translation: {
      // Navigation
      "nav.home": "होम",
      "nav.about": "परिचय",
      "nav.skills": "कौशल",
      "nav.experience": "अनुभव", 
      "nav.projects": "प्रोजेक्ट्स",
      "nav.contact": "संपर्क",
      
      // Hero Section
      "hero.title": "सीनियर सॉफ्टवेयर डेवलपमेंट इंजीनियर",
      "hero.subtitle": "मेरे पास React JS, Redux और आधुनिक फ्रंटएंड तकनीकों के साथ तेज़ और विश्वसनीय वेब एप्लिकेशन बनाने में 11+ साल का अनुभव है।",
      "hero.getInTouch": "संपर्क करें",
      "hero.downloadResume": "रिज्यूमे डाउनलोड करें",
      
      // About Section
      "about.title": "व्यावसायिक सारांश",
      "about.summary": "तेज़ और विश्वसनीय वेब एप्लिकेशन बनाने में 11+ साल के अनुभव वाले सीनियर फ्रंट-एंड डेवलपर। React JS, Redux और माइक्रो-फ्रंटएंड डिज़ाइन में कुशल।",
      "about.description": "मैं साफ, बनाए रखने में आसान कोड लिखने और आधुनिक यूजर इंटरफेस बनाने पर ध्यान देता हूं। मैंने टीमों का नेतृत्व किया है, जूनियर डेवलपर्स की मदद की है, और Agile प्रोजेक्ट्स में दूसरों के साथ मिलकर काम किया है।",
      "about.yearsExperience": "साल का अनुभव",
      "about.projectsCompleted": "पूर्ण प्रोजेक्ट्स",
      "about.leadership": "नेतृत्व और सहयोग",
      
      // Skills Section
      "skills.title": "मुख्य दक्षताएं",
      "skills.subtitle": "तकनीकी कौशल और उपकरण जिनका उपयोग मैं अद्भुत एप्लिकेशन बनाने के लिए करता हूं",
      "skills.showcase": "🚀 इस पोर्टफोलियो को उन तकनीकों के साथ बनाया गया देखने के लिए नीचे React JS या Next.js पर क्लिक करें!",
      "skills.frontend": "फ्रंटएंड",
      "skills.uiTools": "UI उपकरण",
      "skills.architecture": "आर्किटेक्चर",
      "skills.devops": "DevOps और उपकरण", 
      "skills.aiPowered": "AI-संचालित विकास",
      
      // Experience Section
      "experience.title": "व्यावसायिक अनुभव",
      
      // Projects Section
      "projects.title": "विशेष प्रोजेक्ट्स",
      
      // Contact Section
      "contact.title": "आइए मिलकर काम करें",
      "contact.subtitle": "अपने अगले प्रोजेक्ट को जीवंत बनाने के लिए तैयार हैं? मैं हमेशा नए अवसरों पर चर्चा करने में रुचि रखता हूं।",
      "contact.email": "ईमेल",
      "contact.phone": "फोन",
      "contact.linkedin": "LinkedIn",
      "contact.connectWithMe": "मुझसे जुड़ें",
      
      // Technology Experience
      "tech.reactExperience": "React.js अनुभव",
      "tech.nextjsExperience": "Next.js अनुभव", 
      "tech.backToNextjs": "Next.js पर वापस जाएं",
      "tech.alreadyHere": "आप पहले से यहां हैं!",
      "tech.nextjsMessage": "यह पोर्टफोलियो Next.js के साथ बनाया गया है। आप वर्तमान में Next.js implementation देख रहे हैं।",
      "tech.continueWithNextjs": "Next.js के साथ जारी रखें",
      
      // Micro-Frontend
      "mfe.title": "सच्चा माइक्रो-फ्रंटएंड आर्किटेक्चर",
      "mfe.description": "एक ही एप्लिकेशन में विभिन्न फ्रेमवर्क के साथ बनाए गए समान पोर्टफोलियो कंटेंट का अनुभव करें! माइक्रो-फ्रंटएंड आर्किटेक्चर को देखने के लिए स्किल्स पेज पर जाएं और React.js या Next.js पर क्लिक करें।",
      "mfe.tryDemo": "इंटरैक्टिव स्किल्स डेमो आज़माएं",
      
      // Package Showcase
      "packages.title": "तकनीकी स्टैक और पैकेज",
      "packages.subtitle": "इस एप्लिकेशन को संचालित करने वाले आधुनिक उपकरण और लाइब्रेरी",
      "packages.frontend": "फ्रंटएंड फ्रेमवर्क",
      "packages.stateManagement": "स्टेट मैनेजमेंट",
      "packages.styling": "स्टाइलिंग और UI",
      "packages.buildTools": "बिल्ड टूल्स",
      "packages.testing": "टेस्टिंग",
      "packages.internationalization": "अंतर्राष्ट्रीयकरण",
      "packages.deployment": "डिप्लॉयमेंट और DevOps"
    }
  },
  es: {
    translation: {
      // Navigation
      "nav.home": "Inicio",
      "nav.about": "Acerca de",
      "nav.skills": "Habilidades",
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos", 
      "nav.contact": "Contacto",
      
      // Hero Section
      "hero.title": "Ingeniero Senior de Desarrollo de Software", 
      "hero.subtitle": "Tengo 11+ años de experiencia construyendo aplicaciones web rápidas y confiables con React JS, Redux y tecnologías frontend modernas.",
      "hero.getInTouch": "Ponte en Contacto",
      "hero.downloadResume": "Descargar CV",
      
      // About Section
      "about.title": "Resumen Profesional",
      "about.summary": "Desarrollador Front-End Senior con 11+ años de experiencia construyendo aplicaciones web rápidas y confiables. Especializado en React JS, Redux y diseño de micro-frontend.",
      "about.description": "Me enfoco en escribir código limpio y fácil de mantener, y crear interfaces de usuario modernas. He liderado equipos, ayudado a desarrolladores junior y trabajado estrechamente con otros en proyectos Agile.",
      "about.yearsExperience": "Años de Experiencia",
      "about.projectsCompleted": "Proyectos Completados",
      "about.leadership": "Liderazgo y Colaboración",
      
      // Skills Section
      "skills.title": "Competencias Principales",
      "skills.subtitle": "Habilidades técnicas y herramientas que uso para construir aplicaciones increíbles",
      "skills.showcase": "🚀 ¡Haz clic en React JS o Next.js abajo para ver este portafolio construido con esas tecnologías en la misma aplicación!",
      "skills.frontend": "Frontend",
      "skills.uiTools": "Herramientas UI",
      "skills.architecture": "Arquitectura",
      "skills.devops": "DevOps y Herramientas",
      "skills.aiPowered": "Desarrollo Potenciado por IA",
      
      // Experience Section
      "experience.title": "Experiencia Profesional",
      
      // Projects Section
      "projects.title": "Proyectos Destacados",
      
      // Contact Section
      "contact.title": "Trabajemos Juntos",
      "contact.subtitle": "¿Listo para dar vida a tu próximo proyecto? Siempre estoy interesado en discutir nuevas oportunidades.",
      "contact.email": "Email",
      "contact.phone": "Teléfono", 
      "contact.linkedin": "LinkedIn",
      "contact.connectWithMe": "Conéctate conmigo",
      
      // Technology Experience
      "tech.reactExperience": "Experiencia React.js",
      "tech.nextjsExperience": "Experiencia Next.js",
      "tech.backToNextjs": "Volver a Next.js",
      "tech.alreadyHere": "¡Ya estás aquí!",
      "tech.nextjsMessage": "Este portafolio está construido con Next.js. Actualmente estás viendo la implementación de Next.js.",
      "tech.continueWithNextjs": "Continuar con Next.js",
      
      // Micro-Frontend
      "mfe.title": "Arquitectura Micro-Frontend Verdadera",
      "mfe.description": "¡Experimenta el mismo contenido del portafolio construido con diferentes frameworks ejecutándose sin problemas en una aplicación! Visita la página de habilidades y haz clic en React.js o Next.js para ver la arquitectura micro-frontend en acción.",
      "mfe.tryDemo": "Probar Demo Interactivo de Habilidades",
      
      // Package Showcase
      "packages.title": "Stack Tecnológico y Paquetes",
      "packages.subtitle": "Herramientas y librerías modernas que impulsan esta aplicación",
      "packages.frontend": "Frameworks Frontend",
      "packages.stateManagement": "Gestión de Estado",
      "packages.styling": "Estilos y UI",
      "packages.buildTools": "Herramientas de Construcción",
      "packages.testing": "Testing",
      "packages.internationalization": "Internacionalización",
      "packages.deployment": "Despliegue y DevOps"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
