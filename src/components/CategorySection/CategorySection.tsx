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
      <h2 className="font-bold text-xl mb-9 uppercase">
        {title}{' '}
        <span className="capitalize">{order && `(Categoria ${order})`}</span>
      </h2>
      <div className="flex flex-wrap justify-between sm:justify-start ">
        {isEmpty(items) ? (
          <p className="mb-12">Añade tus obras favoritas para verlas aqui!</p>
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
