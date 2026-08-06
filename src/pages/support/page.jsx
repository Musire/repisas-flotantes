import { FAQ, InstallationGuide } from "@/sections";
import { Download } from "lucide-react";

export default function SupportPage () {
    return (
        <div className="flex flex-1 md:px-20 stacked relative">
            <InstallationGuide />
            <a download href="/guia-de-instalacion.pdf"  className="absolute right-4 top-6 normal-space  bg-primary flex text-whitesmoke/87 hover:text-whitesmoke space-x-4 rounded-lg group w-16 h-16 hover:w-fit ">
                <span className="capitalize collapse group-hover:visible  overflow-hidden my-auto">descarga guia</span>
                <Download className="shrink-0 mx-auto my-auto"/>
            </a>
            <FAQ />
        </div>
    );
}