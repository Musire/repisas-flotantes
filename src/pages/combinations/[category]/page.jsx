import { useParams } from "react-router";

export default function CombinationCategory () {
    const { category } = useParams()
    return (
        <div className="">{category}</div>
    );
}