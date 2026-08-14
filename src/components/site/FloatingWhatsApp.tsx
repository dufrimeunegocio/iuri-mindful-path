import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Iuri Dall’Olmo pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg outline-none transition-transform duration-300 hover:scale-110 focus-visible:ring-4 focus-visible:ring-[#25D366]/40 md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
