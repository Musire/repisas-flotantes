import { Body, Image, TabsContent } from "@/components";
import { Check } from "lucide-react";
import { ComboCard } from ".";

export default function ContentMediano () {
    return (
        <TabsContent 
            value="mediano" 
            className="p-4 w-full h-fit flex flex-col items-center space-y-4 min-h-[40dvh]"
        >
            <div className="w-full spaced min-h-[
            40dvh]  gap-x-4">
                <Image 
                    src={''}
                    alt={'este es tamaño mediano'}
                    className=" flex-1 h-72 text-whitesmoke bg-blue-950" />
                <article className=" flex-1 h-72">
                    <ul className="flex flex-col h-full">
                        <li className="flex items-center space-x-2 h-1/4">
                            <Check />
                            <span className="font-bold">label</span>
                            <Body className="">65x 20x 3.5</Body>
                        </li>
                        <li className="flex items-center space-x-2 h-1/4">
                            <Check />
                            <span className="font-bold">label</span>
                            <Body className="">65x 20x 3.5</Body>
                        </li>
                        <li className="flex items-center space-x-2 h-1/4">
                            <Check />
                            <span className="font-bold">label</span>
                            <Body className="">65x 20x 3.5</Body>
                        </li>
                        <li className="flex items-center space-x-2 h-1/4">
                            <Check />
                            <span className="font-bold">label</span>
                            <Body className="">65x 20x 3.5</Body>
                        </li>
                    </ul>
                </article>
            </div>
            <ul className="flex evenly min-h-[40dvh] h-fit gap-4">
                <ComboCard />
                <ComboCard />
                <ComboCard />
            </ul>
        </TabsContent>
    );
}


