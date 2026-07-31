import { Body, Image } from "@/components";

export default function ComboCard ({ data }) {
    const { title, price, url, alt, tier, scale } = data
    return (
        <li className="w-96  aspect-4/3 overflow-hidden stacked space-y-4 font-inter relative p-0">
            <div className="absolute w-full h-full   overflow-hidden ">
                <Image
                    src={url}
                    alt={alt}
                    aspectRatio=""
                    className={`text-whitesmoke ${scale} `} />
            </div>
            <div className="w-full h-1/3 bg-linear-to-b from-transparent to-black/40 absolute bottom-0 left-0 flex flex-col items-center justify-end ">
                <Body className="text-5xl text-background absolute font-bold -bottom-2">
                    {`${price} MXN`}
                </Body>
            </div>

        </li>
    );
}