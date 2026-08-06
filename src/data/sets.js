export function getBySlug(slug) {
  return categoryData
    .flatMap(category => category.combos)
    .find(combo => combo.slug === slug);
}

// 1. LQIP Placeholders (Base64 or small image URL)
const lqipImages = import.meta.glob('/src/assets/products/*.png', {
  query: '?w=20&blur=5&as=metadata',
  eager: true,
});

// 2. SrcSet Strings (WebP formats)
const srcsetImages = import.meta.glob('/src/assets/products/*.png', {
  query: '?w=400;800;1200&format=webp&as=srcset',
  eager: true,
});

// 3. Main Fallback Image Source
const fallbackImages = import.meta.glob('/src/assets/products/*.png', {
  query: '?w=800&format=webp',
  eager: true,
});

// Hardcoded data reading directly from the glob maps using string paths
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
        price: 100,
        description: 'Organiza tu cocina con repisas flotantes que mantienen vajilla, especias y utensilios siempre al alcance. Una solución práctica que aporta orden y un estilo moderno a cualquier cocina.',
        imgUrl: fallbackImages['/src/assets/products/kitchen.png']?.default?.src || fallbackImages['/src/assets/products/kitchen.png']?.default || '',
        srcSet: srcsetImages['/src/assets/products/kitchen.png']?.default || '',
        imgData: lqipImages['/src/assets/products/kitchen.png']?.default?.src || lqipImages['/src/assets/products/kitchen.png']?.default || '',
      },

      
      {
        id: 'kitchen-combo-002',
        slug: 'cocina-deluxe',
        title: 'deluxe',
        price: '',
        description: 'Dale un toque de diseño a tu cocina con repisas flotantes que destacan vajilla, cristalería, plantas y accesorios decorativos. La combinación perfecta entre almacenamiento inteligente y elegancia contemporánea.',
        imgUrl: '/src/assets/products/kitchen_2.png',
        imgData: lqipImages['/src/assets/products/kitchen_2.png']?.default?.src,
        srcSet: srcsetImages['/src/assets/products/kitchen_2.png']?.default,
      },
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
        description: 'Mantén tu baño limpio y organizado con repisas flotantes que ofrecen el espacio ideal para toallas, artículos de higiene y pequeños detalles decorativos. Funcionalidad y estilo para el día a día.',
        imgUrl: '/src/assets/products/restroom.png',
        imgData: lqipImages['/src/assets/products/restroom.png']?.default?.src,
        srcSet: srcsetImages['/src/assets/products/restroom.png']?.default,
      },
      {
        id: 'restroom-combo-002',
        slug: 'baño-completo',
        title: 'completo',
        price: '',
        description: 'Convierte tu baño en un espacio tipo spa con repisas flotantes que combinan diseño, elegancia y practicidad. Perfectas para exhibir toallas, accesorios y decoración con un acabado sofisticado.',
        imgUrl: '/src/assets/products/restroom.png',
        imgData: lqipImages['/src/assets/products/restroom.png']?.default?.src,
        srcSet: srcsetImages['/src/assets/products/restroom.png']?.default,
      }
    ]
  },
  {
    id: "category-office/bedroom-001",
    category: 'recamara / oficina',
    description: '',
    combos: [
      {
        id: 'office-combo-001',
        slug: 'oficina-basica',
        title: 'Office',
        price: '',
        description: '',
        imgUrl: '/src/assets/products/office.png',
        imgData: lqipImages['/src/assets/products/office.png']?.default?.src,
        srcSet: srcsetImages['/src/assets/products/office.png']?.default,
      },
      {
        id: 'bedroom-combo-001',
        slug: 'recamara-basica',
        title: 'recamara',
        price: '',
        description: 'Transforma tu recámara con repisas flotantes modernas, ideales para exhibir decoración, libros, fotografías y objetos esenciales. La combinación perfecta de organización, calidez y un estilo limpio y contemporáneo.',
        imgUrl: '/src/assets/products/bedroom.png',
        imgData: lqipImages['/src/assets/products/bedroom.png']?.default?.src,
        srcSet: srcsetImages['/src/assets/products/bedroom.png']?.default,
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
        description: 'Dale un nuevo aire a tu sala con repisas flotantes que realzan cuadros, plantas, libros y piezas decorativas. La combinación ideal de almacenamiento funcional y diseño moderno para un espacio acogedor.',
        imgUrl: '/src/assets/products/livingroom.png',
        imgData: lqipImages['/src/assets/products/livingroom.png']?.default?.src,
        srcSet: srcsetImages['/src/assets/products/livingroom.png']?.default,
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
        slug: 'pasillo-premium',
        title: 'Premium',
        price: '',
        description: 'Sustituye muebles voluminosos por repisas flotantes que crean una sensación de mayor amplitud. Ideales para exhibir decoración, arte y objetos esenciales con un estilo moderno y minimalista.',
        imgUrl: '/src/assets/products/entrance.png',
        imgData: lqipImages['/src/assets/products/entrance.png']?.default?.src,
        srcSet: srcsetImages['/src/assets/products/entrance.png']?.default,
      }
    ]
  },
];