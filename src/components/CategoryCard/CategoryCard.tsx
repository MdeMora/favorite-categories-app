import { CategoryItem } from 'constants/types'

interface CategorySectionProps {
  sectionTitle: string
  item: CategoryItem
}

const CategoryCard = ({ sectionTitle, item }: CategorySectionProps) => {
  return (
    <section>
      <img src={item.image_url} alt={`Image of ${item.title}`} />
      <h6>{item.title}</h6>
      <p>{item.description}</p>
      <p>{sectionTitle}</p>
    </section>
  )
}

export default CategoryCard
