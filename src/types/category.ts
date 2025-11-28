
export interface AdditionalSection {
  title: string
  subtitle: string
  text: string
  videos: string[]
  images: string[]
}

export interface Category {
  title: string
  bgImage: string
  value: string
  subtitle: string
  video: string[]
  'video-1'?: string
  'video-2'?: string
  'video-3'?: string
  'video-4'?: string
  'video-5'?: string
  'video-6'?: string
  'video-7'?: string
  'video-8'?: string
  'video-9'?: string
  'video-10'?: string
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
  'carousel-10'?: string
  'carousel-11'?: string
  'carousel-12'?: string
  'carousel-13'?: string
  'carousel-14'?: string
  'carousel-15'?: string
  'carousel-16'?: string
  'carousel-17'?: string
  additionalSections?: AdditionalSection[]
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

