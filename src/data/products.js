import { Paintbrush, Ruler, Shield, Weight } from "lucide-react"

export const dynamicProductSlot = {
    grande: {
        id: 'description-list-001',
        Icon: Ruler,
        subtitle: 'dimensiones',
        fact: '78cm (largo) x 20cm (ancho) x 3.5cm (gresor)'
    },
    mediano: {
        id: 'description-list-002',
        Icon: Ruler,
        subtitle: 'dimensiones',
        fact: '65cm (largo) x 20cm (ancho) x 3.5cm (gresor)'
    },
    chico: {
        id: 'description-list-003',
        Icon: Ruler,
        subtitle: 'dimensiones',
        fact: '50cm (largo) x 20cm (ancho) x 3.5cm (gresor)'
    },
}

export const sharedProductSlots = [
    {
            id: 'description-list-004',
            Icon: Weight,
            subtitle: 'capacidad de carga',
            fact: 'Soporta de 5 a 15kg (dependiendo del tipo de pared)'
        },
        {
            id: 'description-list-005',
            Icon: Shield,
            subtitle: 'material',
            fact: 'Nucleo certificado por la TSCA (libre de toxinas y amigable con el medio ambiente)'
        },
        {
            id: 'description-list-006',
            Icon: Paintbrush,
            subtitle: 'acabado',
            fact: 'Melamina texturizada tono madera calida. Altamente resistente a rayaduras y facil de limpiar'
        }
]