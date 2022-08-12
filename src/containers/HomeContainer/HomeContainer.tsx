import { NextPage } from 'next'

import { Categories, Category } from 'constants/types'

import { useFavorites } from 'hooks'

import CategorySection from 'components/CategorySection'
import { ACTIVE_CATEGORIES } from 'constants/general'

const Home: NextPage<Categories> = ({ categories }) => {
  const { favsCategories } = useFavorites()

  return (
    <main className="container mx-auto pt-20 px-4 md:px-8">
      <CategorySection title="Favoritos" items={favsCategories} fav />

      {categories.map((category: Category, idx: number) => {
        if (ACTIVE_CATEGORIES.includes(category.title))
          return (
            <CategorySection
              key={category.title}
              title={category.title}
              items={category.items}
              order={idx + 1}
            />
          )
      })}
    </main>
  )
}

export default Home
