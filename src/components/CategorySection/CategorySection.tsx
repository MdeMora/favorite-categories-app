import { Category, CategoryItem } from 'constants/types'
import isEmpty from 'lodash/isEmpty'

import CategoryCard from 'components/CategoryCard'

interface CategorySection extends Category {
  fav?: boolean
  order?: number
}

const CategorySection = ({ title, items, fav, order }: CategorySection) => {
  return (
    <section>
      <h2 className="font-bold text-xl mb-9 uppercase text-center sm:text-left">
        {title}{' '}
        <span className="capitalize">{order && `(Categoria ${order})`}</span>
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-8 ">
        {isEmpty(items) ? (
          <p className="mb-12 text-center sm:text-left w-full">
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
    </section>
  )
}

export default CategorySection
