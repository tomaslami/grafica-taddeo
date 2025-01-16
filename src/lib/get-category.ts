import { CategoryData, Category } from '../types/category'

const categoryData: CategoryData = {
  "category": [
    {
      "title": "impresion-offset",
      "bgImage": "/bgImage.png",
      "value": "Impresión Offset",
      "subtitle": "Lorem ipsum dolor",
      "text": "Impresiones de hasta 70x100cm. Cuatricromía, colores especiales y barníz. Contamos con la más alta tecnología y control de calidad para que sus piezas gráficas sean nuestra carta presentación.",
      "principalImage": "",
      "carousel-1": "/impresion-offset/ftOff-1.jpg",
      "carousel-2": "/impresion-offset/ftOff-1.jpg",
      "carousel-3": "/impresion-offset/ftOff-1.jpg",
      "carousel-4": "/impresion-offset/ftOff-1.jpg",
      "carousel-5": "/impresion-offset/ftOff-1.jpg"
    },
    {
      "title": "comunicacion-visual",
      "bgImage": "/bgImage.png",
      "value": "Comunicación Visual",
      "subtitle": "Lorem ipsum dolor",
      "text": "Somos expertos en materializar tus necesidades gráficas personales y las de tu empresa. Nuestros servicios abarcan desde letreros y pancartas hasta folletos, productos promocionales, banners y rool up. Marquesinas, letreros Luimosos. Contamos con los medios para la atencion y colocaion en sucursales en todo el pais.",
      "principalImage": "",
      "carousel-1": "",
      "carousel-2": "",
      "carousel-3": "",
      "carousel-4": "",
      "carousel-5": ""
    },
    {
      "title": "impresion-digital",
      "bgImage": "/bgImage.png",
      "value": "Impresión Digital",
      "subtitle": "Lorem ipsum dolor",
      "text": "Ideal para pequeñas cantidades y trabajos urgentes. Alta velocidad de impresión sin chapa. Stickers precortados en baja demanda.",
      "principalImage": "",
      "carousel-1": "",
      "carousel-2": "",
      "carousel-3": "",
      "carousel-4": "",
      "carousel-5": ""
    },
    {
      "title": "envases-embalajes",
      "bgImage": "/bgImage.png",
      "value": "Envases y Emabalajes",
      "subtitle": "Lorem ipsum dolor",
      "text": "Fabricamos packaging, estuches, cajas, bolsas impresas y exhibidores en cartulina y microcorrugado. Pensá en tu producto. En el packaging pensamos nosotros, logrando que se destaque y valore su contenido.",
      "principalImage": "",
      "carousel-1": "",
      "carousel-2": "",
      "carousel-3": "",
      "carousel-4": "",
      "carousel-5": ""
    },
    {
      "title": "merchandising",
      "bgImage": "/bgImage.png",
      "value": "Merchandising",
      "subtitle": "Lorem ipsum dolor",
      "text": "Amplia variedad en almanaques y agendas personalizadas",
      "principalImage": "",
      "carousel-1": "",
      "carousel-2": "",
      "carousel-3": "",
      "carousel-4": "",
      "carousel-5": ""
    },
    {
      "title": "vasos-polipapel",
      "bgImage": "/bgImage.png",
      "value": "Vasos polipapel",
      "subtitle": "Lorem ipsum dolor",
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
