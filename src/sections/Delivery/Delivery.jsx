import { H3 } from "@/components";
import { deliveryData } from "@/data";
import { DeliveryCard } from ".";

export default function Delivery () {
    return (
        <div id="delivery-section" className="w-full min-h-[50dvh] bg-darken-1/background stacked items-center py-6">
            <H3 className="uppercase" >opciones de entrega y servicio</H3>
            <ul className="flex gap-4">
                {deliveryData?.map(option => {
                    return <DeliveryCard key={option.id} data={option}/>
                })}
            </ul>
        </div>
    );
}