import { useFavoritesContext } from 'context/favoritesContext'
import { CategoryItem } from 'constants/types'
import uniqBy from 'lodash/uniqBy'

const UNIQUE_KEY = 'id'

const useFavorites = () => {
  const { favsCategories, setFavsCategories } = useFavoritesContext()

  const setNewFavorite = (item: CategoryItem) => {
    setFavsCategories(uniqBy([...favsCategories, item], UNIQUE_KEY))
  }

  const removeFavorite = (item: CategoryItem) => {
    const newarr = favsCategories.filter((favs) => favs.id !== item.id)

    setFavsCategories(newarr)
  }

  return {
    favsCategories,
    setNewFavorite,
    removeFavorite,
  }
}

export default useFavorites
