// components/MobileMenu.tsx
'use client';

import { useState } from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir menú */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden flex items-center justify-center w-full py-2">
        <i className="pi pi-bars text-xl" />
      </button>

      {/* Menú lateral flotante */}
      <div className={`fixed inset-0 z-50 flex justify-end md:hidden transition-all duration-300 ${menuOpen ? 'bg-black/70 visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className={`bg-slate-900 px-6 py-2 w-1/4 sm:w-1/2 md:w-1/4 shadow-lg absolute bottom-0 rounded-t-2xl transition-transform duration-500 ${menuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <ul className="flex flex-col gap-4">
            <NavbarItem href="/experience" icon="pi-briefcase" label="Experiencia" />
            <NavbarItem href="/education" icon="pi-book" label="Educación" />
            <NavbarItem href="/certifications" icon="pi-check-circle" label="Certificaciones" />
          </ul>

          <div className="flex justify-center items-center px-6 py-2 mt-4">
            <button onClick={() => setMenuOpen(false)}>
              <i className="pi pi-times text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}