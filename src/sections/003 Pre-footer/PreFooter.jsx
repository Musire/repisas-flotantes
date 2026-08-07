import { Whatsapp } from "@/assets";
import { Body, Section } from "@/components";
import { Ruler } from "lucide-react";

const phone = "526143138724";
const message = "Hola, me interesa saber mas sobre las repisas en venta";
const whatsappUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`;


export default function PreFooter () {
    return (
        <Section className="stacked items-center">
            <h3 className="text-center text-fluid-2xl">necesitas ayuda</h3>
            <ul className="flex flex-col items-center space-y-6 md:flex-row">
                <li className="">
                    <article 
                        className="w-[30dvw] stacked space-y-2 items-center text-center text-pretty"
                    >
                        <Ruler />
                        <h4 className="">Ala medida</h4>
                        <span className="">Podemos personalizar las dimensiones </span>
                    </article>
                </li>
                <li className="">
                    <article 
                        className="w-[30dvw] stacked space-y-2 items-center text-center text-pretty"
                    >
                        <Ruler />
                        <h4 className="">Ala medida</h4>
                        <span className="">Podemos personalizar las dimensiones </span>
                    </article>
                </li>
                <li className="">
                    <article 
                        className="w-[30dvw] stacked space-y-2 items-center text-center text-pretty"
                    >
                        <Ruler />
                        <h4 className="">Ala medida</h4>
                        <span className="">Podemos personalizar las dimensiones </span>
                    </article>
                </li>
            </ul>
            <a
                href={whatsappUrl}
                className="z-10 bg-primary/90 cursor-pointer p-4 grid grid-cols-[3rem_15rem] text-whitesmoke grid-rows-2 gap-x-4 px-6 py-4 rounded-lg items-center min-w-fit grow-0 h-20"
            >
                <Whatsapp size={50} className="text-whitesmoke row-span-2" />
                <Body className="text-fluid-lg">Ordenar por Whatsapp</Body>
                <Body className="text-background">Respuesta rapida y atencion</Body>
            </a>
        </Section>
    );
}