import { H3, Section } from "@/components";
import { deliveryData } from "@/data";
import { DeliveryCard } from ".";

export default function Delivery () {
    return (
        <Section 
            id="delivery-section" 
            className="stacked space-y-16 items-center"
        >
            <H3 className="text-fluid-2xl" >Entrega y Servicio</H3>
            <ul className=" flex xs:max-md:flex-col md:justify-between md:items-center w-full gap-4">
                {deliveryData?.map(option => {
                    return <DeliveryCard key={option.id} data={option}/>
                })}
            </ul>
        </Section>
    );
}