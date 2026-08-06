export default function IndicationCard ({ title, children }) {
    return (
        <div className="col-span-4 flex flex-col rounded-xl overflow-hidden border-primary border text-center">
            <h3 className="bg-primary text-whitesmoke h-12 centered">{title}</h3>
            <ul className="flex flex-col auto-rows-fr *:grow *:py-2 flex-1 divide-y divide-primary">
                {children}
            </ul>
        </div>
    );
}