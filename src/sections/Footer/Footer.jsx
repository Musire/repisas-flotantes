import { Body, H3, Image } from "@/components";

export default function Footer () {
    return (
        <main className="w-full flex flex-col items-center border-t   ">
            <div className="min-h-[50dvh] grid grid-rows-[40dvh_20dvh] grid-cols-2  gap-4 w-full  ">
                <div className="flex-col flex justify-center  ">
                    <Image 
                        className="bg-blue-950 h-48 "
                        width={500}
                    />
                </div>
                <div className="stacked space-y-4 ml-8 justify-center   mr-8">
                    <H3 className="text-pretty">¿Listo para transformar tus paredes?</H3>
                    <Body className="text-pretty">Haz clic abajo para consultar disponibilidad de stock y agendar tu entrega hoy mismo</Body>
                </div>
                <div className="bg-primary col-span-2"></div>
            </div>
        </main>
    );
}