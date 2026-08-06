import { Whatsapp } from "@/assets";
import { Body, Image } from "@/components";

// Vite's dynamic URL import - works in both dev and production builds
const footerBg = new URL("/src/assets/idea/footer_background.png", import.meta.url).href;

const phone = "526143138724";
const message = "Hola, me interesa saber mas sobre las repisas en venta";
const whatsappUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;


export default function Footer() {
  return (
    <main className="max-w-full grow-0 centered border-t relative h-[30dvh] overflow-hidden p-4">
      <Image
        contain
        src={footerBg}
        className="w-full absolute -right-6 -bottom-6"
      />
      <a
        href={whatsappUrl}
        className="z-10 absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 cursor-pointer p-4 grid grid-cols-[3rem_15rem] text-whitesmoke grid-rows-2 gap-x-4 px-6 py-4 rounded-lg items-center w-80 grow-0 h-20"
      >
        <Whatsapp size={50} className="text-whitesmoke row-span-2" />
        <Body className="text-fluid-lg">Ordenar por Whatsapp</Body>
        <Body className="text-background">Respuesta rapida y atencion</Body>
      </a>
    </main>
  );
}