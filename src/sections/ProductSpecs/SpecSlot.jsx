import { BodySm } from "@/components";

export default function SpecSlot ({ data }) {
    const { subtitle, fact, Icon } = data
    return (
        <li className="flex flex-wrap space-x-2 max-h-32 h-fit ">
            <Icon size={20} className="shrink-0" strokeWidth={1} />
            <span className="font-bold capitalize w-40">{ subtitle }</span>
            <BodySm className="col-span-full text-else text-fluid-sm">{ fact }</BodySm>
        </li>
    );
}