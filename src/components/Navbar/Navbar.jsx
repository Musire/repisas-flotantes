import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const tabs = [
    {
        id: 'specs-section-link',
        href: '/#specs-section',
        icon: 'icon',
        label: 'Tamaños'
    },
    {
        id: 'combinations-section-link',
        href: '/#combinations-section',
        icon: 'icon',
        label: 'Combos'
    },
    {
        id: 'delivery-section-link',
        href: '/#delivery-section',
        icon: 'icon',
        label: 'Servicios'
    },
    {
        id: 'support-link',
        href: '/support',
        icon: 'icon',
        label: 'Soporte'
    }
]

export default function Navbar () {
    return (
        <div className="bg-primary">
            <MobileNav tabs={tabs} />
            <DesktopNav tabs={tabs} />
        </div>
    );
}