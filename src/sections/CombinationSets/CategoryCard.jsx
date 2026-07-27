import { Link } from "@/components";

export default function CategoryCard ({ basepath, data }) {
    const { id, title } = data
    return (
        <li className=" ">
            <Link href={`${basepath}/${id}`} className="size-56 shrink-0 centered bg-o rounded-lg">{title}</Link>
        </li>
    );
}