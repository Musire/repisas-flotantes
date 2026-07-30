import { Body, BodySm, Caption, Image, Link } from "@/components";
import { MoveRight } from "lucide-react";

export default function CategoryCard ({ data }) {
    const { slug, title, imgUrl, price } = data

    return (
        <li className=" ">
            <Link href={`combinations/${slug}`} className="size-48 shrink-0 centered bg-darken-3/background rounded-lg relative aspect-video w-full overflow-hidden group">
                <Image
                    src={imgUrl}
                    width={800}
                    height={800}
                />
                <div className="h-1/2 group-hover:h-full w-full absolute bottom-0 left-0 bg-linear-to-b from-transparent to-black flex items-center justify-center group-hover:items-start p-4 snappy group-hover:bg-black/30">
                    <article className="relative space-y-4 stacked">
                        <Body className="text-background group-hover:text-whitesmoke/87 flex items-center space-x-4 capitalize">
                            {title}
                        </Body>
                        <BodySm className="hidden group-hover:block text-whitesmoke/60">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. 
                        </BodySm>
                        <Body className="text-whitesmoke/87 items-center space-x-2  hidden group-hover:flex justify-end mb-4">
                            <Caption className="">Ver detalles</Caption>
                            <MoveRight />
                        </Body>
                    </article>
                </div>
            </Link>
        </li>
    );
}