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

export const installationSteps = [
    {
        id: 'installation-step-001',
        step: 1,
        title: 'Elige la ubicación de instalación',
        imgUrl: '',
        instruction: 'Coloca el estante contra la pared para visualizar su posición.',
    },
    {
        id: 'installation-step-002',
        step: 2,
        title: 'Coloca la plantilla',
        imgUrl: '',
        instruction: 'Pega la plantilla incluida a la pared con cinta adhesiva. Usa un nivel para asegurarte de que esté perfectamente horizontal.',
    },
    {
        id: 'installation-step-003',
        step: 3,
        title: 'Marca los agujeros',
        imgUrl: '',
        instruction: 'Con un lápiz, marca el agujero en la pared y retira la plantilla.',
    },
    {
        id: 'installation-step-004',
        step: 4,
        title: 'Taladra los agujeros',
        imgUrl: '',
        instruction: 'Selecciona la broca adecuada para el tipo de pared y taladra cada agujero marcado. Retira cualquier residuo del interior.',
    },
    {
        id: 'installation-step-005',
        step: 5,
        title: 'Aprieta los tornillos de expansión',
        imgUrl: '',
        instruction: 'Con una llave inglesa, aprieta el perno de expansión en el sentido de las agujas del reloj hasta que sientas una resistencia firme.',
    },
    {
        id: 'installation-step-006',
        step: 6,
        title: 'Inserta el estante',
        imgUrl: '',
        instruction: 'Alinea los agujeros del tablero con las varillas y desliza el estante hacia la pared hasta que quede al ras',
    },
    {
        id: 'installation-step-007',
        step: 7,
        title: 'Verifica la instalación',
        imgUrl: '',
        instruction: 'Asegúrate de que el estante esté bien sujeto y no se mueva. Los pernos deben estar completamente apretados.',
    },
    {
        id: 'installation-step-008',
        step: 8,
        title: 'Terminado',
        imgUrl: '',
        instruction: '¡Tu estante ya está instalado! Deja que el estante se asiente completamente antes de colocarle peso.',
    }
]

