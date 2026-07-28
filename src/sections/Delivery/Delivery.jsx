import { H3, Section } from "@/components";
import { deliveryData } from "@/data";
import { DeliveryCard } from ".";

export default function Delivery () {
    return (
        <Section 
            id="delivery-section" 
            className="stacked items-center"
        >
            <H3 className="uppercase" >opciones de entrega y servicio</H3>
            <ul className="flex gap-4">
                {deliveryData?.map(option => {
                    return <DeliveryCard key={option.id} data={option}/>
                })}
            </ul>
        </Section>
    );
}