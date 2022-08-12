import { Category, CategoryItem } from 'constants/types'
import isEmpty from 'lodash/isEmpty'

import { useBreakpoints } from 'hooks'
import CategoryCard from 'components/CategoryCard'
import MobileCarrousel from 'components/MobileCarrousel'

interface CategorySection extends Category {
  fav?: boolean
  order?: number
}

const CategorySection = ({ title, items, fav, order }: CategorySection) => {
  const { isSmallScreen } = useBreakpoints()

  return (
    <section>
      <h2 className="font-bold text-xl mb-9 uppercase ">
        {title}{' '}
        <span className="capitalize">{order && `(Categoria ${order})`}</span>
      </h2>

      {isEmpty(items) ? (
        <p className="mb-12  w-full">
          Añade tus obras favoritas para verlas aqui!
        </p>
      ) : isSmallScreen ? (
        <MobileCarrousel items={items} title={title} fav={fav} />
      ) : (
        <div className="flex flex-wrap gap-4 md:gap-8 ">
          {isEmpty(items) ? (
            <p className="mb-12  w-full">
              Añade tus obras favoritas para verlas aqui!
            </p>
          ) : (
            items.map((item: CategoryItem) => (
              <CategoryCard
                key={item.id}
                item={item}
                sectionTitle={title}
                fav={fav}
              />
            ))
          )}
          {}
        </div>
      )}
    </section>
  )
}

export default CategorySection
