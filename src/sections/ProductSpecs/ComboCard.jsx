import { Body, Image } from "@/components";

export default function ComboCard ({ data }) {
    const { title, price } = data
    return (
        <li className="w-72 h-60 border border-border rounded-lg stacked space-y-4 p-4 font-inter">
            <Body className="text-center text-fluid-lg  uppercase">{title}</Body>
            <Image 
                alt={""}
                src={""}
                className="h-24 bg-darken-2/background"
            />
            <Body className="text-center text-fluid-xl flex items-center justify-center space-x-2  uppercase">
                <span className="">{`$${price}`}</span> 
                <span className="">mxn</span>
            </Body>
        </li>
    );
}