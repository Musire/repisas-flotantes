import { Body, Image } from "@/components";

export default function ComboCard ({ data }) {
    const { price, url, alt,  } = data
    return (
        <li className=' shrink-0 xsw-72 md:w-96 lg:w-52 aspect-4/3 overflow-hidden  space-y-4 font-inter relative p-0 rounded-xl h-fit lg:odd:self-start lg:even:self-end'>
            <div className="absolute w-full   overflow-hidden ">
                <Image
                    src={url}
                    alt={alt}
                    aspectRatio="4/3"
                    className={`text-whitesmoke  `} />
            </div>
            <div className="w-full h-1/3 bg-linear-to-b from-transparent to-black/40 absolute bottom-0 left-0 flex flex-col items-center justify-end ">
                <Body className="text-3xl text-background absolute font-bold bottom-2">
                    {`${price} MXN`}
                </Body>
            </div>

        </li>
    );
}