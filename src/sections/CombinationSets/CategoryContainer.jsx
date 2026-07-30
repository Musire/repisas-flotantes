import { Caption } from "@/components";
import { CategoryCard } from ".";

export default function CategoryContainer ({ category, data }) {

    return (
        <div className="stacked space-y-2">
            <Caption className="uppercase">{category}</Caption>
            <ul className="flex items-center space-x-4">
                {data?.map(card => {
                    return <CategoryCard key={card.id} data={card} />
                })}
            </ul>
        </div>
    );
}