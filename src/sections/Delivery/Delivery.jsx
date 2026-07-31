import { H3, Section } from "@/components";
import { deliveryData } from "@/data";
import { DeliveryCard } from ".";

export default function Delivery () {
    return (
        <Section 
            id="delivery-section" 
            className="stacked space-y-16 items-center"
        >
            <H3 className="" >Opciones de entrega y servicio</H3>
            <ul className="flex spaced w-full">
                {deliveryData?.map(option => {
                    return <DeliveryCard key={option.id} data={option}/>
                })}
            </ul>
        </Section>
    );
}