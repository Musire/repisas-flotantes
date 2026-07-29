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
        <main className="">
            {slug}
        </main>
    );
}