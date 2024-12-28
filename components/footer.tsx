import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="flex justify-between mb-5 font-medium text-xs">
         <p>© {new Date().getFullYear()}. Todos los derechos reservados</p>
         <div className="flex gap-x-8">
            <Link href="/#about">Sobre mí</Link>
            <Link href="mailto:garciachaveroadrian@gmail.com">Contacto</Link>
         </div>
      </footer>
   );
}
