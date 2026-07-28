import { Body, Image } from "@/components";

export default function ComboCard ({ data }) {
    const { title, price, url, alt } = data
    return (
        <li className="w-72 h-60 bg-lighten-3/background border border-border rounded-lg stacked space-y-4 p-4 font-inter">
            <div className="relative  aspect-video w-full overflow-hidden ">
                <Image
                    fill
                    src={url}
                    alt={alt}
                    className="  h-40 text-whitesmoke scale-125" />
            </div>
            <Body className="text-center text-fluid-xl flex items-center justify-center space-x-2  uppercase">
                <span className="">{`$${price}`}</span> 
                <span className="">mxn</span>
            </Body>
        </li>
    );
}