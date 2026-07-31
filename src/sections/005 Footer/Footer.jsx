import { Whatsapp } from "@/assets";
import { Body, H3 } from "@/components";

export default function Footer () {
    return (
        <main className="w-full flex flex-col items-center border-t   ">
            <div className="min-h-[50dvh] grid lg:grid-rows-[30dvh_20dvh] grid-cols-1 gap-4 w-full  ">
                
                <div className="stacked space-y-4 ml-8 justify-center text-center  mr-8">
                    <H3 className="text-pretty">¿Listo para transformar tus paredes?</H3>
                    <Body className="text-pretty">Haz clic abajo para consultar disponibilidad de stock y agendar tu entrega hoy mismo</Body>
                </div>
                <div className="bg-primary col-span-2 centered  p-4">
                    <button type="button" className="cursor-pointer grid grid-cols-[3rem_1fr] text-whitesmoke grid-rows-2 gap-x-4 px-6 py-4 border border-border rounded-lg xs:max-md:w-full items-center">
                        <Whatsapp  size={50} className=" text-whitesmoke  row-span-2" />
                        <Body className="text-fluid-lg">Ordenar por Whatsapp</Body>
                        <Body className="text-whitesmoke/60">Respuesta rapida y atencion </Body>
                    </button>
                </div>
            </div>
        </main>
    );
}