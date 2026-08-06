import { Body, Caption, H3, Link, Section } from "@/components";
import { getBySlug } from "@/data";
import { ChevronRight } from "lucide-react";
import { CategoryCard } from ".";

const slugList = ['cocina-deluxe', 'recamara-basica', 'oficina-basica', 'cocina-basica',
    'pasillo-premium', 'baño-completo', 'baño-basica', 'sala-galeria' ]

export default function CombinationSets () {
    return (
        <Section 
            id="combinations-section" 
            className="stacked space-y-20 justify-center items-center overflow-x-hidden "
        >
            <div className="flex flex-col w-full ">
                <Caption className="stacked space-y-4 text-left w-full">
                    <H3 className=" xs:max-md:text-fluid-2xl text-fluid-lg">Sets de Combinacion</H3>
                    <Body className="xs:max-md:text-center">Combina diferentes tamaños y crea el set perfecto para cada espacio</Body>
                </Caption>
                <Link 
                    href="/combinations"  
                    className="flex self-end mt-4 mb-4 items-center space-x-2 font-bold"
                >
                    <Caption className="text-fluid">Ver todos</Caption>
                    <ChevronRight />
                </Link>
                <ul className="flex gap-4 overflow-x-auto w-full   scrollbar-none ">
                    {slugList.map(slug => {
                        const card = getBySlug(slug)
                        return <CategoryCard key={card.id} data={card} />
                    })}
                </ul>
                
            </div>
            
        </Section>
    );
}