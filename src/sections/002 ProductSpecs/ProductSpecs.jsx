import { H3, Section, Tabs, TabsList, TabsTrigger } from "@/components";
import { DynamicContent } from ".";

export default function ProductSpecs () {
    const triggerStyle = "flex-1 normal-space border-border border-x xs:text-xs"
    return (
        <Section id="specs-section" className=" stacked space-y-6 items-center  ">
            <H3 className="text-center capitalize">
                Elige tu tamaño
            </H3>
            <Tabs defaultValue="grande" className="max-w-full w-full flex flex-col items-center  mx-auto h-fit ">
                <TabsList className=" w-full flex md:max-w-lg  rounded-full overflow-hidden border-border border shadow-lg">
                    <TabsTrigger value="grande" className={triggerStyle}>
                        grande
                    </TabsTrigger>
                    <TabsTrigger value="mediano" className={triggerStyle}>
                        mediano
                    </TabsTrigger>
                    <TabsTrigger value="chico" className={triggerStyle}>
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