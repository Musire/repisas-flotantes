import { Whatsapp } from "@/assets";
import { Body, H3, Image } from "@/components";

export default function Footer () {
    return (
        <main className="w-full flex flex-col items-center border-t   ">
            <div className="min-h-[50dvh] grid grid-rows-[40dvh_20dvh] grid-cols-2  gap-4 w-full  ">
                <div className="flex-col flex justify-center  ">
                    <Image 
                        className=" text-whitesmoke h-48 "
                        width={395}
                        height={275}
                        src="footer-image.png"
                        alt="footer-image"
                    />
                </div>
                <div className="stacked space-y-4 ml-8 justify-center   mr-8">
                    <H3 className="text-pretty">¿Listo para transformar tus paredes?</H3>
                    <Body className="text-pretty">Haz clic abajo para consultar disponibilidad de stock y agendar tu entrega hoy mismo</Body>
                </div>
                <div className="bg-primary col-span-2 centered">
                    <button type="button" className="cursor-pointer grid grid-cols-[4rem_1fr] text-whitesmoke grid-rows-2 w-1/2 gap-x-2 normal-space border border-border rounded-lg  items-center">
                        <Whatsapp  size={50} className=" text-whitesmoke row-span-2" />
                        <Body className="text-fluid-lg">Ordenar por Whatsapp</Body>
                        <Body className="text-whitesmoke/60">Respuesta rapida y atencion personalizada</Body>
                    </button>
                </div>
            </div>
        </main>
    );
}