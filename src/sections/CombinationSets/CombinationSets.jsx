import { Body, Caption, H3, Link } from "@/components";
import { ChevronRight } from "lucide-react";
import { SetCard } from ".";

export default function CombinationSets () {
    return (
        <div id="combinations-section" className="max-w-full min-h-[50dvh] bg-darken-1/background stacked justify-center overflow-x-hidden p-6">
            <div className="spaced">
                <Caption className="flex flex-col">
                    <H3 className="text-fluid-lg">Sets de Combinacion</H3>
                    <Body className="">Combina diferentes tamaños y crea el set perfecto para cada espacio</Body>
                </Caption>
                <Link 
                    href="/combinations"  
                    className="spaced cursor-pointer border-primary border-2 h-full normal-space rounded-md hover:bg-primary w-60"
                >
                    <Caption className="">Ver todas las combinaciones</Caption>
                    <ChevronRight />
                </Link>
            </div>
            <ul className="flex gap-4 pl-20 overflow-x-auto scrollbar-none">
                <SetCard />
                <SetCard />
                <SetCard />
                <SetCard />
                <SetCard />
                <SetCard />
            </ul>
        </div>
    );
}