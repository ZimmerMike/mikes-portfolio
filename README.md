# Portafolio Profesional - Next.js + MongoDB

Este es un portafolio profesional desarrollado con **Next.js 14**, utilizando las capacidades fullstack del framework (frontend y backend integrados), **Tailwind CSS** para estilos y una base de datos **MongoDB** para gestionar contenido dinámico. El proyecto se complementa con una herramienta de escritorio en **C#** para editar fácilmente los datos desde una interfaz local.

## 🚀 Características

- Frontend y backend en un solo proyecto Next.js
- Secciones dinámicas: Sobre mí, Proyectos, Experiencia, Educación, Certificaciones y Contacto
- Sistema de mensajes desde el formulario de contacto
- Uso de MongoDB como base de datos principal
- Estilos modernos con Tailwind CSS
- Arquitectura escalable y organizada
- Integración futura con una app de escritorio (C#) para gestión del contenido

## 📁 Estructura del proyecto

```
/
├── app/               # App Router de Next.js
├── api/               # Endpoints de API para datos dinámicos
├── components/        # Componentes reutilizables
├── lib/
│   └── mongodb.ts     # Conexión a MongoDB
├── public/
├── styles/
├── utils/
├── .env.local         # Variables de entorno (no incluidas en Git)
└── README.md
```

## ⚙️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura tus variables de entorno en `.env.local`:
```env
MONGODB_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/portfolio
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 💡 Roadmap

- [x] Secciones dinámicas
- [x] Backend integrado en Next.js
- [x] Conexión con MongoDB
- [x] Formulario de contacto con almacenamiento de mensajes
- [ ] Herramienta de escritorio en C# para CRUD
- [ ] Panel de administración web
- [ ] Modo oscuro
- [ ] Versión multilenguaje (ES/EN)

## 🛠️ Tecnologías utilizadas

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 🤝 Contribuciones

¡Contribuciones, sugerencias y mejoras son bienvenidas! Abre un *issue* o haz un *pull request* para comenzar.

## 📬 Contacto

Si deseas contactarme, puedes hacerlo desde el formulario del portafolio o directamente:

- Correo: [tucorreo@ejemplo.com](mailto:tucorreo@ejemplo.com)
- LinkedIn: [linkedin.com/in/tuusuario](https://linkedin.com/in/tuusuario)
- Agenda una reunión: [cal.com/tuusuario](https://cal.com/tuusuario)

---

**Hecho con 💻 por Mike Sagi**