import { Link } from "@/components";

export default function DesktopNav ({ tabs }) {
    return (
        <nav className="xs:max-md:hidden bg-primary text-whitesmoke/60 w-full h-16 fixed left-0 top-0 border-b bg-card xs:px-10 lg:px-24 spaced shrink-0 z-50">
            <Link href="/" className="font-inter md:text-fluid-xl lg:text-fluid-2xl font-medium min-w-52 w-fit shrink-0">Repisas Vitta</Link>
            <ul className="flex space-x-8">
                {tabs?.map(t => (
                    <li key={t.id} className="">
                        <Link 
                           href={t.href}
                           className="normal-space hover:border-b-2 blip md:text-sm lg:text-lg"
                        >{t.label}</Link>
                    </li>
                ))}
            </ul>
            
        </nav>
    );
}