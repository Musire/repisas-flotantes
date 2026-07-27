import { CategoryContainer } from "@/sections";

export default function CombinationMainPage () {
    return (
        <main className="stacked space-y-8 flex-1">
            <CategoryContainer variant="cocina" />
            <CategoryContainer variant="sala" />
            <CategoryContainer variant="baño" />
            <CategoryContainer variant="oficina" />
        </main>
    );
}