import { NavbarItemProps } from "@/core/interfaces/navbar-item.interface";
import Link from "next/link";

export default function NavbarItem({ href, icon, label }: NavbarItemProps) {
  return (
    <div className="w-full rounded-2xl md:border-2 md:border-white/5 md:bg-[#0a0a0a] hover:bg-white/5 hover:backdrop-blur-2xl hover:scale-105 transition-transform duration-400">
      <Link className="px-2 py-6 flex items-center justify-center gap-2 md:px-6 md:py-4" href={ href }>
        <i className={`text-lg pi ${ icon }`} />
        <span className="hidden md:inline">{ label }</span>
      </Link>
    </div>
  );
}