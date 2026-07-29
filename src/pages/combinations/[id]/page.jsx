import { categoryTypeData } from "@/data";
import { findById } from "@/utils/objectMutation";
import { useParams } from "react-router";

export default function DynamicCombinationDetails ({}) {
    const { category, id } = useParams()
    const data = findById(categoryTypeData[category], id)
    return (
        <main className="">
            {id}
        </main>
    );
}