import { Link } from "@/components";
import { Menu } from "lucide-react";
import { useState } from "react";




export default function MobileNav ({ tabs }) {
    const [isOpen, setOpen] = useState()
    return (
        <nav className="md:hidden  bg-primary text-whitesmoke/60 w-full h-16 fixed left-0 top-0 border-b bg-card xs:px-10 lg:px-24 spaced shrink-0 z-50">
            <Link href="/" className="font-inter text-fluid-2xl font-medium text-whitesmoke">Repisas Vitta</Link>
            <button 
                type="button"
                className="cursor-pointer"
                onClick={() => setOpen(prev => !prev)}    
            >
                <Menu />
            </button>
            {isOpen && (
                <aside className="bg-darken-2/background  fixed left-4 w-[calc(100%-2rem)] top-20 h-[88dvh]">
                    <div className="stacked space-y-2 w-full py-20 p-6">
                        {tabs.map(link => {
                            return (
                                <Link 
                                key={link.id} 
                                href={link.href}
                                onClick={() => setOpen(false) }
                                className="normal-space text-center bg-background hover:bg-darken-1/background active:bg-lighten-1/background text-auto" 
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                </aside>
            )}
        </nav>
    );
}