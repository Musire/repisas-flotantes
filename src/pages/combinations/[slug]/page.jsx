import { Image } from "@/components";
import { getBySlug } from "@/data";
import { useParams } from "react-router";

export default function DynamicCombinationDetails ({}) {
    const { slug } = useParams()
    const data = getBySlug(slug)


    if (!data) {
        return (
            <div className="">no product found</div>
        )
    }

    return (
        <main className="flex md:flex-row xs:max-md:flex-col gap-4 py-6">
            <figure className="xs:max-md:w-full md:max-w-xl ">
                <Image
                    aspectRatio="1/1"
                    src={data.imgUrl}
                    alt={data.title}
                    srcSet={data.srcSet}
                />
            </figure>
            <div className="flex md:flex-row  xs:max-md:flex-col">
                <section className="w-full md:w-1/2 gap-4 flex flex-wrap  md:stacked" aria-label="Product Details">
                    <header className="product-title-group">
                        <h1 className="text-fluid-xl uppercase">{data.title}</h1>
                        <p className="tagline">Sleek. Minimal. Everyday.</p>
                    </header>
                    <p className="description">
                        {data.description}
                    </p>

                </section>
            </div>
        </main>
    );
}