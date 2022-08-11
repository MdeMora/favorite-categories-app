import { NextPage } from 'next'

import { Categories, Category } from 'constants/types'

import CategorySection from 'components/CategorySection'

const Home: NextPage<Categories> = ({ categories }) => {
  return (
    <main>
      <CategorySection title="Favoritos" items={[]} />

      {categories.map((category: Category) => (
        <CategorySection
          key={category.title}
          title={category.title}
          items={category.items}
        />
      ))}
    </main>
  )
}

export default Home
