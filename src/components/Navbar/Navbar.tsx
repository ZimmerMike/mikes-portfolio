import NavbarItem from "../NavbarItem/NavbarItem";
import MobileMenu from "../MobileMenu/MobileMenu";

const navItems = [
  { href: '/', icon: 'pi-home', label: 'Inicio' },
  { href: '/projects', icon: 'pi-code', label: 'Proyectos' },
  { href: '/experience', icon: 'pi-briefcase', label: 'Experiencia' },
  { href: '/education', icon: 'pi-book', label: 'Educación' },
  { href: '/certifications', icon: 'pi-check-circle', label: 'Certificaciones' },
  { href: '/contact', icon: 'pi-envelope', label: 'Contacto' },
];

export default function Navbar() {
  return (
    <>
      {/* Desktop: sidebar */}
      <aside className="hidden lg:flex w-1/3 h-screen items-center justify-center text-white z-50">
        <div className="flex w-full max-w-md items-center lg:flex-col lg:gap-2 lg:w-[90%]">
          {navItems.map((item) => (
            <NavbarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label} />
          ))}
        </div>
      </aside>

      {/* Mobile: navbar bottom */}
      <nav className="lg:hidden flex w-screen bg-slate-900 text-white fixed bottom-0 left-0 z-50">
        <div className="flex w-full items-center overflow-x-scroll lg:flex-col lg:gap-2 lg:w-[90%]">
          <NavbarItem href="/" icon="pi-home" label="" />
          <NavbarItem href="/projects" icon="pi-code" label="" />
          <NavbarItem href="/contact" icon="pi-envelope" label="" />
          <MobileMenu />
        </div>
      </nav>
    </>
  );
}
