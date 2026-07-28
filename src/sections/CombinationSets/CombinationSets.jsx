import { Body, Caption, H3, Link, Section } from "@/components";
import { ChevronRight } from "lucide-react";
import { SetCard } from ".";

export default function CombinationSets () {
    return (
        <Section id="combinations-section" className="stacked justify-center items-center overflow-x-hidden p-6">
            <div className="spaced w-full max-w-[70dvw] ">
                <Caption className="flex flex-col">
                    <H3 className="text-fluid-lg">Sets de Combinacion</H3>
                    <Body className="">Combina diferentes tamaños y crea el set perfecto para cada espacio</Body>
                </Caption>
                <Link 
                    href="/combinations"  
                    className="spaced cursor-pointer border-primary border-2 h-full normal-space rounded-md bg-primary text-whitesmoke w-60"
                >
                    <Caption className="">Ver todas las combinaciones</Caption>
                    <ChevronRight />
                </Link>
            </div>
            <ul className="flex gap-4 overflow-x-auto w-full max-w-[70dvw]  scrollbar-none ">
                <SetCard />
                <SetCard />
                <SetCard />
                <SetCard />
                <SetCard />
                <SetCard />
            </ul>
        </Section>
    );
}