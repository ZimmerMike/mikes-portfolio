import { AboutMe } from "@/lib/models/AboutMe";

export const aboutMe: AboutMe = {
  userId: '',
  summary: "Frontend Developer especializado en Angular con más de 4 años de experiencia construyendo aplicaciones empresariales escalables. Apasionado por la experiencia de usuario, la animación web y actualmente en transición hacia el desarrollo de videojuegos con Unreal Engine.",
  interests: ["Videojuegos", "Música rock y metal", "Desarrollo de software", "Tecnologías web", "Game Development"],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio-avanzado" }
  ],
  contact: {
    email: "miguel.dev@example.com",
    phone: "+52 55 1234 5678",
    meetingLink: "https://meet.google.com/fake-link"
  }
};