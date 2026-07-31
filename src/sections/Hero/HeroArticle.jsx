import { Whatsapp } from "@/assets";
import { Body, Caption, H2 } from "@/components";
import { ShieldCheck, Star } from "lucide-react";

export default function HeroArticle () {
    return (
        <div className="md:max-w-1/2 stacked xs:max-md:items-center space-y-8">
                <H2 className="text-fluid-2xl text-primary xs:max-md:text-center">
                    Hecho de Madera de Alta Resistencia para tu Hogar.
                </H2>
                <Body className="flex flex-col xs:max-md:text-center">
                    <Caption className="text-fluid">Diseñadas en <strong className="font-semibold text-primary">Chihuahua</strong></Caption>
                    <Caption className="text-fluid">
                        Soportan hasta 15 kg con herrajes ocultos.
                    </Caption>
                    <Caption className="text-fluid">
                        Acabado premium texturizado tipo madera.
                    </Caption>
                </Body>
                <button type="button" className="text-whitesmoke/87  normal-space rounded-lg flex items-center bg-primary w-full max-w-60 cursor-pointer space-x-2">
                    <Whatsapp />
                    <Caption className="">Ordenar por Whatsapp</Caption>
                </button>
                <ul className="flex space-x-10 items-center">
                    <li className="grid grid-cols-[3.5rem_1fr] gap-x-2 grid-rows-2 items-center ">
                        <ShieldCheck size={40} strokeWidth={1} className="row-span-2" />
                        <Caption className="">Material Certificado</Caption>
                        <Caption className="">Libre de toxinas</Caption>
                    </li>
                    <li className="grid grid-cols-[3.5rem_1fr] gap-x-2 grid-rows-2 items-center ">
                        <Star size={40} strokeWidth={1} className="row-span-2" />
                        <Caption className="">Material Certificado</Caption>
                        <Caption className="">Libre de toxinas</Caption>
                    </li>
                </ul>
            </div>
    );
}