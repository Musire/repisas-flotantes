import { CombinationSets, Delivery, Hero, ProductSpecs } from "@/sections";

export default function Page () {
    return (
        <div className="flex-1 stacked ">
            <Hero />
            <ProductSpecs />
            <Delivery />
            <CombinationSets />
        </div>
    );
}

