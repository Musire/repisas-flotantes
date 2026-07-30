import { categoryData } from "@/data";
import { CategoryContainer } from "@/sections";



export default function CombinationMainPage () {
    return (
        <main className="grid grid-cols-2 gap-4 flex-1">
            {
                categoryData?.map(c => <CategoryContainer 
                        key={c.id} 
                        category={c.category} 
                        data={c.combos} 
                    />
                )
            }
        </main>
    );
}