import { Image, TabsContent } from "@/components";
import { bundleDataConfig, dynamicProductSlot, sharedProductSlots } from "@/data";
import { ComboCard, SpecSlot } from ".";


export default function DynamicContent ({ variant }) {
    const dynamicSlot = dynamicProductSlot[variant]
    console.log(dynamicSlot)
    const bundleData = bundleDataConfig[variant]
    return (
        <TabsContent 
            value={variant} 
            className="p-4 w-full h-fit flex flex-col items-center space-y-12 min-h-[40dvh]"
        >
            <div className="w-full spaced min-h-[
            40dvh]  gap-x-4">
                <div className="flex-1 centered  h-72">
                    <div className="relative  aspect-video w-full overflow-hidden ">
                        <Image
                            fill
                            src={`/board_${variant}_labeled.png`}
                            alt={`este es tamaño ${variant}`}
                            className="  h-40 text-whitesmoke scale-125" />
                    </div>
                </div>
                <article className=" flex-1 h-72">
                    <ul className="flex flex-col h-full space-y-4 ml-6 ">
                        <SpecSlot data={dynamicSlot} />
                        {sharedProductSlots?.map(slot => {
                            return <SpecSlot key={slot.id} data={slot} />
                        })}
                    </ul>
                </article>
            </div>
            <ul className="flex evenly min-h-[40dvh] h-fit gap-4">
                {bundleData?.map(card => {
                    return <ComboCard key={card.id} data={card} />
                })}
            </ul>
        </TabsContent>
    );
}


