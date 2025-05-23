import { CategoryData, Category } from '../types/category'

const categoryData: CategoryData = {
  "category": [
    {
      "title": "impresion-offset",
      "bgImage": "/impresion-offset/bgImageOff.png",
      "value": "Impresión Offset",
      "subtitle": "Calidad en Cada Impresión",
      "video": "/impresion-offset/offset.mp4",
      "text": "Impresiones de hasta 70x100cm. Cuatricromía, colores especiales y barníz. Contamos con la más alta tecnología y control de calidad para que sus piezas gráficas sean nuestra carta presentación.",
      "principalImage": "",
      "carousel-1": "/impresion-offset/ftOff-1.jpg",
      "carousel-2": "/impresion-offset/ftOff-2.jpg",
      "carousel-3": "/impresion-offset/ftOff-3.jpg",
      "carousel-4": "/impresion-offset/offset-portada.jpg",
    },
    {
      "title": "comunicacion-visual",
      "bgImage": "/bgImage.png",
      "value": "Comunicación Visual",
      "subtitle": "Impacto que Comunica",
      "video": "/comunicacion-visual/comunicacion.mp4",
      "text": "Nuestros servicios abarcan desde letreros y pancartas hasta folletos, productos promocionales, banners y rool up y marquesinas. Ofrecemos servicio a domicilio, realizamos la instalación en oficinas y espacios comerciales, asegurando una colocación profesional y segura.",
      "principalImage": "",
      "carousel-1": "/comunicacion-visual/comu1.jpg",
      "carousel-2": "/comunicacion-visual/comu2.jpg",
      "carousel-3": "/comunicacion-visual/comu3.jpg",
      "carousel-4": "/comunicacion-visual/comu4.jpg",
      "carousel-5": "/comunicacion-visual/comu5.jpg",
      "carousel-6": "/comunicacion-visual/comu6.jpg",
    },
    {
      "title": "impresion-digital",
      "bgImage": "/impresion-digital/bgImageDigital.webp",
      "value": "Impresión Digital",
      "subtitle": "Precisión al Instante",
      "video": "/impresion-digital/digital.mp4",
      "text": "Ideal para pequeñas cantidades y trabajos urgentes. Alta velocidad de impresión sin chapa. Stickers precortados en baja demanda.",
      "principalImage": "",
      "carousel-1": "/impresion-digital/Impresion1.webp",
      "carousel-2": "/impresion-digital/Impresion2.webp",
      "carousel-3": "/impresion-digital/Impresion3.webp",
      "carousel-4": "/impresion-digital/Impresion4.webp",
      "carousel-5": "/impresion-digital/Impresion7.webp",
    },
    {
      "title": "envases-embalajes",
      "bgImage": "/bgImage.png",
      "value": "Envases y Emabalajes",
      "subtitle": "Packaging que Destaca",
      "video": "/envases-embalajes/envases.mp4",
      "text": "Fabricamos packaging, estuches, cajas, bolsas impresas y exhibidores en cartulina y microcorrugado. Pensá en tu producto. En el packaging pensamos nosotros, logrando que se destaque y valore su contenido.",
      "principalImage": "",
      "carousel-1": "/envases-embalajes/envases_1.webp",
      "carousel-2": "/envases-embalajes/envases_2.webp",
      "carousel-3": "/envases-embalajes/envases_3.webp",
      "carousel-4": "/envases-embalajes/envases_4.webp",
      "carousel-5": "/envases-embalajes/envases_5.webp",
      "carousel-6": "/envases-embalajes/envases_6.webp",
      "carousel-7": "/envases-embalajes/envases_7.webp",
      "carousel-8": "/envases-embalajes/envases_8.webp",
      "carousel-9": "/envases-embalajes/envases_9.webp",

    },
    {
      "title": "merchandising",
      "bgImage": "/bgImage.png",
      "value": "Merchandising",
      "subtitle": "Tu Marca en Todo",
      "video": "/merchandising/merch.mp4",
      "text": "Amplia variedad en almanaques y agendas personalizadas",
      "principalImage": "",
      "carousel-1": "/merchandising/Merch.webp",
      "carousel-2": "/merchandising/Merch2.webp",
      "carousel-3": "/merchandising/Merch3.webp",
      "carousel-4": "/merchandising/Merch4.webp",
      "carousel-5": "/merchandising/Merch5.webp",
      "carousel-6": "/merchandising/Merch6.webp",
      "carousel-7": "/merchandising/Merch7.webp",
      "carousel-8": "/merchandising/Merch8.webp",
    },
    {
      "title": "vasos-polipapel",
      "bgImage": "/bgImage.png",
      "value": "Vasos polipapel",
      "subtitle": "Vasos que Hablan",
      "video": "/vasos-polipapel/video_vasos.mp4",
      "text": "Contamos con gran variedad de medidas para personalizar tus vasos o vasos genericos de 4 a 24 onzas y potes de helados de 120cc, 250 cc, 360 cc y 500 cc . Baldes de pochoclo , bebidas frias y calientes.",
      "principalImage": "",
      "carousel-1": "/vasos-polipapel/vasos_1.webp",
      "carousel-2": "/vasos-polipapel/vasos_2.webp",
      "carousel-3": "/vasos-polipapel/vasos_3.webp",
      "carousel-4": "/vasos-polipapel/vasos_4.webp",
      "carousel-5": "/vasos-polipapel/vasos_5.webp",
      "carousel-6": "/vasos-polipapel/vasos_6.webp",
      "carousel-7": "/vasos-polipapel/vasos_7.webp",
      "carousel-8": "/vasos-polipapel/vasos_8.webp",
      "carousel-9": "/vasos-polipapel/vasos_9.webp",
    }
  ]
}

export function getCategory(slug: string): Category | undefined {
  return categoryData.category.find(cat => cat.title === slug)
}
