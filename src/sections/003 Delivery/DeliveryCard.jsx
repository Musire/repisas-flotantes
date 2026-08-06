import { BodySm, Caption } from "@/components";

export default function DeliveryCard ({ data }) {
    const { title, description, Icon, price } = data
    return (
        <li className="md:w-96 max-w-full border border-border text-primary grid grid-cols-2 grid-rows-2 px-10 py-6 max-h-52 gap-4 items-end">
            <Icon size={40} strokeWidth={2} className=" shrink-0" />
                <div className="flex flex-col w-40 gap-1">
                    <Caption className="text-center  uppercase">{title}</Caption>
                    <Caption className="bg-primary text-background centered normal-space  gap-2">{`${price}`}</Caption>
                    
                </div>
            <BodySm className="self-start my-auto text-pretty  col-span-2 centered" >{description}</BodySm>
        </li>
    );
}