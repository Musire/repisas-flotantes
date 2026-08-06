import { Image } from "@/components";

export default function InstallationStepCard ({ data }) {
    return (
        <article className="border border-primary rounded-xl overflow-hidden shadow-sm col-span-3 p-4 text-center" aria-labelledby={`step-heading-${data.id}`}>
            {/* Header: Logical grouping for step metadata and title */}
            <header className="p-4 border-b border-primary flex items-center space-x-4">
                <span className="bg-primary size-10 rounded-full centered text-whitesmoke shrink-0 ">{data.step}</span>
                <h2 id={`step-heading-${data.id}`} className="text-balance text-primary">
                {data.title}
                </h2>
            </header>
            {/* Visual Media representation */}
            {data.imgUrl && (
                <Image 
                    src={data.imgUrl}
                />
            )}

            {/* Main body content/instruction */}
            <div className="p-4">
                <p className="text-left text-primary leading-relaxed">
                {data.instruction}
                </p>
            </div>
        </article>
    );
}