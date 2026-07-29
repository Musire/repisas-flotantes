import { Link } from "@/components";
import { Menu } from "lucide-react";
import { useState } from "react";

const tabs = [
    {
        id: 'hero-section-link',
        href: '#hero-section',
        icon: 'icon',
        label: 'Gallery'
    },
    {
        id: 'specs-section-link',
        href: '#specs-section',
        icon: 'icon',
        label: 'Specs'
    },
    {
        id: 'delivery-section-link',
        href: '#delivery-section',
        icon: 'icon',
        label: 'Delivery Options'
    },
    {
        id: 'bundles-section-link',
        href: '#bundles-section',
        icon: 'icon',
        label: 'Bundles'
    },
    {
        id: 'combinations-section-link',
        href: '#combinations-section',
        icon: 'icon',
        label: 'Combination Sets'
    }
]


export default function Navbar () {
    const [isOpen, setOpen] = useState()
    return (
        <nav className=" bg-background w-full h-16 fixed left-0 top-0 border-b bg-card px-6 spaced shrink-0 z-50">
            <Link href="/" className="font-cormorant text-fluid-2xl font-semibold">Vitta</Link>
            <button 
                type="button"
                className="cursor-pointer"
                onClick={() => setOpen(prev => !prev)}    
            >
                <Menu />
            </button>
            {isOpen && (
                <aside className="bg-darken-2/background  fixed left-4 w-[calc(100%-2rem)] top-20 h-[88dvh]">
                    <div className="stacked">
                        {tabs.map(link => {
                            return (
                                <Link 
                                key={link.id} 
                                href={link.href}
                                onClick={() => setOpen(false) } 
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