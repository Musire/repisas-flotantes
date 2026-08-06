import { Image } from "@/components";
import { installationSteps } from "@/data/installation";
import { CheckCircle, Weight } from "lucide-react";
import { IndicationCard, InstallationStepCard } from ".";
import { Section } from "../../../components/Section";
const testdata = {
    id: 'installation-step-001',
    step: 1,
    title: 'Elige la ubicación de instalación',
    imgUrl: '',
    instruction: 'Coloca el estante contra la pared para visualizar su posición.',
}

export default function InstallationGuide () {
    return (
        <Section className=" grid grid-cols-12 gap-4 p-4 max-w-7xl mx-auto">
            {/* Row 1: 3 Equal Columns (12 / 3 = 4 spans each) */}
            <div className="col-span-4 bg-primary text-whitesmoke p-4 rounded-xl centered-col space-y-4 h-96">
                <span className="text-xl uppercase tracking-wider">Guia de Instalacion</span>
                <span className="text-4xl">Repisas Flotantes</span>

            </div>
            <IndicationCard title="Qué incluye">
                <p className="centered">Repisa</p>
                <p className="centered">Plantilla de Papel</p>
                <p className="centered">Perno de Expansion</p>
            </IndicationCard>
            <IndicationCard title="Qué necesitarás">
                <p className="centered">Taladro</p>
                <p className="centered">Broca para Hormigón</p>
                <p className="centered">Nivel</p>
                <p className="centered">Lapiz</p>
                <p className="centered">Llave Inglesa</p>
            </IndicationCard>

            {/* Row 2: 4 Equal Columns (12 / 4 = 3 spans each) */}
            {installationSteps?.map(step => {
                return (
                    <InstallationStepCard key={step.id} data={step} />
                )
            })}

            {/* Row 4: 2 Columns (1/3 split = 4 spans, 2/3 split = 8 spans) */}
            <div className="col-span-8  text-white overflow-hidden rounded-xl border border-primary text-left ">
                <h3 className="bg-primary text-whitesmoke text-lg p-4">Consejos</h3>
                <ul className="flex flex-col justify-start p-4 space-y-2">
                    <li className="w-full text-primary flex  space-x-2">
                        <CheckCircle className="shrink-0" />
                        <span className="">No apriete en exceso los pernos de expansión.
                        </span>
                    </li>
                    <li className="w-full text-primary flex space-x-2">
                        <CheckCircle className="shrink-0" />
                        <span className="">Limpie el polvo de la perforación antes de instalar el estante.</span>
                    </li>
                    <li className="w-full text-primary flex space-x-2">
                        <CheckCircle className="shrink-0"/>
                        <span className="">Verifique que el estante quede perfectamente asentado contra la pared.</span>
                    </li>
                    <li className="w-full text-primary flex space-x-2">
                        <CheckCircle className="shrink-0"/>
                        <span className="">Compruebe periódicamente que todos los herrajes permanezcan bien apretados.</span>
                    </li>
                </ul>
            </div>
            <div className="col-span-4  text-white rounded text-center grid grid-cols-2 h-48 gap-4">
                <div className="bg-darken-4/background rounded-xl centered-col p-4">
                    <Weight size={50} />
                    <span className="text-fluid-xl">15 kg</span>
                    <span className="font-semibold">Peso Maximo</span>
                    <span className="text-pretty text-sm mt-auto text-whitesmoke/60">Cuando se instala correctamente</span>
                </div>
                {/* <div className="bg-darken-4/background rounded-xl flex flex-col items-center space-y-2 p-4">
                    <span className="uppercase">video de instalacion</span>
                    <div className="rounded size-32 bg-darken-2/background"></div>
                    <span className="text-whitesmoke/60">Viene Pronto</span>
                </div> */}
                <div className="bg-darken-4/background rounded-xl flex flex-col items-center space-y-2  p-4">
                    <span className="uppercase">soporte whatsapp</span>
                    <div className="rounded size-32 bg-darken-2/background aspect-square centered p-1">
                        <Image
                            src="/qr-code.png"
                        />
                    </div>
                    
                </div>
            </div>

        </Section>
    );
}