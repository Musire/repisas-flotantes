import { Caption, Image, TabsContent } from "@/components";
import { bundleDataConfig, dynamicProductSlot, sharedProductSlots } from "@/data";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { ComboCard, SpecSlot } from ".";


export default function DynamicContent ({ variant }) {
    const dynamicSlot = dynamicProductSlot[variant]
    const bundleData = bundleDataConfig[variant]
    const [isOpen, setOpen] = useState(false)
    const toggleDrawer = () => setOpen(prev => !prev)
    return (
        <TabsContent 
            value={variant} 
            className=" w-full h-fit flex flex-col lg:flex-row items-center space-y-12 min-h-[40dvh] lg:justify-center py-4"
        >
            <div className="w-full max-w-96 md:spaced min-h-[
            40dvh]  gap-x-4 relative">
                <div className="flex-1 aspect-3/4  overflow-hidden rounded-xl">
                    <Image
                        src={`/labeled/board_${variant}_labeled.png`}
                        alt={`este es tamaño ${variant}  `}
                        className="w-full lg:max-w-96"
                    />
                </div>
                <button type="button" className="font-bold absolute flex items-center space-x-2 right-0 -bottom-10">
                    <Caption className="text-lg cursor-pointer" onClick={toggleDrawer} >Ver Detalles</Caption>
                <ChevronRight />    
            </button>
            </div>
            <ul className="w-full flex flex-row overflow-scroll scrollbar-none gap-4 md:max-lg:spaced  h-fit lg:h-full lg:flex-col lg:w-1/3 items-end ">
                {bundleData?.map(card => {
                    return <ComboCard key={card.id} data={card} />
                })}
            </ul>
            {isOpen && (
                <>
                    <div 
                    onClick={() => setOpen(false)} 
                    className="fixed inset-0 z-40 bg-black/20"
                    />

                    <aside 
                        className={`fixed bottom-0 inset-x-0 z-50 bg-lighten-4/background pt-10 rounded-t-3xl border-t-2 border-main transition-all duration-200 ${isOpen ? 'h-fit' : 'h-0 opacity-0 pointer-events-none'}`}>
                        <article className="h-72 ">
                            <ul className="flex flex-col h-full space-y-4 ml-6">
                            <SpecSlot data={dynamicSlot} />
                            {sharedProductSlots?.map((slot) => (
                                <SpecSlot key={slot.id} data={slot} />
                            ))}
                            </ul>
                        </article>
                    </aside>
                </>
            )}
        </TabsContent>
    );
}


