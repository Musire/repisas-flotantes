import { Body, Caption, H3, Link, Section } from "@/components";
import { getBySlug } from "@/data";
import { ChevronRight } from "lucide-react";
import { CategoryCard } from ".";

const slugList = ['cocina-deluxe', 'recamara-basica', 'oficina-basica', 'cocina-basica',
    'pasillo-premium', 'baño-completo', 'baño-basica', 'sala-galeria' ]

export default function CombinationSets () {
    return (
        <Section id="combinations-section" className="stacked space-y-20 justify-center items-center overflow-x-hidden ">
            <div className="flex xs:max-md:items-center md:justify-between xs:max-md:flex-col xs:max-md:space-y-4 w-full  ">
                <Caption className="stacked space-y-4 xs:max-md:text-center">
                    <H3 className=" xs:max-md:text-fluid-2xl text-fluid-lg">Sets de Combinacion</H3>
                    <Body className="text-balance">Combina diferentes tamaños y crea el set perfecto para cada espacio</Body>
                </Caption>
                <Link 
                    href="/combinations"  
                    className="spaced cursor-pointer border-primary border-2 h-full normal-space bg-primary text-whitesmoke w-60"
                >
                    <Caption className="">Ver todas las combinaciones</Caption>
                    <ChevronRight />
                </Link>
            </div>
            <ul className="flex gap-4 overflow-x-auto w-full   scrollbar-none ">
                {slugList.map(slug => {
                    const card = getBySlug(slug)
                    return <CategoryCard key={card.id} data={card} />
                })}
            </ul>
        </Section>
    );
}