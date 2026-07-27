import { Body, BodySm, Caption } from "@/components";

export default function DeliveryCard ({ data }) {
    const { title, description, Icon, price } = data
    return (
        <li className="w-72 h-48 border border-border rounded-lg stacked space-y-4 p-4 font-inter text-primary">
            <div className="space-x-2 spaced w-60">
                <Icon size={50} strokeWidth={1} className=" shrink-0" />
                <Body className="flex flex-col w-40 gap-1">
                    <Caption className="text-center  uppercase">{title}</Caption>
                    <div className="bg-primary text-background centered normal-space  gap-2">
                        <span className="">{`$${price} `}</span> 
                        <span className="uppercase">mxn</span>
                    </div>
                </Body>
            </div>
            <BodySm >{description}</BodySm>
        </li>
    );
}