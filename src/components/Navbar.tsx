import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-slate-900 text-white relative top-0 left-0 z-50">
      <ul className="flex gap-6">
        <li><Link className="px-6 py-4" href="/">Inicio</Link></li>
        <li><Link className="px-6 py-4" href="/about">Sobre mí</Link></li>
        <li><Link className="px-6 py-4" href="/projects">Proyectos</Link></li>
        <li><Link className="px-6 py-4" href="/experience">Experiencia</Link></li>
        <li><Link className="px-6 py-4" href="/education">Educacion</Link></li>
        <li><Link className="px-6 py-4" href="/certifications">Cursos y Certificaciones</Link></li>
        <li><Link className="px-6 py-4" href="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}