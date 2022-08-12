import { Swiper, SwiperSlide } from 'swiper/react'
import { Category, CategoryItem } from 'constants/types'
import CategoryCard from 'components/CategoryCard'

import 'swiper/css'

interface MobileCarrouselProps extends Category {
  fav?: boolean
}

const MobileCarrousel = ({ items, title, fav }: MobileCarrouselProps) => (
  <Swiper slidesPerView={'auto'} spaceBetween={18}>
    {items.map((item: CategoryItem) => (
      <SwiperSlide key={item.id} className="max-w-[185px]">
        <CategoryCard item={item} sectionTitle={title} fav={fav} />
      </SwiperSlide>
    ))}
  </Swiper>
)

export default MobileCarrousel
