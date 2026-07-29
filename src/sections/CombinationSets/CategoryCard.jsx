import { Link } from "@/components";

export default function CategoryCard ({ basepath, data }) {
    const { slug, title } = data
    return (
        <li className=" ">
            <Link href={`${basepath}/${slug}`} className="size-56 shrink-0 centered bg-o rounded-lg">{title}</Link>
        </li>
    );
}