import { Body, Caption, H2 } from "@/components";
import { ShieldCheck, Star } from "lucide-react";

export default function HeroArticle () {
    return (
        <div className="md:max-w-1/2 mt-20 md:mt-0 stacked xs:max-md:items-center space-y-12 md:justify-center ">
                <H2 className="text-2xl md:text-5xl md:text-balance text-primary xs:max-md:text-center md:font-bold">
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
                
                <ul className="flex space-x-10 items-center ">
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