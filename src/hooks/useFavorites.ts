import { useFavoritesContext } from 'context/favoritesContext'
import { CategoryItem } from 'constants/types'
import uniqBy from 'lodash/uniqBy'

const useFavorites = () => {
  const { favsCategories, setFavsCategories } = useFavoritesContext()

  const setNewFavorite = (item: CategoryItem) => {
    setFavsCategories(uniqBy([...favsCategories, item], 'id'))
  }

  const removeFavorite = (item: CategoryItem) => {
    const newarr = favsCategories.filter((favs) => favs.id !== item.id)

    console.log(favsCategories)
    console.log(newarr)

    setFavsCategories(newarr)
  }

  return {
    favsCategories,
    setNewFavorite,
    removeFavorite,
  }
}

export default useFavorites
