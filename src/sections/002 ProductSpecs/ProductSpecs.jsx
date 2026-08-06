import { H3, Section, Tabs, TabsList, TabsTrigger } from "@/components";
import { DynamicContent } from ".";

export default function ProductSpecs () {
    return (
        <Section id="specs-section" className=" stacked space-y-8 items-center ">
            <H3 className="">
                Elige tu tamaño de repisa
            </H3>
            <Tabs defaultValue="grande" className="max-w-full w-full flex flex-col items-center mx-auto h-fit ">
                <TabsList className=" w-full md:max-w-1/3 evenly rounded-full overflow-hidden border-border border shadow-lg">
                    <TabsTrigger value="grande" className="px-4 py-2 grow xs:max-md:max-w-32  border-border border-x  text-sm">
                    grande
                    </TabsTrigger>
                    <TabsTrigger value="mediano" className="px-4 py-2 grow xs:max-md:max-w-32  border-border border-x  text-sm ">
                    mediano
                    </TabsTrigger>
                    <TabsTrigger value="chico" className="px-4 py-2 grow xs:max-md:max-w-32  border-border border-x  text-sm">
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