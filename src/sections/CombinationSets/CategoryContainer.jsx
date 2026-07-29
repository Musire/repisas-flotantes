import { Caption } from "@/components";
import { CategoryCard } from ".";

export default function CategoryContainer ({ category, data }) {
    const basepath = `/combinations`

    return (
        <div className="stacked space-y-2">
            <Caption className="uppercase">{category}</Caption>
            <ul className="flex items-center space-x-4">
                {data?.map(card => {
                    return <CategoryCard key={card.id} basepath={basepath}  data={card} />
                })}
            </ul>
        </div>
    );
}