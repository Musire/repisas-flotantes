// Helper to extract image assets safely from Vite glob maps
function getImageAsset(path, globMap) {
  const asset = globMap[path]?.default;
  return typeof asset === 'string' ? asset : asset?.src || '';
}

// 1. LQIP Placeholders (Base64 / Small image metadata)
const lqipImages = import.meta.glob('/src/assets/idea/*.png', {
  query: '?w=20&blur=5&as=metadata',
  eager: true,
});

// 2. SrcSet Strings (WebP responsive formats)
const srcsetImages = import.meta.glob('/src/assets/idea/*.png', {
  query: '?w=400;800;1200&format=webp&as=srcset',
  eager: true,
});

// 3. Main Fallback Image Source (WebP conversion)
const fallbackImages = import.meta.glob('/src/assets/idea/*.png', {
  query: '?w=800&format=webp',
  eager: true,
});

// Helper to construct product image payloads cleanly
function buildImagePayload(imagePath) {
  return {
    url: getImageAsset(imagePath, fallbackImages) || imagePath,
    srcSet: getImageAsset(imagePath, srcsetImages),
    imgData: getImageAsset(imagePath, lqipImages),
  };
}

export const bundleDataConfig = {
  grande: [
    {
      id: 'price-combo-001',
      title: '1 repisa grande',
      ...buildImagePayload('/src/assets/idea/single_board.png'),
      alt: 'imagen-de-tabla-grande-basico',
      scale: '',
      price: '250',
      tier: 'Paquete Basico',
    },
    {
      id: 'price-combo-002',
      tier: 'Duo Funcional',
      title: '2 repisas grandes',
      ...buildImagePayload('/src/assets/idea/double_board.png'),
      alt: 'imagen-de-tabla-grande-duo',
      scale: '',
      price: '470',
      ahorro: '$30',
    },
    {
      id: 'price-combo-003',
      tier: 'Trio Organizador',
      title: '3 repisas grandes',
      ...buildImagePayload('/src/assets/idea/triple_board.png'),
      alt: 'imagen-de-tabla-grande-trio',
      scale: '',
      price: '690',
      ahorro: '$60',
    },
  ],
  mediano: [
    {
      id: 'price-combo-001',
      tier: 'Paquete Basico',
      title: '1 repisa mediana',
      ...buildImagePayload('/src/assets/idea/single_board.png'),
      alt: 'imagen-de-tabla-mediano-basico',
      scale: '',
      price: '225',
      ahorro: '$60',
    },
    {
      id: 'price-combo-002',
      tier: 'Duo Funcional',
      title: '1 repisa medianas',
      ...buildImagePayload('/src/assets/idea/double_board.png'),
      alt: 'imagen-de-tabla-mediano-duo',
      scale: '',
      price: '420',
      ahorro: '$30',
    },
    {
      id: 'price-combo-003',
      tier: 'Trio Organizador',
      title: '3 repisas medianas',
      ...buildImagePayload('/src/assets/idea/triple_board.png'),
      alt: 'imagen-de-tabla-mediano-trio',
      scale: '',
      price: '620',
      ahorro: '$45',
    },
  ],
  chico: [
    {
      id: 'price-combo-001',
      tier: 'Paquete Basico',
      title: '1 repisa chica',
      ...buildImagePayload('/src/assets/idea/single_board.png'),
      alt: 'imagen-de-tabla-chico-basico',
      scale: '',
      price: '190',
      ahorro: '$60',
    },
    {
      id: 'price-combo-002',
      tier: 'Duo Funcional',
      title: '1 repisa chicas',
      ...buildImagePayload('/src/assets/idea/double_board.png'),
      alt: 'imagen-de-tabla-chico-duo',
      scale: '',
      price: '355',
      ahorro: '$25',
    },
    {
      id: 'price-combo-003',
      tier: 'Trio Organizador',
      title: '3 repisas chicas',
      ...buildImagePayload('/src/assets/idea/triple_board.png'),
      alt: 'imagen-de-tabla-chico-trio',
      scale: '',
      price: '520',
      ahorro: '$50',
    },
  ],
};

// Helper lookup functions
export function getBundleByVariant(variant) {
  return bundleDataConfig[variant] || [];
}

export function getComboById(variant, comboId) {
  return bundleDataConfig[variant]?.find((combo) => combo.id === comboId);
}