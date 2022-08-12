import {
  createContext,
  useState,
  useMemo,
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react'
import { CategoryItem } from 'constants/types'

interface FavoritesContextInterface {
  favsCategories: CategoryItem[] | []
  setFavsCategories: Dispatch<SetStateAction<CategoryItem[] | []>>
}
interface LocalProps {
  children: ReactNode
}

export const FavoritesContext = createContext<FavoritesContextInterface | null>(
  null
)

export const FavoritesProvider: FC<LocalProps> = ({ children }) => {
  const [favsCategories, setFavsCategories] = useState<CategoryItem[] | []>([])

  const value = useMemo(
    () => ({
      favsCategories,
      setFavsCategories,
    }),
    [favsCategories]
  )

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavoritesContext = () => useContext(FavoritesContext)
