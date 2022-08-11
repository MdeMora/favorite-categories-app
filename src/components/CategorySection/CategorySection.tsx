import { Category, CategoryItem } from 'constants/types'

import CategoryCard from 'components/CategoryCard'

const CategorySection = ({ title, items }: Category) => {
  return (
    <section>
      <h2 className="text-xl">{title}</h2>
      {items.map((item: CategoryItem) => (
        <CategoryCard key={item.id} item={item} sectionTitle={title} />
      ))}
    </section>
  )
}

export default CategorySection
