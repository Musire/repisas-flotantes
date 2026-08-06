import { CombinationSets, Delivery, Hero, ProductSpecs } from "@/sections";

export default function Page () {
    return (
        <div className="flex-1 stacked space-y-4 max-w-full">
            <Hero />
            <ProductSpecs />
            <CombinationSets />
            <Delivery />
        </div>
    );
}

