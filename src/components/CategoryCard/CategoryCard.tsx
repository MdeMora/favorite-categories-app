import classNames from 'classnames'
import { CategoryItem } from 'constants/types'
import { useFavorites } from 'hooks'
import Image from 'next/image'

interface CategorySectionProps {
  sectionTitle: string
  item: CategoryItem
  fav?: boolean
  last?: boolean
}

const CategoryCard = ({
  sectionTitle,
  item,
  fav,
  last,
}: CategorySectionProps) => {
  const { setNewFavorite, removeFavorite } = useFavorites()

  return (
    <div className="min-w-[185px] w-[185px] mr-1 sm:mr-8 mb-12 ">
      <Image
        src={item.image_url}
        alt={`Image of ${item.title}`}
        height={254}
        width={185}
      />
      <h6 className="text-sm h-6 font-bold">{item.title}</h6>
      <p className="text-xs line-clamp-3 leading-[11px] text-ellipsis my-3 tracking-tight hover:line-clamp-none">
        {item.description}
      </p>
      <p className="text-red text-xs">{sectionTitle}</p>

      {!fav ? (
        <button
          className="text-white bg-black w-full py-2 mt-4 text-sm font-bold hover:opacity-70"
          onClick={() => setNewFavorite(item)}
        >
          Favoritos
        </button>
      ) : (
        <button
          className="text-red border border-red border-solid w-full py-2 mt-4 text-sm font-bold hover:opacity-70"
          onClick={() => removeFavorite(item)}
        >
          Eliminar favoritos
        </button>
      )}
    </div>
  )
}

export default CategoryCard
