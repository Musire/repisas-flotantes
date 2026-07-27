import { CombinationSets, Delivery, Hero, ProductSpecs } from "@/sections";

export default function Page () {
    return (
        <div className="flex-1 stacked max-w-full">
            <Hero />
            <ProductSpecs />
            <Delivery />
            <CombinationSets />
        </div>
    );
}

