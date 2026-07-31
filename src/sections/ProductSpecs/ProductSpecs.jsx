import { H3, Section, Tabs, TabsList, TabsTrigger } from "@/components";
import { DynamicContent } from ".";

export default function ProductSpecs () {
    return (
        <Section id="specs-section" className=" stacked space-y-16 items-center ">
            <H3 className="">
                Elige tu tamaño de repisa
            </H3>
            <Tabs defaultValue="grande" className="max-w-full w-full flex flex-col items-center mx-auto h-fit ">
                <TabsList className=" w-3/4 evenly ">
                    <TabsTrigger value="grande" className="px-4 py-2 border-border border text-sm">
                    grande
                    </TabsTrigger>
                    <TabsTrigger value="mediano" className="px-4 py-2 border-border border text-sm ">
                    mediano
                    </TabsTrigger>
                    <TabsTrigger value="chico" className="px-4 py-2 border-border border text-sm">
                    chico
                    </TabsTrigger>
                </TabsList>
                <DynamicContent variant="grande" />
                <DynamicContent variant="mediano" />
                <DynamicContent variant="chico" />
            </Tabs>
        </Section>
    );
}