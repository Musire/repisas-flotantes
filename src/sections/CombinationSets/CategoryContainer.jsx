import { Body, Caption, Link } from "@/components";
import { CategoryCard } from ".";
import { categoryTypeData } from "@/data";

export default function CategoryContainer ({ variant }) {
    const basepath = `/combinations/${variant}`
    const selectedData = categoryTypeData[variant]

    return (
        <div className="stacked space-y-2">
            <Body className="capitalize spaced">
                <Caption className="">{variant}</Caption>
                <Link className="" href={basepath} >Ver mas</Link>
            </Body>
            <ul className="flex items-center space-x-4">
                {selectedData?.map(card => {
                    return <CategoryCard key={card.id} basepath={basepath}  data={card} />
                })}
            </ul>
        </div>
    );
}