export function getBySlug(slug) {
  return categoryData
    .flatMap(category => category.combos)
    .find(combo => combo.slug === slug);
}

export const categoryData = [
    {
        id: "category-kitchen-001",
        category: 'cocina',
        description: '',
        combos: [
            {
                id: 'kitchen-combo-001',
                slug: 'cocina-basica',
                title: 'basico',
                price: '',
                description: '',
                imgUrl: ''
            },
            {
                id: 'kitchen-combo-002',
                slug: 'cocina-deluxe',
                title: 'deluxe',
                price: '',
                description: '',
                imgUrl: ''
            },
            {
                id: 'kitchen-combo-003',
                slug: 'cocina-rustico',
                title: 'rustico',
                price: '',
                description: '',
                imgUrl: ''
            }
        ]
    },
    {
        id: "category-restroom-001",
        category: 'baño',
        description: '',
        combos: [
            {
                id: 'restroom-combo-001',
                slug: 'baño-basica',
                title: 'basico',
                price: '',
                description: '',
                imgUrl: ''
            },
            {
                id: 'restroom-combo-002',
                slug: 'baño-completo',
                title: 'completo',
                price: '',
                description: '',
                imgUrl: ''
            }
        ]
    },
    {
        id: "category-hallway-001",
        category: 'pasillo',
        description: '',
        combos: [
            {
                id: 'hallway-combo-001',
                slug: 'baño-basica',
                title: 'Premium',
                price: '',
                description: '',
                imgUrl: ''
            }
        ]
    },
    {
        id: "category-livingroom-001",
        category: 'sala',
        description: '',
        combos: [
            {
                id: 'livingroom-combo-001',
                slug: 'sala-galeria',
                title: 'Gallery',
                price: '',
                description: '',
                imgUrl: ''
            }
        ]
    },
    {
        id: "category-office-001",
        category: 'oficina',
        description: '',
        combos: [
            {
                id: 'office-combo-001',
                slug: 'oficina-basica',
                title: 'Office',
                price: '',
                description: '',
                imgUrl: ''
            }
        ]
    }
]