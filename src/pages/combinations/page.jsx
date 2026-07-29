import { categoryData } from "@/data";
import { CategoryContainer } from "@/sections";


export default function CombinationMainPage () {
    return (
        <main className="stacked space-y-8 flex-1">
            {
                categoryData?.map(c => {
                    console.log(c)
                    return (
                        <CategoryContainer 
                            key={c.id} 
                            category={c.category} 
                            data={c.combos} 
                        />
                    )
                })
            }
        </main>
    );
}