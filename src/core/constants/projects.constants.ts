import { Project } from "@/lib/models/Project";

export const projects: Project[] = [
  {
    UserId: '',
    Title: "Portafolio Profesional",
    Description: "Sitio web profesional creado con Next.js y Tailwind CSS, enfocado en reflejar mi experiencia como Front-End Developer.\nIncluye prácticas de UX/UI y animaciones avanzadas.\nEl propósito es presentar mis principales proyectos, experiencia laboral y proceso de aprendizaje, integrando tecnologías y conceptos en un proyecto en constante evolución.\nEste sitio está diseñado para incorporar nuevas funcionalidades de forma continua, funcionando como un entorno de práctica para explorar herramientas y tecnologías emergentes.",
    RepoUrl: "https://github.com/ZimmerMike/mikes-portfolio",
    LiveUrl: "https://mike-hernandez.dev",
    Skills: [
      { UserId: '', Name: "Next.js", ExperienceYears: 1 },
      { UserId: '', Name: "Tailwind CSS", ExperienceYears: 1 },
      { UserId: '', Name: "TypeScript", ExperienceYears: 4 },
      { UserId: '', Name: "JavaScript", ExperienceYears: 4 },
      { UserId: '', Name: "DOM", ExperienceYears: 4 },
      { UserId: '', Name: "CSS", ExperienceYears: 4 }
    ]
  },
  {
    UserId: '',
    Title: "Prueba técnica: Better Cloud",
    Description: "Prueba técnica realizada como parte de un proceso de selección para una vacante en Better Cloud.\nAunque finalmente optaron por otros candidatos debido a la diferencia en años de experiencia, el feedback que recibí fue muy positivo, reconociendo el potencial que tenía a pesar de no contar aún con el nivel de seniority que he desarrollado desde entonces.\nEsta práctica marcó mi primera experiencia utilizando Next.js, con el objetivo de familiarizarme con el entorno de React e integrar la librería Material UI.\nAdemás, integré un servicio de envío de correos electrónicos para notificar a cada participante, una funcionalidad que ningún otro candidato consideró y que fue especialmente destacada en la retroalimentación.",
    RepoUrl: "https://github.com/ZimmerMike/secret-santa",
    LiveUrl: "https://secret-santa-rosy.vercel.app",
    Skills: [
      { UserId: '', Name: "Next.js", ExperienceYears: 1 },
      { UserId: '', Name: "Material UI", ExperienceYears: 1 },
      { UserId: '', Name: "Node Mail", ExperienceYears: 1 }
    ]
  },
  {
    UserId: '',
    Title: "Prueba técnica: GG Tech",
    Description: "Prueba técnica desarrollada para GG Tech como parte de un proceso de selección para un puesto de desarrollador back-end.\nEl reto consistía en crear un catálogo estilo Netflix con funcionalidades específicas de un CRUD, acompañado de documentación publicada mediante una colección de Postman.\nAunque finalmente eligieron a otros candidatos debido a la diferencia en años de experiencia y a que buscaban un perfil más especializado en back-end, mientras que en ese momento mi enfoque profesional era más hacia un perfil full-stack, esta prueba me sirvió para mejorar mis prácticas en el desarrollo de servicios back-end y el uso de Express.js.",
    RepoUrl: "https://github.com/ZimmerMike/ggtech-test",
    LiveUrl: "https://documenter.getpostman.com/view/27020397/2s9Y5TzjoV",
    Skills: [
      { UserId: '', Name: "Node.js", ExperienceYears: 4 },
      { UserId: '', Name: "Express.js", ExperienceYears: 4 },
      { UserId: '', Name: "MongoDB", ExperienceYears: 3 },
      { UserId: '', Name: "REST API", ExperienceYears: 3 },
      { UserId: '', Name: "Desarrollo Back-End", ExperienceYears: 3 },
      { UserId: '', Name: "Arquitectura Hexagonal", ExperienceYears: 2 }
    ]
  },
  {
    UserId: '',
    Title: "Práctica: CRUD de bases de datos",
    Description: "Proyecto realizado durante los primeros semestres de mi carrera en Ingeniería en Sistemas Computacionales, como parte de la asignatura Fundamentos de Bases de Datos.\nAunque no se trata de un desarrollo complejo, me permitió comprender de manera más clara el funcionamiento de las bases de datos relacionales y cómo interactuar con ellas desde una aplicación desarrollada en Java.",
    RepoUrl: "https://github.com/ZimmerMike/database-manager",
    Skills: [
      { UserId: '', Name: "Java", ExperienceYears: 0 },
      { UserId: '', Name: "SQL Server", ExperienceYears: 1 }
    ]
  }
];
