
export interface Category {
  title: string
  bgImage: string
  value: string
  subtitle: string
  text: string
  principalImage: string
  'carousel-1'?: string
  'carousel-2'?: string
  'carousel-3'?: string
  'carousel-4'?: string
  'carousel-5'?: string
  'carousel-6'?: string
  'carousel-7'?: string
  'carousel-8'?: string
  'carousel-9'?: string
}

export interface CategoryData {
  category: Category[]
}


export const CarouselElements = [
  {
    id: 1,
    img: '/images/feature-1.jpg',
  },
  {
    id: 2,
    img: '/images/feature-2.jpg',
  },
  {
    id: 3,
    img: '/images/feature-3.jpg',
  },
  {
    id: 4,
    img: '/images/feature-4.jpg',
  },
  {
    id: 5,
    img: '/images/feature-5.jpg',
  },
]

