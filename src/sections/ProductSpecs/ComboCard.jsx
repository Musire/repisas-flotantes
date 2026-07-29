import { Body, Image } from "@/components";

export default function ComboCard ({ data }) {
    const { title, price, url, alt, tier, scale } = data
    return (
        <li className="w-72 h-60 bg-lighten-3/background border border-border rounded-lg stacked space-y-4 p-4 font-inter">
            <Body className="text-center">
                {tier}
            </Body>
            <div className="relative  aspect-video w-full overflow-hidden ">
                <Image
                    fill
                    objectFit="object-contain"
                    src={url}
                    alt={alt}
                    width={1000}
                    className={`text-whitesmoke ${scale} `} />
            </div>
            <Body className="text-center text-fluid-lg flex items-center justify-center space-x-2  uppercase">
                <span className="">{`$${price}`}</span> 
                <span className="">mxn</span>
            </Body>
        </li>
    );
}