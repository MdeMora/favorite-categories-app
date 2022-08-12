import useSWR from 'swr'
import { NextPage } from 'next'

import { Category, Categories } from 'constants/types'
import { apiFetcher } from 'utils/fetching'
import { useFavorites } from 'hooks'

import CategorySection from 'components/CategorySection'
import { ACTIVE_CATEGORIES } from 'constants/general'

const Home: NextPage = () => {
  const { data } = useSWR<Categories>('api/categories', apiFetcher)

  const { favsCategories } = useFavorites()

  return (
    <main className="container mx-auto pt-20 px-4 md:px-8">
      <CategorySection title="Favoritos" items={favsCategories} fav />

      {data
        ? data?.categories.map((category: Category, idx: number) => {
            if (ACTIVE_CATEGORIES.includes(category.title))
              return (
                <CategorySection
                  key={category.title}
                  title={category.title}
                  items={category.items}
                  order={idx + 1}
                />
              )
          })
        : 'Loading...'}
    </main>
  )
}

export default Home
