import { H3, Section, Tabs, TabsList, TabsTrigger } from "@/components";
import { DynamicContent } from ".";

export default function ProductSpecs () {
    return (
        <Section id="specs-section" className=" stacked items-center ">
            <H3 className="">
                Elige tu tamaño de repisa
            </H3>
            <Tabs defaultValue="grande" className="max-w-3/4 w-full flex flex-col items-center mx-auto h-fit ">
                <TabsList className="flex items-center space-x-3 ">
                    <TabsTrigger value="grande" className="px-4 py-2 text-sm">
                    grande
                    </TabsTrigger>
                    <TabsTrigger value="mediano" className="px-4 py-2 text-sm ">
                    mediano
                    </TabsTrigger>
                    <TabsTrigger value="chico" className="px-4 py-2 text-sm">
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